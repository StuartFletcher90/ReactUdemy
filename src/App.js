import React, { Component } from 'react';
import "./Person/Person.css";
import "./App.css";
import Person from './Person/Person';

//CLASS APP COMPONENT
class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Stu', age: 29 },
      {id: '2', name: 'Laura', age: 32 },
      {id: '3', name: 'Mathew', age: 27}
    ],
    showPersons: false
  }
  

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    

    this.setState({persons: persons});
  }

  deletePersonsHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person click={() => this.deletePersonsHandler(index)} name={person.name} 
          age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
        })}
      </div>
        
      );

    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
      {persons}
      </div>
    )
  }
};
// replaced every this.State with personsState as we're using hooks with functional components
export default App;

//  onClick={() => this.switchNameHandler('Stuart')} old code for onClick button
