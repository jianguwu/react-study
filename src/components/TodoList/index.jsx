import React, { Component } from 'react'

import FormField from '../FormField'

import './index.less'

export default class TodoList extends Component {

  constructor() {
    super(...arguments)
      this.state = {
        todoItems: [],
        inputValue: ''
      }

      this.input = React.createRef()
      this.globalIndex = 0;
  }


  render() {

    return (
      <div className='todo-container'>
        <header>
          <FormField type="text" value={this.state.inputValue} label="todo-item：" name={'input'} updateField={value => this.updateField('inputValue', value)} />
          <button onClick={this.addItem}>add item</button>
        </header>
        <section>
          <ul className='todo-ul'>
            {
              this.state.todoItems.map((item, index) =>
                <li className={item.done ? 'is-done' : ''} key={item.id}>
                  <input type="checkbox" checked={item.done} onChange={this.toggleItemChecked.bind(this, index)} />
                  <span>{item.value}</span>
                  <button onClick={this.removeItem.bind(this.addItem, index)}>delete</button>
                </li>
              )
            }
          </ul>
          { !this.state.todoItems.length && <div>there is nothing to do!</div>}
        </section>
      </div>
    )
  }

  addItem = ()=> {
    const _todoItems = this.state.todoItems.slice();
    _todoItems.push({id: ++this.globalIndex, value: this.state.inputValue, done: false })
    this.setState({todoItems: _todoItems, inputValue: ''})
  }

  removeItem = (index) => {
    let _todoItems = this.state.todoItems.slice();
    _todoItems.splice(index,1)
    this.setState({todoItems: _todoItems});
  }

  toggleItemChecked = (index) => {
    let _todoItems = this.state.todoItems.slice();
    _todoItems[index].done = !_todoItems[index].done;
    this.setState({todoItems: _todoItems});
  }

  updateField = (key, name) => {
    this.setState({
      [key]: name
    },() => {
      console.log(this.state);
    })
  }
}
