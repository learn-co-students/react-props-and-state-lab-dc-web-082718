import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
      {this.props.pets.map(pet =>
        <Pet
          key = {pet.id}
          age = {pet.age}
          gender = {pet.gender}
          isAdopted = {pet.isAdopted}
          name = {pet.name}
          type = {pet.type}
          weight = {pet.weight}
          onAdoptPet = {this.props.onAdoptPet}
          id = {pet.id}
          />)}
    </div>
  )
  }
}

export default PetBrowser
