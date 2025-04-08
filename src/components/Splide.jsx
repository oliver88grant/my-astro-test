import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

const Gallery = ({ media }) => (
  <Splide options={{ type: 'loop', perPage: 1, pagination: true }}>
    {media.map((item, index) => (
      <SplideSlide key={index}>
        {item.type === 'video' ? (
          <video controls className="w-full rounded-lg">
            <source src={item.src} type="video/mp4" />
          </video>
        ) : (
          <img src={item.src} alt={`Media ${index}`} className="w-full rounded-lg" />
        )}
      </SplideSlide>
    ))}
  </Splide>
);


export default Gallery;