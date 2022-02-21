import React, { Component } from 'react'

export default class FormField extends Component {
  render() {
    return (
      <div className="form-field">
        {this.props.label &&  <label htmlFor={this.props.name}>{this.props.label}</label>}
        <input type={this.props.type || 'text'} name={this.props.name} onChange={this.updateField} value={this.props.value} />
      </div>
    )
  }

  updateField = (evt) => {
    this.props.updateField(evt.target.value)
  }
}
