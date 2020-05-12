import React, { Component } from 'react'
import PropTypes from 'prop-types'
 class Todositem extends Component {
     getStyle=()=>{
         return {
             background:'#f4f4f4',
             padding:'10px',
             borderBottom:'1px #ccc dotted',
             textDecoration: this.props.todo.completed? 'Line-through':'none'
         }
     }
    render() {
        const{id,title}=this.props.todo;
        return (
            <div style={this.getStyle()}>
               
               <p>  <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{"  "}
                   {title}
                   <button style={btnStyle} onClick={this.props.delTodos.bind(this,id)}>x</button>
                </p> 
            </div>
        )
    }
}
Todositem.propTypes={
    todo:PropTypes.object.isRequired,
    markComplete:PropTypes.func.isRequired,
    delTodos:PropTypes.func.isRequired
}
const btnStyle={
    background:'#ff0000',
    color:'#fff',
    border:'none',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'

}

export default Todositem
