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

  onChangeType = (event) => {

    let newType = event.currentTarget.value;

    this.setState({
      filters: {
        type: newType
      }
    })
  }

setPets = (data) => {
  this.setState({
    pets: data
  }, () => {
    console.log(this.state.pets)
  })
}

onFindPetsClick = () => {
  let type = this.state.filters.type

  if (type === 'dog'){
    fetch('/api/pets?type=dog')
    .then(res => res.json())
    .then(data => this.setPets(data))
  } else if (type === 'cat') {
    fetch('/api/pets?type=cat')
    .then(res => res.json())
    .then(data => this.setPets(data))
  } else if (type === 'micropig'){
    fetch('/api/pets?type=micropig')
    .then(res => res.json())
    .then(data => this.setPets(data))
  } else if (type === 'all'){
    fetch('/api/pets')
    .then(res => res.json())
    .then(data => this.setPets(data))
  }
}

onAdoptPet = (id) => {
  let copy = JSON.parse(JSON.stringify(this.state.pets))

  copy.map(pet => {
    if (pet.id === id){
      pet.isAdopted = true
    }
  })
  this.setState({pets: copy})
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
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
