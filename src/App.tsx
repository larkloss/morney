import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import styled from "styled-components";
import Nav from "./components/Nav";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/tags">

          </Route>
          <Route path="/money">

          </Route>
          <Route path="/statistics">

          </Route>
          <Redirect exact from="/" to="/money"/>
          <Route path="*">

          </Route>
        </Switch>
      </Router>
  );
}




export default App;