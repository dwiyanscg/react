import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
      send: null,
      errormessage: ''
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "age") {
      if (val !="" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
   mySubmitHandler = (event) => {
    event.preventDefault();
    let send = this.state.send;
    if (!(send)) {
      alert("data is sent to the server");
    }
  }

  
  render() {
    return (
       
     
      <form onSubmit={this.mySubmitHandler}>
      <h1 style={{textAlign:'center'}}>FORM  </h1>
      <div >
      <label >Name:  
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
        style={{width:'10%', display:'inline-block',marginLeft:'57px'}}>
      </input> 
      </label>
      </div>
     
      <div style={{marginTop:'20px'}}>
      <label >Age Birthday:
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
        style={{width:'10%', display:'inline-block',marginLeft:'10px'}}>
      </input> 
      </label>
      </div>
      {this.state.errormessage}

      <div style={{marginTop:'20px'}}>
        <label> Gender :
      <select value={this.state.mycar} style={{marginLeft:'45px',width:'70px'}}>
        <option value="Ford">Male</option>
        <option value="Volvo">Female</option>
   
      </select>
      </label>
      </div>

      <br/>
      <br/>
      <div>
      <input 
      type='submit' 
      name='send'
      onChange={this.myChangeHandler}
      />
      </div>
      </form>
    );
  }
}
export default App;
