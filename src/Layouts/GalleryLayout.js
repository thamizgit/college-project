import './GalleryLayout.css';
import { useInView } from 'react-intersection-observer';
const GalleryLayout = ({ align, img, title, description }) => {
  const { ref: galleryref, inView: galleryVisible } = useInView();
    return (
      <section ref={galleryref} className={`gallery-layout ${align && "reverse"} ${galleryVisible && !align && 'showus'} ${galleryVisible && align && 'show-reverse'} `}>
        <figure>
          <img
            className="gallery-img"
            src={img}
            alt="gallery-img"
            width={320}
            height={300}
          />
          <figcaption>{title}</figcaption>
        </figure>
        <article className='img-description'>
          {description}
        </article>
      </section>
    );
}
export default GalleryLayout