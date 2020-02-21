import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CharCard from './components/CharCard'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [starInfo, setStarInfo] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.co/api/people')
    .then((response) => {
      setStarInfo(response.data.results)
      // console.log(response.data.results)
    }).catch((error) => {console.log(error)})
  },[]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
     {starInfo.map(userObj => {return <CharCard name = {userObj.name} gender = {userObj.gender}/>})}
  </div>
  )};

export default App;

// *******COULD NOT FIND README FILE SO I'M ANSWERING THE QUESTIONS HERE *****

// What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.- React doesn't re-render after every change.  it uses the vDom to compare states and only changes what's necessary.  It also scales well for big projects because it breaks everything into smaller components.

//  What does it mean to think in react? - Everything is a component. Parents can give info to children via props but not the other way around.  

//  Describe state. - Info that the component must keep track of.  It can be updated and also passed as props to children.

//  Describe props. - Props is a "read-only" version of state that can be passed around to child components.

//  What are side effects, and how do you sync effects in a React component to state or prop changes? - Side effects occur when function affects something outside of itself.  We use useEffect to help sync in React.