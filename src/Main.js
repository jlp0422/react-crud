/* eslint-disable */
import React from 'react';
import { Route, HashRouter as Router, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import Products from './Products'


export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [],
      product: {}
    }
  }

  componentDidMount() {
    axios.get('/api/products')
      .then( res => res.data)
      .then( products => this.setState({ products }))
  }

  render() {
    const { products } = this.state
    return (
      <div>
        <h1>We have many products</h1>
        <Products products={ products } />
      </div>
    )
  }
}
