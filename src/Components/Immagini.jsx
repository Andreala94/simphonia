import Slider from "react-infinite-logo-slider";
import React, { useState } from 'react';





// importa qui le tue immagini
import LogoTim from '../Assets/logotim.jpg';
import LogoVodafone from '../Assets/vodafone.jpg';
import LogoEnel from '../Assets/logo enel.png';
import logoKena from '../Assets/logo kena.jpg';
import LogoFastweb from '../Assets/logo fastweb.png';
import LogoSegnoverde from '../Assets/logo Segnoverde.jpeg';

 function Immagini() {
  const [count, setCount] = useState(0);
  return (
    
    <div className='mt-5'>
      <Slider
        width="250px"
        duration={30}
        pauseOnHover={true}
        blurBorders={true}
        blurBorderColor="#fff"
      >
        <Slider.Slide>
          <div className='text-center stack_icon_hover'>
            <img src={LogoTim} alt="LogoTim" className='stack_icon' />
          </div>
        </Slider.Slide>

        <Slider.Slide>
          <div className='text-center stack_icon_hover'>
            <img src={LogoVodafone} alt="LogoVodafone" className='stack_icon' />
          </div>
        </Slider.Slide>

        <Slider.Slide>
          <div className='text-center stack_icon_hover'>
            <img src={LogoEnel} alt="LogoEnel" className='stack_icon' />
          </div>
        </Slider.Slide>

        <Slider.Slide>
          <div className='text-center stack_icon_hover'>
            <img src={logoKena} alt="logoKena" className='stack_icon' />
          </div>
        </Slider.Slide>

        <Slider.Slide>
          <div className='text-center stack_icon_hover'>
            <img src={LogoFastweb} alt="LogoFastweb" className='stack_icon' />
          </div>
        </Slider.Slide>

        <Slider.Slide>
          <div className='text-center stack_icon_hover'>
            <img src={LogoSegnoverde} alt="LogoSegnoverde" className='stack_icon' />
          </div>
        </Slider.Slide>

      </Slider>
    </div>
  );
}



export default Immagini;