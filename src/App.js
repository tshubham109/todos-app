import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Todos from './Component/Todos'
import './App.css';
import Header from'./Component/Layout/Header'
import AddTodos from'./Component/AddTodos'
//import {v4 as uuid} from "uuid"
import About from './Component/Pages/About'
import axios from 'axios'

 class App extends Component {
   state={
     todos:[] 
     
   }
   componentDidMount(){
     axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
     .then(res=>this.setState({todos:res.data}))

   }
   markComplete=(id)=>{
     this.setState({
       todos:this.state.todos.map((todo)=>{
         if(todo.id===id){
          todo.completed=!todo.completed
         }
         return todo;
       })
       
     })
   }
   //delete todo
   delTodos=(id)=>{
     axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res=>{this.setState({
      todos:[...this.state.todos.filter((todo)=>todo.id!==id)]
    })})
     
   }
   //add todos
   addtodos=(title)=>
   { axios.post('https://jsonplaceholder.typicode.com/todos',{title,
  completed:false}).then(res=>{this.setState({
    todos:[...this.state.todos,res.data] 
   })})
   }
     
   
  render() {
    return (
      <Router>
        <div className="App">
        <div className="container">
        <Header/>
        <Route exact path="/" render={props=>(
          <React.Fragment>
            <AddTodos addtodos={this.addtodos}/>
              <Todos todo={this.state.todos} markComplete={this.markComplete}
                delTodos={this.delTodos}/>
          </React.Fragment>
        )}/>
        <Route path="/about" component={About}/>
        
        </div>
        
      </div>
      </Router>
      
    )
  }
}

export default App


