import React from 'react'

class Pet extends React.Component {

  genderIcon = (pet) => {
    if (pet.gender === 'male'){
      return '♂'
    } else {
      return '♀'
    }
  }

  determineButton = (pet) => {
    if (pet.isAdopted === true){
      return <button className="ui disabled button">Already adopted</button>
    } else if (pet.isAdopted === false){
      return <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.genderIcon(this.props.pet)
            /*'♀' OR '♂' */}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">
              {this.props.pet.type}
            </span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.determineButton(this.props.pet)}
        </div>
            <br></br>

      </div>
    )
  }
}

export default Pet
