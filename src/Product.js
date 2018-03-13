/* eslint-disable */
import React from 'react'

export default class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: props.product.name,
      product: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSave = this.onSave.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }


  componentDidMount() {
    console.log('mounted')
  }

  componentWillReceiveProps(nextProps) {
    console.log('next')
  }

  onChange(ev) {
    const inputValue = ev.target.value
    this.setState({ inputValue })
  }

  onSave(ev) {
    ev.preventDefault()
    const { inputValue } = this.state
    const { id } = this.props
    this.props.update({ id: id, name: inputValue })
  }

  onDelete(ev) {
    ev.preventDefault()
    console.log(this.props)
    const { id } = this.props
    this.props.delete(id*1)
  }

  render() {
    const { product } = this.props
    const { onChange, onSave, onDelete } = this
    const { inputValue } = this.state
    return (
      <div>
        <form>
          <input value={ inputValue } onChange={ onChange } />
          <button onClick={onSave}>Save</button>
        </form>
        <br />
        <br />
        <button onClick={onDelete}>Delete product</button>
      </div>
    )
  }
}
