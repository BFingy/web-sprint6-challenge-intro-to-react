import React, { useState } from 'react'
import axios from 'axios';



function Character({ data, fullName, birth, mass, height, gender, hair, eye, homeworld, planetDetails }) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const [showPlanetDetails, setShowPlanetDetails] = useState(false);
  const [showCharacterDetails, setShowCharacterDetails] = useState(false)

  const toggleCharacterDetails = () => {
    setShowCharacterDetails(!showCharacterDetails)
  }

  const togglePlanetDetails = () => {
    setShowPlanetDetails(!showPlanetDetails)
  }

  //console.log(data)
  return (
    <div className='character-card'>
      {/* Use the same markup with the same attributes as in the mock */}

      {/* name is only thing showing until click*/}
      <h3 className='character-name' onClick={togglePlanetDetails}>{fullName}</h3>

      {/*this shows after name click and closes after clicked again */}
      {/*in the info, homeworld is last and is a button that has the planet name */}
      {
        showPlanetDetails && (
          <>
            <p>Born: {birth}</p>
            <p>Mass: {mass}</p>
            <p>Height: {height}</p>
            <p>Gender: {gender}</p>
            <p>Hair Color: {hair}</p>
            <p>Eye Color: {eye}</p>
            <h3 className='character-planet' onClick={toggleCharacterDetails}>Homeworld: {homeworld}</h3>
          </>
        )
      }

      {/*this should render when the planet name button is clicked and closed when clicked again */}
      {
        showCharacterDetails && showPlanetDetails && (
          <>
            <p>Orbital Period: {planetDetails.orbital_period}</p>
            <p>Climate: {planetDetails.climate}</p>
            <p>Terrain: {planetDetails.terrain}</p>
            <p>Population: {planetDetails.population}</p>
          </>

        )
      }

    </div>
  );
}

export default Character
