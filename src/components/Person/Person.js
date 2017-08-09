import React, { Component } from 'react';
import './Person.css';
class Person extends Component {

    constructor(props) {
    super(props);

    this.state = {name: props.name, firstName: props.firstName, idSelected: false}

  }

  render() {
    return (
     
        <div className={this.props.idSelected === this.props.id ? 'Person Selected' : 'Person'}>
            <span>{this.state.name}</span>
          <span>{this.state.firstName}</span>
        </div>
          
    );
  }
}

export default Person;
