import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header/Header';
import Carosel from './Carosel/Carosel';
import ProjectCards from './ProjectCards/ProjectCards';
import Contact from './Contact/Contact';
import PinkProject from './Projects/PinkProject';

const App = () => {
  return (
    <div id="appbody" className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Carosel} />
          <Route path="/projects" exact component={ProjectCards} />
          <Route path="/contacts" extact component={Contact} />
          <Route path="/projects/pink-project" exact component={PinkProject} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
