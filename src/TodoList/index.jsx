import React, { Component } from 'react'

import './index.css'

export default class TodoList extends Component {

  constructor() {
    super()
      this.state = {
        todoItems: []
      }

      this.input = React.createRef()
      this.globalIndex = 0;
  }


  render() {
    return (
      <div className='todo-container'>
        <header>
          <input type="text" ref={this.input} /> <button onClick={this.addItem}>add item</button>
        </header>
        <section>
          <ul className='todo-ul'>
            {
              this.state.todoItems.map((item, index) =>
                <li className={item.done ? 'is-done' : ''} key={item.id}>
                  <span>{item.value}</span>
                  <button onClick={this.removeItem.bind(this.addItem, index)}>delete</button>
                  {!item.done && <button onClick={this.doneItem.bind(this, index)}>{item.done ? 'isDone' : 'done'}</button>}
                </li>
              )
            }
          </ul>
          { !this.state.todoItems.length && <div>暂无待办事项！</div>}
          {this.toggleTag.bind(this, 0)}
        </section>
      </div>
    )
  }

  addItem = ()=> {
    const value = this.input.current.value;
    const _todoItems = this.state.todoItems.slice();
    _todoItems.push({id: ++this.globalIndex, value, done: false })
    this.setState({todoItems: _todoItems})
    this.input.current.value = ''
  }

  removeItem = (index) => {
    let _todoItems = this.state.todoItems.slice();
    _todoItems.splice(index,1)
    this.setState({todoItems: _todoItems});
  }

  doneItem = (index) => {
    let _todoItems = this.state.todoItems.slice();
    _todoItems[index].done = true;
    this.setState({todoItems: _todoItems});
  }
}
