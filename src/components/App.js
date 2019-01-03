import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Carosel from './Carosel';
import Projects from './Projects';
import Contact from './Contact';
import PinkProject from './PinkProject';

const App = () => {
  return (
    <div id="appbody" className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Carosel} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contacts" extact component={Contact} />
          <Route path="/projects/pink-project" exact component={PinkProject} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
