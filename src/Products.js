/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import faker from 'faker';

export default class Products extends React.Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
    this.onAddProduct = this.onAddProduct.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onAddRandom = this.onAddRandom.bind(this)
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

  onAddRandom(ev) {
    ev.preventDefault()
    const product = faker.commerce.product()
    const { onCreate } = this.props
    onCreate(product)
  }

  render() {
    const { products, select } = this.props
    const { onChange, onAddProduct, onAddRandom } = this
    return (
      <div>
        <h4>Create Product</h4>
        <form onSubmit={ onAddProduct } >
          <input className="form-control" onChange={ onChange } style={{ marginBottom: 10 }}/>
          <button className="btn btn-outline-success">Add Product</button>
        </form>
        <br />
        <h4>Add Random Product</h4>
        <button onClick={ onAddRandom} className="btn btn-outline-primary">Add random</button>
        <br />
        <br />
        <ul className="list-group">
          {
            products &&
            products.map( product => (
                <li className="list-group-item" key={ product.id }>
                  { product.name }&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to={`/products/${product.id}`}><button className="btn btn-outline-info" onClick={() => select(product.id)}>Edit product</button></Link>
                </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
