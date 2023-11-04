import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'


const urlPeople = 'http://localhost:9009/api/people'
const urlPlanets = 'http://localhost:9009/api/planets'

function App() {
  const [people, setPeople] = useState([])


  useEffect( () => {
    axios
    .get(urlPlanets)
    .then(planetsResponse => {
      const planets = planetsResponse.data;
      console.log(planets)
      axios
      .get(urlPeople)
      .then(peopleResponse => {
        const people = peopleResponse.data;
        const peopleWithPlanet = people.map(person => {
          const planet = planets.find(planet => planet.id === person.homeworld);
          return { ...person, planet };
        });
        setPeople(peopleWithPlanet);
        console.log(peopleWithPlanet)
      });
    });
  }, [])
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  return (
    <div className='character-card'>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {people.map(char => {
        return <Character
         data={char}
         key={char.id}
         fullName={char.name}
         birth={char.birth_year}
         mass={char.mass}
         height={char.height}
         gender={char.gender}
         hair={char.hair_color}
         eye={char.eye_color}
         homeworld={char.planet.name}
         planetDetails={char.planet}
         />
      })}   
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
