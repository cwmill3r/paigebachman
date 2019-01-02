import React from 'react';

const Header = () => {
  return (
    <div className="ui menu">
      <a className="item">PaigeBachman</a>
      <a className="ui pointing dropdown link item">Projects</a>
      <div className="right menu">
        <a className="item">Contact</a>
      </div>
      <div className="item">
        <a href="https://www.instagram.com/paigebachman_/">
          <i className="inverted fitted large purple instagram link icon" />
        </a>
      </div>
    </div>
  );
};

export default Header;

// <img src={curry} alt="Curry" className="ui circular image" />;
// <i class="instagram icon" />;
