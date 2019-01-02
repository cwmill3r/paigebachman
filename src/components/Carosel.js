import './Carosel.css';
import React from 'react';
import Slider from 'react-slick';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';

class Carosel extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
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
            <img src={p1} alt="1 Portfolio" />
          </div>
          <div className="image-wrapper">
            <img src={p2} alt="2 Portfolio" />
          </div>
          <div className="image-wrapper">
            <img src={p3} alt="3 Portfolio" />
          </div>
          <div className="image-wrapper">
            <img src={p4} alt="4 Portfolio" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carosel;
