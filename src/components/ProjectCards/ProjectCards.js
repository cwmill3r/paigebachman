import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Card from '../Card/Card';

const Projects = () => {
  return (
    <div className="ui container">
      <Card />
      <Link to={'/projects/pink-project'}>Pink Project</Link>
    </div>
  );
};

export default Projects;
