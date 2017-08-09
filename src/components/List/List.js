import React, { Component } from 'react';
import Person from '../Person/Person';
import './List.css';
class List extends Component {

  constructor(props) {
    super(props);

    this.state = {people: props.people}
  }

  render() {
    return (
       <div className="List">
         { this.state.people.map(person =>  <Person {...person} key={person.id} idSelected={this.props.idSelected}/>)}      
       </div>
    );
  }
}

export default List;
