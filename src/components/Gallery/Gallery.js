import GalleryLayout from "../../Layouts/GalleryLayout"
import GalleryData from '../Data/GalleryData';
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = () => {
  const galdata = GalleryData();
    const [open, setOpen] = useState(false);
    return (
      <section style={{display:"flex",flexDirection:"column"}} className="gallery-section">
        {galdata.map((data, pos) => (
          <GalleryLayout
            key={pos}
            align={data.align}
            img={data.img}
            title={data.title}
            description={data.description}
          />
        ))}
        <>
          <button style={{padding:"0.3rem 1rem",border:"none",outline:"none",backgroundColor:"lightgreen",color:"darkgreen",cursor:"pointer",alignSelf:"center"}} type="button" onClick={() => setOpen(true)}>
            Show More
          </button>

          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={[
              { src: require('../../images/achievements/achievement1.jpg') },
              {src:require('../../images/placement/photo_2023-05-11_21-46-05.jpg')},
              {src:require('../../images/placement/photo_2023-05-11_21-46-06.jpg')},
              {src:require('../../images/placement/photo_2023-05-11_21-46-07.jpg')},
              {src:require('../../images/placement/photo_2023-05-11_21-46-08.jpg')},
              {src:require('../../images/placement/photo_2023-05-11_21-46-09.jpg')},
              {src:require('../../images/placement/photo_2023-05-11_21-46-11.jpg')},
              {src:require('../../images/placement/photo_2023-05-11_21-46-12.jpg')},
              {src:require('../../images/placement/photo_2023-05-11_21-46-13.jpg')},
              {src:require('../../images/placement/photo_2023-05-11_21-46-14.jpg')},
              {src:require('../../images/placement/photo_2023-05-11_21-46-15.jpg')},
              {src:require('../../images/placement/photo_2023-05-11_21-46-17.jpg')},
              {src:require('../../images/placement/photo_2023-05-11_21-46-18.jpg')},
              {src:require('../../images/placement/photo_2023-05-11_21-46-19.jpg')},
              {src:require('../../images/placement/photo_2023-05-11_21-46-20.jpg')},
              {src:require('../../images/placement/photo_2023-05-11_21-46-21.jpg')},
              {src:require('../../images/placement/photo_2023-05-11_21-46-23.jpg')},
            ]}
          />
        </>
      </section>
    );
}
export default Gallery