import React, { Component } from "react";
import Home from "./pages/Home.js";
import Resume from "./pages/Resume.js";
import Acedemics from "./pages/Acedemics.js";
import Interests from "./pages/Interests.js";
import Social from "./pages/Social.js";
import Blog from "./pages/Blog.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/classwork" component={Acedemics} />
            <Route path="/interests" component={Interests} />
            <Route path="/socialmedia" component={Social} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
