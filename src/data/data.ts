import type { Product, ProductCategory, Testimonial, FAQ } from '@/types/index'

export const productCategories: ProductCategory[] = [
  {
    id: '1',
    name: 'Online UPS',
    description: 'Double conversion technology providing the highest level of protection against all power disturbances for mission-critical applications.',
    slug: 'online-ups',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    name: 'Offline UPS',
    description: 'Cost-effective backup power for basic home and small office equipment. Switches to battery power during outages.',
    slug: 'offline-ups',
    image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    name: 'Line-Interactive UPS',
    description: 'Balanced protection with automatic voltage regulation for environments with minor power fluctuations.',
    slug: 'line-interactive-ups',
    image: 'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    name: 'Modular UPS',
    description: 'Scalable and redundant solutions for growing businesses and data centers, allowing easy capacity expansion.',
    slug: 'modular-ups',
    image: 'https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
]

export const products: Product[] = [
  {
    id: '1',
    name: 'PowerShield Pro 3000',
    shortDescription: 'Online double-conversion UPS for mission-critical applications',
    description: 'The PowerShield Pro 3000 is a premium online double-conversion UPS system designed for mission-critical applications requiring the highest level of power protection. With true sine wave output and zero transfer time to battery, it ensures connected equipment remains protected against the full spectrum of power problems, including outages, surges, sags, spikes, and frequency variations.',
    price: 1299.99,
    category: 'online-ups',
    capacityRange: '3000VA / 2700W',
    inputVoltage: '200-240V',
    outputVoltage: '200/208/220/230/240V (configurable)',
    formFactor: 'Tower/Rack convertible',
    runtime: 'Up to 15 minutes at full load',
    features: [
      'True double-conversion technology',
      'Unity power factor (0.9)',
      'Advanced LCD display',
      'ECO mode for energy efficiency',
      'Hot-swappable batteries',
      'Optional extended battery modules',
      'Network management card included',
      'Power factor correction',
      'Generator compatible'
    ],
    applications: [
      'Enterprise servers',
      'Network equipment',
      'Small data centers',
      'Medical equipment',
      'Industrial control systems'
    ],
    images: [
      'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3856346/pexels-photo-3856346.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specs: {
      'Technology': 'Double-conversion online',
      'Capacity': '3000VA / 2700W',
      'Input Voltage Range': '160-300V without derating',
      'Input Frequency': '40-70Hz (auto-sensing)',
      'Output Voltage': '200/208/220/230/240V (configurable)',
      'Output Voltage Regulation': '±1%',
      'Output Frequency': '50/60Hz ±0.1Hz (battery mode)',
      'Transfer Time': '0ms',
      'Waveform': 'Pure sine wave',
      'Efficiency': '92% (normal mode), 98% (ECO mode)',
      'Battery Type': '12V/9Ah x 6',
      'Typical Recharge Time': '3 hours to 90%',
      'Communications': 'USB, RS-232, SNMP slot',
      'Noise Level': '<55dB at 1 meter',
      'Operating Temperature': '0-40°C',
      'Dimensions (HxWxD)': '85mm x 438mm x 600mm (2U)',
      'Weight': '27kg'
    },
    slug: 'powershield-pro-3000',
    isFeatured: true,
    isNew: true
  },
  {
    id: '2',
    name: 'PowerShield Essential 850',
    shortDescription: 'Reliable offline UPS for home and small office protection',
    description: 'The PowerShield Essential 850 provides reliable power protection for home computers and essential office equipment. With automatic voltage regulation and surge protection, it guards against common power problems and provides battery backup during outages.',
    price: 129.99,
    category: 'offline-ups',
    capacityRange: '850VA / 510W',
    inputVoltage: '165-280V',
    outputVoltage: '230V',
    formFactor: 'Tower',
    runtime: 'Up to 20 minutes at half load',
    features: [
      'Automatic Voltage Regulation (AVR)',
      'LED status indicators',
      'Audible alarms',
      'USB connectivity',
      'Cold start function',
      'Compact design',
      'Surge protection',
      'Auto restart'
    ],
    applications: [
      'Home computers',
      'Gaming systems',
      'Home networking equipment',
      'Point of sale systems',
      'Small office equipment'
    ],
    images: [
      'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3520694/pexels-photo-3520694.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specs: {
      'Technology': 'Line-interactive',
      'Capacity': '850VA / 510W',
      'Input Voltage Range': '165-280V',
      'Input Frequency': '50/60Hz (auto-sensing)',
      'Output Voltage': '230V',
      'Output Voltage Regulation': '±10%',
      'Transfer Time': 'Typical 2-6ms',
      'Waveform': 'Simulated sine wave (stepped approximation)',
      'Battery Type': '12V/9Ah x 1',
      'Typical Recharge Time': '6-8 hours to 90%',
      'Communications': 'USB',
      'Noise Level': '<40dB at 1 meter',
      'Operating Temperature': '0-40°C',
      'Dimensions (HxWxD)': '287mm x 100mm x 142mm',
      'Weight': '4.5kg'
    },
    slug: 'powershield-essential-850',
    isPopular: true
  },
  {
    id: '3',
    name: 'PowerShield Interactive 1500',
    shortDescription: 'Line-interactive UPS with voltage regulation for office equipment',
    description: 'The PowerShield Interactive 1500 is a line-interactive UPS system that provides protection against power outages, brownouts, and surges. With automatic voltage regulation, it corrects minor power fluctuations without switching to battery, extending battery life and providing more runtime during actual outages.',
    price: 249.99,
    category: 'line-interactive-ups',
    capacityRange: '1500VA / 900W',
    inputVoltage: '170-280V',
    outputVoltage: '230V',
    formFactor: 'Tower',
    runtime: 'Up to 30 minutes at half load',
    features: [
      'Automatic Voltage Regulation (AVR)',
      'LCD display panel',
      'USB and serial connectivity',
      'Surge protection',
      'Software included',
      'Overload protection',
      'Battery replacement alarm',
      'Cold start capability'
    ],
    applications: [
      'Office workstations',
      'Network equipment',
      'POS systems',
      'External storage devices',
      'Entry-level servers'
    ],
    images: [
      'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1034940/pexels-photo-1034940.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specs: {
      'Technology': 'Line-interactive',
      'Capacity': '1500VA / 900W',
      'Input Voltage Range': '170-280V without derating',
      'Input Frequency': '50/60Hz (auto-sensing)',
      'Output Voltage': '230V',
      'Output Voltage Regulation': '±10%',
      'Transfer Time': '2-6ms typical',
      'Waveform': 'Simulated sine wave',
      'Battery Type': '12V/9Ah x 2',
      'Typical Recharge Time': '6-8 hours to 90%',
      'Communications': 'USB, RS-232',
      'Noise Level': '<45dB at 1 meter',
      'Operating Temperature': '0-40°C',
      'Dimensions (HxWxD)': '350mm x 146mm x 160mm',
      'Weight': '10.2kg'
    },
    slug: 'powershield-interactive-1500',
    isFeatured: true
  },
  {
    id: '4',
    name: 'PowerShield Modular 10000',
    shortDescription: 'Scalable modular UPS system for growing data centers',
    description: 'The PowerShield Modular 10000 is a high-performance modular UPS system that offers unmatched scalability and availability. Designed for data centers and critical infrastructure, it allows for incremental capacity expansion and offers N+1 redundancy. The hot-swappable power modules enable maintenance without downtime.',
    price: 6999.99,
    category: 'modular-ups',
    capacityRange: '10kVA / 10kW (expandable to 30kVA)',
    inputVoltage: '3-phase 380/400/415V',
    outputVoltage: '3-phase 380/400/415V',
    formFactor: 'Rack/Tower modular',
    runtime: 'Configurable with external battery cabinets',
    features: [
      'Hot-swappable power modules',
      'N+1 redundancy',
      'Unity power factor (1.0)',
      'Advanced touchscreen interface',
      'High efficiency mode (up to 96%)',
      'Parallel operation capability',
      'Remote monitoring and management',
      'Intelligent battery management',
      'Emergency power off (EPO)'
    ],
    applications: [
      'Data centers',
      'Server rooms',
      'Telecommunications',
      'Banking and finance',
      'Industrial facilities',
      'Healthcare infrastructure'
    ],
    images: [
      'https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specs: {
      'Technology': 'Double-conversion online, modular',
      'Capacity': '10kVA / 10kW (base), expandable to 30kVA with additional modules',
      'Input Voltage Range': '304-478V 3-phase',
      'Input Frequency': '40-70Hz',
      'Output Voltage': '380/400/415V 3-phase',
      'Output Voltage Regulation': '±1%',
      'Output Frequency': '50/60Hz ±0.1Hz',
      'Transfer Time': '0ms',
      'Waveform': 'Pure sine wave',
      'Efficiency': '95% at full load (normal mode), 98% (ECO mode)',
      'Power Modules': 'Hot-swappable 10kVA/10kW modules',
      'Communications': 'USB, RS-485, dry contacts, SNMP/HTTP',
      'Parallel Capability': 'Up to 4 units for capacity or redundancy',
      'Operating Temperature': '0-40°C',
      'Dimensions (HxWxD)': '1300mm x 600mm x 1000mm',
      'Weight': '160kg (fully configured)'
    },
    slug: 'powershield-modular-10000',
    isFeatured: true,
    isNew: true
  },
  {
    id: '5',
    name: 'PowerShield Pro 1500',
    shortDescription: 'Online double-conversion UPS for small business servers',
    description: 'The PowerShield Pro 1500 delivers enterprise-grade power protection in a compact form factor. Perfect for small to medium businesses that require high-quality power protection for servers and critical network equipment.',
    price: 699.99,
    category: 'online-ups',
    capacityRange: '1500VA / 1350W',
    inputVoltage: '200-240V',
    outputVoltage: '200/208/220/230/240V (configurable)',
    formFactor: 'Tower/Rack convertible (2U)',
    runtime: 'Up to 11 minutes at full load',
    features: [
      'True double-conversion technology',
      'High power factor (0.9)',
      'LCD display panel',
      'Hot-swappable batteries',
      'ECO mode for energy savings',
      'Emergency power off function',
      'Intelligent battery management',
      'Optional SNMP/web card'
    ],
    applications: [
      'Small business servers',
      'Network switches and routers',
      'Storage systems',
      'VoIP equipment',
      'Security systems'
    ],
    images: [
      'https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/163726/electricity-computer-server-159282.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specs: {
      'Technology': 'Double-conversion online',
      'Capacity': '1500VA / 1350W',
      'Input Voltage Range': '160-280V without derating',
      'Input Frequency': '40-70Hz (auto-sensing)',
      'Output Voltage': '200/208/220/230/240V (configurable)',
      'Output Voltage Regulation': '±1%',
      'Output Frequency': '50/60Hz ±0.1Hz',
      'Transfer Time': '0ms',
      'Waveform': 'Pure sine wave',
      'Efficiency': '91% (normal mode), 97% (ECO mode)',
      'Battery Type': '12V/9Ah x 3',
      'Typical Recharge Time': '3 hours to 90%',
      'Communications': 'USB, RS-232, SNMP slot',
      'Noise Level': '<50dB at 1 meter',
      'Dimensions (HxWxD)': '85mm x 438mm x 450mm (2U)',
      'Weight': '17.5kg'
    },
    slug: 'powershield-pro-1500',
    isPopular: true
  },
  {
    id: '6',
    name: 'PowerShield Essential 600',
    shortDescription: 'Basic UPS protection for home computers and electronics',
    description: 'The PowerShield Essential 600 provides affordable power protection for home computers, gaming systems, and electronic devices. Compact and reliable, it delivers peace of mind during power outages.',
    price: 89.99,
    category: 'offline-ups',
    capacityRange: '600VA / 360W',
    inputVoltage: '170-280V',
    outputVoltage: '230V',
    formFactor: 'Tower',
    runtime: 'Up to 15 minutes at half load',
    features: [
      'LED status indicators',
      'Audible alarms',
      'USB port with monitoring software',
      'Overload protection',
      'Short circuit protection',
      'Compact design',
      'Auto restart after power return'
    ],
    applications: [
      'Home computers',
      'Gaming consoles',
      'Routers and modems',
      'Home entertainment systems',
      'Small electronic devices'
    ],
    images: [
      'https://images.pexels.com/photos/6970441/pexels-photo-6970441.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    specs: {
      'Technology': 'Standby (offline)',
      'Capacity': '600VA / 360W',
      'Input Voltage Range': '170-280V',
      'Input Frequency': '50/60Hz (auto-sensing)',
      'Output Voltage': '230V',
      'Output Voltage Regulation': '±10%',
      'Transfer Time': '2-6ms typical',
      'Waveform': 'Simulated sine wave',
      'Battery Type': '12V/7Ah x 1',
      'Typical Recharge Time': '6-8 hours to 90%',
      'Communications': 'USB',
      'Noise Level': '<40dB at 1 meter',
      'Operating Temperature': '0-40°C',
      'Dimensions (HxWxD)': '250mm x 100mm x 140mm',
      'Weight': '3.8kg'
    },
    slug: 'powershield-essential-600',
    isPopular: true
  }
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Michael Chen',
    company: 'TechCore Solutions',
    role: 'IT Director',
    content: 'We deployed PowerShield UPS systems across our data center last year, and they\'ve been rock solid through multiple power events. The remote monitoring capabilities have been invaluable for our team.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    company: 'MediTrust Healthcare',
    role: 'Facilities Manager',
    content: 'In healthcare, reliable power isn\'t just important—it\'s critical for patient care. PowerShield\'s modular UPS solutions have given us the flexibility to scale as our facility grows while ensuring our equipment never loses power.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    name: 'Robert Patel',
    company: 'Quantum Computing Labs',
    role: 'Research Director',
    content: 'The PowerShield Pro series has been essential for our sensitive research equipment. The pure sine wave output and zero transfer time have eliminated issues we experienced with previous power protection solutions.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    name: 'Emma Rodriguez',
    company: 'First National Bank',
    role: 'CTO',
    content: 'After experiencing a major power outage that impacted our operations, we upgraded to PowerShield\'s online UPS systems. Their redundant power protection has already proven its value during several brownouts.',
    image: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
]

export const faqs: FAQ[] = [
  {
    question: "What's the difference between online and offline UPS systems?",
    answer: "An online UPS (double-conversion) continuously converts incoming AC power to DC and then back to clean AC power, providing complete isolation from power problems. An offline UPS (standby) normally passes utility power through and only switches to battery during power failures, offering less protection but at a lower cost.",
    category: "general"
  },
  {
    question: "How do I determine what size UPS I need?",
    answer: "To size a UPS correctly, calculate the total power consumption of all equipment to be protected. Check the wattage rating of each device (found on product labels or specifications) and add them together. Then, add 20-30% capacity for future growth. Finally, match this total to a UPS with adequate capacity.",
    category: "technical"
  },
  {
    question: "How often should UPS batteries be replaced?",
    answer: "UPS batteries typically last 3-5 years, depending on operating conditions and maintenance. Factors that can reduce battery life include high temperatures, frequent discharges, and improper storage. Many of our UPS models include battery health monitoring to help you determine when replacement is needed.",
    category: "maintenance"
  },
  {
    question: "Can I connect a laser printer to a UPS?",
    answer: "We don't recommend connecting laser printers to a UPS. Laser printers draw high amounts of power when printing, which can overload smaller UPS systems and quickly drain batteries. Connect laser printers directly to surge protectors instead and reserve UPS capacity for critical equipment.",
    category: "usage"
  },
  {
    question: "What is the warranty on PowerShield UPS systems?",
    answer: "PowerShield UPS systems come with a standard 2-year warranty covering parts and labor. Our Enterprise and Modular series include a 3-year warranty. Extended warranty options are available for purchase. Batteries are typically covered for 1 year due to their consumable nature.",
    category: "service"
  },
  {
    question: "What is the difference between VA and Watts in UPS ratings?",
    answer: "VA (Volt-Amperes) and Watts both measure power, but in different ways. Watts represent real power consumed by equipment, while VA includes both real power and reactive power. The relationship is defined by the power factor (Watts = VA × PF). Most modern IT equipment has a power factor of 0.9-1.0.",
    category: "technical"
  },
  {
    question: "How long will my equipment run on UPS battery power?",
    answer: "Runtime depends on the UPS capacity and the load connected. Each of our product pages includes a runtime chart showing typical durations at various load levels. For critical applications, we recommend using our Runtime Calculator tool or contacting our technical support team for a personalized assessment.",
    category: "usage"
  },
  {
    question: "Can I use a generator with my UPS system?",
    answer: "Yes, UPS systems can work with generators, but proper sizing is critical. The generator should be at least 1.5-2 times the capacity of the UPS to handle inrush currents. Online UPS models are recommended for generator applications as they can better handle frequency variations common with generators.",
    category: "technical"
  }
]

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.isFeatured)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug)
}

export function getCategories(): ProductCategory[] {
  return productCategories
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find(category => category.slug === slug)
}

export function getPopularProducts(): Product[] {
  return products.filter(product => product.isPopular)
}

export function getNewProducts(): Product[] {
  return products.filter(product => product.isNew)
}