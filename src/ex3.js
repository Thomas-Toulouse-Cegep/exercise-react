
import React, { Component,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age:'', 
           };
          
          //console.log(this.state.error.errorpass);
        this.handleChange = this.handleChange.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);
      }
     
      handleChange(event) {  
          this.setState({[event.target.name]:  event.target.value}); 
          
         }
  
      handleSubmit = (event) =>{
        event.preventDefault();
        alert(`Bonjour ${this.state.name} ${this.state.age} ans bienvenue dans
        l’application React. `);
    } 

    render() {
       
        return (
            <form onSubmit={this.HandleSubmit}>
              <Button></Button>
            <label>Enter your name:
              <input 
              type="text" 
              name='name'
              placeholder='Nom' 
              value={this.state.name}
              onChange={this.handleChange}
              />
              
            </label>
            <label>Enter ton age:
            <input type="text" name='age' value={this.state.age} onChange={this.handleChange} placeholder='Age' />
            </label>
            <button  onClick={this.handleSubmit} type='sumbit'>sumbit</button>
          </form>
        );
      }
    
    
   
}
export {Form};