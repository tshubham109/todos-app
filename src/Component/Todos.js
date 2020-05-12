import React, { Component } from 'react'
import Todositem from './Todositem'
import PropTypes from 'prop-types'

export class Todos extends Component {
    render() {
       
        
        return this.props.todo.map((todo)=>
        <Todositem key={todo.id} todo={todo} markComplete={this.props.markComplete}
        delTodos={this.props.delTodos}/>
        )
    }
}
Todos.propTypes={
    todo:PropTypes.array.isRequired,
    markComplete:PropTypes.func.isRequired,
    delTodos:PropTypes.func.isRequired
}
export default Todos
