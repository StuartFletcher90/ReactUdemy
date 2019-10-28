import React, { Component } from 'react';
import "./Person/Person.css";
import "./App.css";
import Person from './Person/Person';


//personsState gives us access to the persons object
// const App = props => {
//   const [ personsState, setPersonsState ] = useState({
//          persons: [
//            {name: 'Stu', age: 29 },
//            {name: 'Laura', age: 32 },
//            {name: 'Mathew', age: 27}
//          ]});

// const switchNameHandler = (newName) => {
//   setPersonsState({
//     persons: [
//     {name: newName, age: 29 },
//     {name: 'Laura', age: 32 },
//     {name: 'Matty', age: 27}
//   ] })
// }

//CLASS APP COMPONENT
class App extends Component {
  state = {
    persons: [
      {name: 'Stu', age: 29 },
      {name: 'Laura', age: 32 },
      {name: 'Mathew', age: 27}
    ],
    showPersons: false
  }
  

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
      {name: 'Stuart', age: 29 },
      {name: event.target.value, age: 32 },
      {name: 'Matty', age: 27}
    ] })
  }

  deletePersonsHandler = (personIndex) => {
    const persons = this.state.persons;
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
          age={person.age}/>
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
