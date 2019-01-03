import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import PinkProject from './PinkProject';

const Projects = () => {
  return (
    <div className="ui container">
      <div>Projects</div>
      <Link to={'/projects/pink-project'}>Pink Project</Link>
    </div>
  );
};

export default Projects;
