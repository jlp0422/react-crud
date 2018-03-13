/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Products extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [],
      product: {},
      inputValue: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onAddProduct = this.onAddProduct.bind(this)
  }

  componentDidMount() {
    axios.get('/api/products')
      .then(res => res.data)
      .then(products => this.setState({ products }))
  }

  onChange(ev) {
    const inputValue = ev.target.value
    this.setState({ inputValue })
  }

  onAddProduct(ev) {
    ev.preventDefault()
    const { inputValue, products } = this.state
    axios.post('/api/products', { name: inputValue })
      .then(res => res.data)
      .then(product => this.setState({ products: [...products, product] }))
  }


  render() {
    const { products } = this.state
    const { onChange, onAddProduct } = this
    return (
      <div>
        <h4>Add Product</h4>
        <form onSubmit={ onAddProduct } >
          <input onChange={ onChange }/>
          <button>Add Product</button>
        </form>
        <ul>
          {
            products &&
            products.map( product => (
                <li key={ product.id }>
                  { product.name }&nbsp;&nbsp;
                  <Link to={`/products/${product.id}`}><button>Edit product</button></Link>
                  <br /><br />
                </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
