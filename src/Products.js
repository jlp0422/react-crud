/* eslint-disable */
import React from 'react';

export default class Products extends React.Component {
  constructor() {
    super()
  }

  render() {
    const { products, onAddProduct, onChange } = this.props
    return (
      <div>
        <h4>Add Product</h4>
        <form onSubmit={ onAddProduct }>
          <input onChange={ onChange }/>
          <button>Add Product</button>
        </form>
        <ul>
          {
            products &&
            products.map( product => (
              <li key={ product.id }>{ product.name }</li>
            ))
          }
        </ul>
      </div>
    )
  }
}
