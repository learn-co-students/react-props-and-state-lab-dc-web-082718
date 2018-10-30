import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (e) => {
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }

  onFindPetsClick = (e) => {
    this.fetchPets().then(this.setPets)
  }

  fetchPets() {
    if(this.state.filters.type === 'all') {
      return fetch('/api/pets').then(res => res.json())
    } else {
      const url = `/api/pets?type=${this.state.filters.type}`
      return fetch(url).then(res => res.json())
    }
  }

  setPets = (pets) => {
    this.setState({
      pets: pets
    })
  }

  onAdoptPet = (id) => {
    let petsArray = this.state.pets
    let adoptedPet = this.state.pets.find(pet => pet.id === id)
    let index = this.state.pets.indexOf(adoptedPet)
    petsArray[index] = {
      ...adoptedPet,
      isAdopted: true
    }
    this.setState({
      pets: petsArray
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
