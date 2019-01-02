import './Header.css';
import React from 'react';

const Header = () => {
  return (
    <div className="ui menu">
      <a id="text" className="item">
        PaigeBachman
      </a>
      <a id="text" className="ui pointing dropdown link item">
        Projects
      </a>
      <div className="right menu">
        <a id="text" className="item">
          Contact
        </a>
      </div>
      <div className="item">
        <a href="https://www.instagram.com/paigebachman_/">
          <i id="icon" className="inverted fitted large instagram link icon" />
        </a>
      </div>
    </div>
  );
};

export default Header;

// <img src={curry} alt="Curry" className="ui circular image" />;
// <i class="instagram icon" />;
