import './PinkProject.css';
import React from 'react';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';

const PinkProject = () => {
  return (
    <div>
      <div className="ui card">
        <div className="ui slide masked reveal image">
          <img src={p1} className="visible content" />{' '}
          <img src={p2} className="hidden content" />
        </div>
        <div className="content">
          <a className="header">PinkProject</a>
          <div className="meta">
            <span className="date">Created Now Bitch</span>
          </div>
        </div>
        <div className="extra content">
          <a>2018</a>
        </div>
      </div>
    </div>
  );
};

export default PinkProject;
