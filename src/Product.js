/* eslint-disable */
import React from 'react'

export default class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: props.product.name
    }
    this.onChange = this.onChange.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  onChange(ev) {
    const inputValue = ev.target.value
    this.setState({ inputValue })
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  onSave(ev) {
    ev.preventDefault()
    const { inputValue } = this.state
    const { id } = this.props.product
    this.props.update({ id: id, name: inputValue })
  }

  render() {
    const { product } = this.props
    const { onChange, onSave } = this
    const { inputValue } = this.state
    return (
      <form>
        <input value={ inputValue } onChange={ onChange } />
        <button onClick={onSave}>Save</button>
      </form>
    )
  }
}
