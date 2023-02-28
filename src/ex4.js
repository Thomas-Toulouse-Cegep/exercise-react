import React, { Component } from 'react';

const database = [
    {
      username: "joe",
      password: "1234"
    },
    {
      username: "human",
      password: "1234"
    },
    {
      username: "human1",
      password: "12345"
    }
  ];
  console.log(database)
class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password:'',
            error:{
              erroruser:"invalid username",
              errorpass:"invalid password"
          },
          isLoggedIn: true,
       };
   
        
    
        this.handleChange = this.handleChange.bind(this);
        
        this.handleSubmit = this.handleSubmit.bind(this);
      };
      
      handleChange(event){
        this.setState({[event.target.name]:  event.target.value}); 
          
      };
      handleSubmit(event){
        
        event.preventDefault();
        database.forEach(element => {
          if(element.username !== this.state.username){
            this.state.isLoggedIn =false;
            
        
          }
          if(element.username === this.state.username && element.password === this.state.password){
            this.state.isLoggedIn =true;
            console.log("lognt")
            
          }
          
        });
       // const checkUsername = database.find(username => this.state.userData === username)
       //const checkPass = database.find(pass => this.state.userData == pass)

        console.log(database)
        
        /*if (checkUsername.username != this.state.username){
          alert("penis")
        }
        */
    }
    render() {
      let { isLoggedIn } = this.state
    return(
      
        <form>
              
        
            <label htmlFor="">username
            <input type="text" placeholder='username' name="username" value={this.state.username} onChange={this.handleChange}></input>
           cd 
            </label>
            <label htmlFor="">password
            <input type="password"  required placeholder='password' name="password"value={this.state.password} onChange={this.handleChange} ></input>
            </label>
            <button onClick={this.handleSubmit}>Login</button>
        </form>
    );
    }
}
export {Login};