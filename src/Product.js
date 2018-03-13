/* eslint-disable */
import React from 'react'

export default class Product extends React.Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSave = this.onSave.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }

  componentDidMount() {
    const product = this.props.products.find(p => p.id === this.props.id*1)
    product ? this.setState({ name: product.name }) : null
  }

  componentWillReceiveProps(nextProps) {
    const product = nextProps.products.find(p => p.id === nextProps.id*1)
    product ? this.setState({ name: product.name }) : null
  }

  onChange(ev) {
    const name = ev.target.value
    this.setState({ name })
  }

  onSave(ev) {
    ev.preventDefault()
    const { name } = this.state
    const { id } = this.props
    this.props.update({ id: id, name: name })
  }

  onDelete(ev) {
    ev.preventDefault()
    console.log(this.props)
    const { id } = this.props
    this.props.delete(id*1)
  }

  render() {
    const { onChange, onSave, onDelete } = this
    const { name } = this.state
    return (
      <div>
        <form>
          <input value={ name } onChange={ onChange } />
          <button onClick={onSave}>Save</button>
        </form>
        <br />
        <br />
        <button onClick={onDelete}>Delete product</button>
      </div>
    )
  }
}
