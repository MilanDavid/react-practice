import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component {
  state = {
    persons: [
      { id: 'sd464a313d', name: "Bob", age: 30 },
      { id: 'f6gdf456s6', name: "Max", age: 29 },
      { id: 'g4jhr676ra', name: "Stephanie", age: 26 }
    ],
    showPersons: false,
    changeCounter: 0,
    autenticated: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  componentWillUnmount() {
    console.log('[App.js] componentWillUnmunt');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    })
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })

  }

  loginHandler = () => {
    this.setState({ autenticated: true })
  };

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
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            isAutenticated={this.state.autenticated} />
        </div>
      );
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }


    return (
      <Aux>
        <AuthContext.Provider
          value={{
            authenticated: this.state.autenticated,
            login: this.loginHandler
          }}>
          <Cockpit
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            click={this.togglePersonsHandler}
            login={this.loginHandler} />
          {persons}
        </AuthContext.Provider>
      </Aux >
    );
  }
}

export default withClass(App, ".App");
