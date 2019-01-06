import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Card from '../Card/Card';

class ProjectCards extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Card />
        <Link to={'/projects/pink-project'}>Pink Project</Link>
      </div>
    );
  }
}

export default ProjectCards;
