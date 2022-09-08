import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";


const CustomCarousel = () => {
  return (
    <Carousel 
    showThumbs={false} 
    dynamicHeight={false} 
    infiniteLoop 
    autoPlay={true} 
    showStatus={false}
    >
      <div>
        <img src="images/poze11.jpg" />
        <p className="legend">Nice look</p>
      </div>
      <div>
        <img src="images/poze7.jpg" />
        <p className="legend">Wedding look</p> 
      </div>
      <div>
        <img src="images/b5.jpg" />
         <p className="legend">Man style</p> 
      </div>
    </Carousel>
  );
};

export default CustomCarousel;