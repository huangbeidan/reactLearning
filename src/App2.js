// another way for using props and state
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const app = props => {

    // the first output--> current state, the second output -> change state
    // so we can use array destructing here
    const [ personState, setPersonState] = useState({
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age: 26}],
    }
    );

    const [otherState, setOtherState] = useState('some other values');



    const switchNameHandler = () => {
        //  this.state.persons[0].name = 'Maximilian';
            setPersonState({persons: [
              {name: 'Beidan', age: 24},
              {name: 'Manu', age: 29},
              {name: 'Stephanie', age: 27}
            ]})
        }

    return(
      <div className = 'App'>
            <h1> Hi, I am a React APP!</h1>          
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person 
            name = {personState.persons[0].name} 
            age = {personState.persons[0].age}>
            </Person>
            <Person 
            name = {personState.persons[1].name} 
            age = {personState.persons[1].age}
            >
                MyHobbies: Racing
            </Person>
            <Person 
            name = {personState.persons[2].name} 
            age = {personState.persons[2].age}>
            </Person>
      </div>
    );
  }

// switchNameHandler = () => {
//     //  this.state.persons[0].name = 'Maximilian';
//         this.setState({persons: [
//           {name: 'Beidan', age: 24},
//           {name: 'Manu', age: 29},
//           {name: 'Stephanie', age: 27}
//         ]})
//     }


export default app;
