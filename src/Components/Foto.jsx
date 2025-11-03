import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import photo1 from '../Assets/photo_2023-06-13_10-12-27.jpg';
import photo3 from '../Assets/photo_2023-06-13_10-18-03.jpg';

function Foto() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    speed: 800, // transizione più fluida
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],

  };
  return (
    <>

      <div className="container mt-4 ">
        <Slider {...settings}>
          <div>
            <img
              src={photo1}
              alt="Foto 1"
              className="img-fluid"
              style={{
                height: "500px",
                width: "100%",
                objectFit: "cover",
                 borderRadius: "1rem",
              }}
            />
          </div>

          <div>
            <img
              src={photo3}
              alt="Foto 3"
              className="img-fluid "
              style={{
                height: "500px",
                width: "100%",
                objectFit: "cover",
                 borderRadius: "1rem",
                
              }}
            />
          </div>
        </Slider>
      </div>
     
    </>
  );
}

export default Foto;