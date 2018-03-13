/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Products extends React.Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
    this.onAddProduct = this.onAddProduct.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange(ev) {
    const name = ev.target.value
    this.setState({ name })
  }

  onAddProduct(ev) {
    ev.preventDefault()
    const { name } = this.state
    const { onCreate } = this.props
    onCreate(name)
  }

  render() {
    const { products, select } = this.props
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
                  <Link to={`/products/${product.id}`}><button onClick={() => select(product.id)}>Edit product</button></Link>
                  <br /><br />
                </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
