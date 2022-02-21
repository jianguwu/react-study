import React, { Component } from 'react'

import Header from './header'
import TodoList from '../components/TodoList'

export default class Layout extends Component {
  render() {
    return (
      <div className='APP_LAYOUT'>
        <Header />
        <main>
          <TodoList></TodoList>
        </main>
      </div>
    )
  }
}
