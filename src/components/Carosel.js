import './Carosel.css';
import React from 'react';
import Slider from 'react-slick';
import p1 from './images/p1.png';
import p2 from './images/p2.png';
import p3 from './images/p3.png';
import p4 from './images/p4.png';
import p5 from './images/p5.png';
import curry from './images/curry.png';

class Carosel extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 4000,
      cssEase: 'linear'
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="image-wrapper">
            <img src={p1} alt="1 Portfolio" className="ui centered big image" />
          </div>
          <div className="image-wrapper">
            <img src={p2} alt="2 Portfolio" className="ui centered big image" />
          </div>
          <div className="image-wrapper">
            <img src={p3} alt="3 Portfolio" className="ui centered big image" />
          </div>
          <div className="image-wrapper">
            <img src={p4} alt="4 Portfolio" className="ui centered big image" />
          </div>
          <div className="image-wrapper">
            <img src={p5} alt="5 Portfolio" className="ui centered big image" />
          </div>
          <div className="image-wrapper">
            <img
              src={curry}
              alt="Curry Cat"
              className="ui centered big image"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carosel;
