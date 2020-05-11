import React from 'react';
// this is functional based
//import './Person.css'
import styled from 'styled-components'

const StyledDiv = styled.div`

    width: 60%;
    margin: 16px auto;
    border:1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px){
        .Person{
            width: 450px;
        }
     `;



const person = (props) => {
    const style = {
        '@media(minWidth:500px)':{
            width: '450px'
        }
    }
    //here we use dynamic componet to make the code reusable
    
    return (
       // <div className = "Person" style = {style}>
       <StyledDiv>
            <p onClick={props.click}> I'm {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
    )
}

// another way is class based
// class Person extends Component{
//     render(){
//         return <p>My name is {this.props}</p>
//     }
// }

export default person;