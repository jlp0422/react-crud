/* eslint-disable */
import React from 'react';
import { Route, HashRouter as Router, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';
import Home from './Home';
import Products from './Products';
import Product from './Product';


export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [],
      product: {},
    }
    this.onCreate = this.onCreate.bind(this)
  }

  componentDidMount() {
    axios.get('/api/products')
      .then(res => res.data)
      .then(products => this.setState({ products }))
  }

  onCreate(product) {
    axios.post('/api/products', { name: product })
      .then(res => res.data)
      .then(product => this.setState({ products: [...this.state.products, product] }))
  }

  render() {
    const { products } = this.state
    const { onChange, onCreate } = this
    return (
      <Router>
        <div>
          <Route component={Nav} />
          <Route path='/' exact component={Home} />
          <Route path='/products' exact component={() => (<Products products={ products } onCreate={ onCreate } />)} />
          <Route path='/products/:id' exact component={({ match }) => (<Product />)} />
        </div>
      </Router>
    )
  }
}
