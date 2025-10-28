import React from 'react';
import Slider from 'react-infinite-logo-slider';

import photo1 from '../Assets/photo_2023-06-13_10-12-27.jpg';
import photo2 from '../Assets/photo_2023-06-13_10-12-27.jpg';
import photo3 from '../Assets/photo_2023-06-13_10-18-03.jpg';

function Foto() {
  return (
    <>
    {/*
    <Slider
      width="200px"
      duration={40}
      pauseOnHover={true}
      blurBorders={false}
      blurBorderColor={'#fff'}
    >
     
      <Slider.Slide>
        <img src={photo1} alt="Foto 1" className="img-fluid rounded shadow" style={{ maxHeight: "150px", width: "auto" }} />
      </Slider.Slide>
      <Slider.Slide>
        <img src={photo2} alt="Foto 2" className="img-fluid rounded shadow" style={{ maxHeight: "150px", width: "auto" }} />
      </Slider.Slide>
      <Slider.Slide>
        <img src={photo3} alt="Foto 3" className="img-fluid rounded shadow" style={{ maxHeight: "150px", width: "auto" }} />
      </Slider.Slide>
    </Slider>
    */}
    <div>
      <img src={photo1} alt="Foto 1" className="img-fluid rounded shadow m-2" style={{ maxHeight: "150px" }} />

    </div>
    </>
  );
}

export default Foto;