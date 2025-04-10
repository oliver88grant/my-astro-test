const fs = require('fs');
const path = require('path');
const axios = require('axios');

const INPUT_FILE = path.resolve(__dirname, 'products.json');
const OUTPUT_FILE = path.resolve(__dirname, 'products_with_descriptions.json');

async function loadProducts() {
  const raw = fs.readFileSync(INPUT_FILE, 'utf-8');
  const products = JSON.parse(raw);

  // Load partial output file if it exists
  let saved = [];
  if (fs.existsSync(OUTPUT_FILE)) {
    const savedRaw = fs.readFileSync(OUTPUT_FILE, 'utf-8');
    saved = JSON.parse(savedRaw);
  }

  // Create a Set of slugs already processed
  const processedSlugs = new Set(saved.map(p => p.slug));

  // Filter out already processed products
  const remaining = products.filter(p => !processedSlugs.has(p.slug));

  return { allProducts: saved, remaining };
}

async function describeImage(url) {
  try {
    const response = await axios.post('https://nestjs.50d.top/chatgpt/openaiCompletions', {
        "messages": [{
            "role": "system",
            "content": "Analyze the content of the provided image and describe it."
        }, {
            "role": "user",
            "content": [{
                "type": "text",
                "text": "Create a product description for the image in plastic crates context, return in html string format wrapped in a div container with class description-wrapper"
            }, {
                "type": "image_url",
                "image_url": {
                    "url": url,
                }
            }]
        }]
    });

    return response.data;
  } catch (err) {
    console.error('❌ Failed to describe image:', url, err.message);
    throw err;
  }
}

async function run() {
  const { allProducts, remaining } = await loadProducts();

  for (const product of remaining) {
    if (!product.images_arr || product.images_arr.length === 0) {
      console.warn(`⚠️ No image found for product: ${product.slug}`);
      continue;
    }

    const firstImage = product.images_arr[0]?.url;
    if (!firstImage) {
      console.warn(`⚠️ Missing image URL for product: ${product.slug}`);
      continue;
    }

    console.log(`🔍 Generating description for: ${product.title} (${product.slug})`);

    try {
      const description = await describeImage(firstImage);

      // Extract the HTML inside the code block
      const match = description.match(/```html\s*([\s\S]*?)\s*```/);
      if (match && match[1]) {

        let htmlContent = match[1];
        htmlContent = htmlContent.replace(/\n/g, '')

        product.ai_description_by_image = htmlContent;
        allProducts.push(product);

        // Save progress after each successful request
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allProducts, null, 2), 'utf-8');
        console.log(`✅ Saved: ${product.slug}`);
      }
 
    } catch (err) {
      console.log(`⛔ Skipped: ${product.slug}`);
      break; // Optional: break or continue based on your retry strategy
    }
  }

  console.log('🎉 Done processing products');
}

run();
