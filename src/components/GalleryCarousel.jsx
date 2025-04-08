
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

const GalleryCarousel = ({ media }) => {
  const sortedMedia = [
    ...media.filter((item) => item.type === 'video'),
    ...media.filter((item) => item.type === 'image')
  ];
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        loop={true}
        wrapperClass={"swiper-wrapper items-center"}
        className="rounded-lg shadow-lg"

      >
        {sortedMedia.map((item, index) => (
          <SwiperSlide key={index} className=''>
            {item.type === 'video' ? (
              <video controls className="w-full h-auto rounded-lg">
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={item.src}
                alt={`Media ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Navigation, Pagination, Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}

      >
        {sortedMedia.map((item, index) => (
          <SwiperSlide key={index} className=''>
            {item.type === 'video' ? (
              <video controls className="w-full h-auto rounded-lg cursor-pointer">
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={item.src}
                alt={`Media ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg cursor-pointer"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default GalleryCarousel;
