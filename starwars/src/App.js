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
