import React from 'react';
import curry from './images/curry.png';

const Header = () => {
  return (
    <div className="ui menu">
      <a className="item">PaigeBachman</a>
      <a className="ui pointing dropdown link item">Projects</a>
      <div className="right menu">
        <a className="item">Contact</a>
      </div>
      <div className="item">
        <i
          href="https://www.instagram.com/paigebachman_/"
          className="inverted fitted big purple instagram link icon"
        />
      </div>
    </div>
  );
};

export default Header;

// <img src={curry} alt="Curry" className="ui circular image" />;
// <i class="instagram icon" />;
