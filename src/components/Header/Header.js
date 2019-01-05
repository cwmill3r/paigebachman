import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui menu">
      <Link to={'/'} id="text" className="item">
        PaigeBachman
      </Link>
      <Link
        to={'/projects'}
        id="text"
        className="ui pointing dropdown link item"
      >
        Projects
      </Link>
      <div className="right menu">
        <Link to={'/contacts'} id="text" className="item">
          Contact
        </Link>
        <Link to={'/login'} id="text" className="item">
          Login
        </Link>
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

// <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
//   Edit
// </Link>
