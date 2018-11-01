import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">
      <br></br>
      {this.props.pets.map(petData =>
        <Pet key={petData.id} pet={petData} onAdoptPet={this.props.onAdoptPet}/>
      )}
    </div>
  }
}

export default PetBrowser
