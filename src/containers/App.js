import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';
// import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: 'sd464a313d', name: "Bob", age: 30 },
      { id: 'f6gdf456s6', name: "Max", age: 29 },
      { id: 'g4jhr676ra', name: "Stephanie", age: 26 }
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })

  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (<Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
            )
          })}
        </div>
      );
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      // <StyleRoot>
        <div className="App">
          <h1>Hi, to my React proj</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button style={style}
            onClick={this.togglePersonsHandler}>Switch Name</button>
          {persons}
        </div >
      // </StyleRoot>
    );
  }
}

export default App; //Radium(App);
