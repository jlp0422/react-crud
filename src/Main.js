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
    this.onSelect = this.onSelect.bind(this)
    this.onUpdate = this.onUpdate.bind(this)
    this.onDelete = this.onDelete.bind(this)
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

  onUpdate(product) {
    axios.put(`/api/products/${product.id}`, {name: product.name })
      .then( res => res.data)
      .then( product => {
        const products = this.state.products.filter( p => p.id !== product.id)
        this.setState({ products: [ ...products , product ]})
      })
      .then(() => document.location.hash = '/products')
  }

  onSelect(id) {
    const product = this.state.products.find( p => p.id === id)
    this.setState({ product })
  }

  onDelete(id) {
    const product = this.state.products.find( p => p.id === id)
    axios.delete(`/api/products/${product.id}`, { id })
    .then( res => res.data)
    .then( id => {
      const products = this.state.products.filter( p => p.id !== id)
      this.setState({ products })
    })
    .then(() => document.location.hash = '/products')
  }

  render() {
    const { products, product } = this.state
    const { onChange, onCreate, onSelect, onUpdate, onDelete } = this
    return (
      <Router>
        <div>
          <Route component={Nav} />
          <Route path='/' exact component={Home} />
          <Route path='/products' exact component={() => (<Products products={ products } onCreate={ onCreate } select={ onSelect } />)} />
          <Route path='/products/:id' exact component={({ match }) => (<Product product={ product } update={ onUpdate } delete={ onDelete } id={ match.params.id }/>)} />
        </div>
      </Router>
    )
  }
}
