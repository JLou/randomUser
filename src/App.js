import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List/List';
import data from './List.json';

class App extends Component {

  state = {idSelected: ""}



  random = () => {

    var result = (Math.floor(((data.length)-0)*Math.random())+0); 

    if (result === this.state.idSelected){
      this.random();
    } else {
       this.setState({idSelected: result});
    }
   
    console.log(result);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Random User</h2>
        </div>
        <p className="App-intro">
          
        </p>

       <List people={data} idSelected={this.state.idSelected}/>
       <button type="submit" onClick={this.random}>Go !</button>
          
      </div>
    );
  }
}

export default App;
