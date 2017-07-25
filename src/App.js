import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List/List';
import data from './List.json';

class App extends Component {

  state = {idSelected: "", count: 0, limit: 300}

  random = () => {

    var that = this;

    setTimeout(() => { 

      var result = (Math.floor(((data.length)-0)*Math.random())+0); 

      if (result !== that.state.idSelected){
        that.setState({idSelected: result});
      }
      
      if(that.state.count !== 10){
          that.random();
      }
  
      that.setState((prevState, props) => ({
        count: prevState.count + 1,
        limit: prevState.limit + 100
      }));

      console.log(result);
  }, that.state.limit);
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
