/* eslint-disable */
import React from 'react';
import { Route, HashRouter as Router, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import Home from './Home'
import Products from './Products'
import Nav from './Nav'


const Main = () => {
  return (
      <Router>
        <div>
          <Route component={ Nav } />
          <Route path='/' exact component={ Home } />
          <Route path='/products' exact component={ Products } />
        </div>
      </Router>

  )
}

export default Main
