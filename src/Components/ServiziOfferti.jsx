import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Css/ServiziOfferti.css';

import LogoTim from '../Assets/logotim.jpg';
import LogoVodafone from '../Assets/vodafone.jpg';
import LogoEnel from '../Assets/logo enel.png';
import logoKena from '../Assets/logo kena.jpg';
import LogoFastweb from '../Assets/logo fastweb.png';
import LogoSegnoverde from '../Assets/logo Segnoverde.jpeg';

function ServiziOfferti() {

      const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    pauseOnHover: true,
    speed: 800, // transizione più fluida
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],

  };
  return (
    <>

      <div className="container mt-4 ">
        <Slider {...settings}>
          <div className="smartphone">
            <img
              src={LogoTim}
              alt="Foto 1"
              className="img-fluid"
              style={{
                height: "100px",
                width: "50%",
                objectFit: "cover",
                 borderRadius: "1rem",
              }}
            />
          </div>

          <div className="smartphone">
            <img
              src={LogoVodafone}
              alt="Foto 2"
              className="img-fluid "
              style={{
                height: "100px",
                width: "50%",
                objectFit: "cover",
                 borderRadius: "1rem",
                
              }}
            />
          </div>

           <div className="smartphone">
            <img
              src={LogoEnel}
              alt="Foto 3"
              className="img-fluid "
              style={{
                height: "100px",
                width: "50%",
                objectFit: "cover",
                 borderRadius: "1rem",
                
              }}
            />
          </div>
           <div className="smartphone">
            <img
              src={logoKena}
              alt="Foto 4"
              className="img-fluid "
              style={{
                height: "100px",
                width: "50%",
                objectFit: "cover",
                 borderRadius: "1rem",
                
              }}
            />
          </div>

         <div className="smartphone">
            <img
              src={LogoFastweb}
              alt="Foto 5"
              className="img-fluid "
              style={{
                height: "100px",
                width: "50%",
                objectFit: "cover",
                 borderRadius: "1rem",
                
              }}
            />
          </div>
          <div className="smartphone">
            <img 
              src={LogoSegnoverde}
              alt="Foto 6"
              className="img-fluid"
              style={{
                height: "100px",
                width: "50%",
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


export default ServiziOfferti;