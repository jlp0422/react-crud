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
      product: {},
      inputValue: ''
    }
    this.onAddProduct = this.onAddProduct.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    axios.get('/api/products')
      .then( res => res.data)
      .then( products => this.setState({ products }))
  }

  onAddProduct(ev) {
    ev.preventDefault()
    const { inputValue, products } = this.state
    axios.post('/api/products', {name: inputValue})
      .then( res => res.data)
      .then( product => this.setState({ products: [...products, product]}))

    // this.setState({ products: [...products, inputValue] })
  }

  onChange(ev) {
    const inputValue = ev.target.value
    this.setState({ inputValue })
  }

  render() {
    const { products } = this.state
    const { onAddProduct, onChange } = this
    return (
      <div>
        <h1>We have many products</h1>
        <Products products={ products } onAddProduct={ onAddProduct } onChange={ onChange } />
      </div>
    )
  }
}
