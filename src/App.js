import "./App.css";
import Navbar from "./Components/Navbar";
import React, { Component } from "react";
import News from "./Components/News";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
   render() {
      return (
         <div>
            <Router>
               <Navbar />

               <Switch>
                  <Route exact path="/">
                     <News key="" country="in" pagesize="12" category="general" />
                  </Route>
                  <Route exact path="/about">
                     <News
                        key="business"
                        country="in"
                        pagesize="12"
                        category="business"
                     />
                  </Route>

                  <Route exact path="/home">
                     <News key="home" country="in" pagesize="12" category="general" />
                  </Route>
                  <Route exact path="science">
                     <News key="science" country="in" pagesize="12" category="science" />
                  </Route>
                  <Route exact path="/sport">
                     <News key="sport" country="in" pagesize="12" category="sport" />
                  </Route>
                  <Route exact path="/business">
                     <News
                        key="business"
                        country="in"
                        pagesize="12"
                        category="business"
                     />
                  </Route>
                  <Route exact path="/entertainment">
                     <News
                        key="entertainment"
                        country="in"
                        pagesize="12"
                        category="entertainment"
                     />
                  </Route>
                  <Route exact path="/technology">
                     <News
                        key="technology"
                        country="in"
                        pagesize="12"
                        category="technology"
                     />
                  </Route>
                  <Route exact path="/health">
                     <News key="health" country="in" pagesize="12" category="health" />
                  </Route>
               </Switch>
            </Router>
         </div>
      );
   }
}
