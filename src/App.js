import React, { Component, createElement } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'




class App extends Component {
  state = {
    persons: [
    {id:'adf', name: 'Max', age: 28},
    {id:'fsfd', name: 'Manu', age: 29},
    {id:'fad', name: 'Stephanie', age: 26}
  ],
  otherState: 'some other value',
  showPerson: false

  }

  switchNameHandler = (newName) => {
  //  this.state.persons[0].name = 'Maximilian';
      this.setState({persons: [
        {name: newName, age: 24},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 27}
      ]})
  }

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person =    
    {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // an alternative approach
    // const persons = Object.assign({}, this.state.persons[personIndex]);

    this.setState({persons: persons}
    
    )
  }

  deletePersonHandler = (personIndex) => {
    // array copy! equivalent to the splice method
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})

  }

  togglePersonsHandler = () => {

    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
      
  }

  render() {
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </div>
    // );


    // return React.createElement('div',{className: 'App'},
    // React.createElement('h1', null, 'Hi, I am a React APP!!!'));

    // this is the inline style css
    const style = 
    {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ':hover': {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let persons = null;
    if (this.state.showPerson){
      persons = (
        <div>
           {this.state.persons.map((person, index) => {
             return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}>
              </Person>
             
              
           })}
            </div>
           
      );
      // style.backgroundColor = "red";
      // style[':hover'] = {
      //   backgroundColor: "lightgreen",
      //   color: "black"
      // }
    }

    const classes = [];
    if (this.state.persons.length <=2) {
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }

    return(
     
      <div className = 'App'>
            <h1> Hi, I am a React APP!</h1>
            <p className={classes.join(' ')}>This is really working!</p>         
            <button className = 'button' alt = {this.state.showPerson} 
            onClick={this.togglePersonsHandler}>Switch Person</button>
            {persons}         
      </div>
     
    );
  }
}

export default App;
