
import { Carousel } from 'react-carousel-minimal';
import '../../Layouts/NavBar.css';
export default function Slider() {
  const data = [
    {
      image: require("../../Slides/Slide1.jpg"),
    },
    {
      image: require("../../Slides/Slide2.jpg"),
    },
    {
      image: require("../../Slides/Slide3.jpg"),
    },
    {
      image: require("../../Slides/Slide4.jpg"),
    },
    {
      image: require("../../Slides/Slide9.jpg"),
    },
  ];
  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  return (
    <div className="slider">
      <div style={{ textAlign: "center" ,zIndex:"-1"}}>
        
        <div style={{
          padding: "0 0px"
        }}>
          <Carousel 
            data={data}
            time={4000}
            width="2400px"
            height="600px"
            captionStyle={captionStyle}
            radius="10px"
          
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="whitesmoke"
            
            
            style={{
              textAlign: "center",
              maxWidth: "1800px",
              maxHeight: "600px",
              margin: "40px auto",
              marginTop : "0.5rem",
              marginLeft : "0rem",
              zIndex: "-1"
            }}
          />
        </div>
      </div>
    </div>
  );
}



