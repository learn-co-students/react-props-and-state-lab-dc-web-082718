import React from 'react'

class Pet extends React.Component {
  renderMaleorFemale = () => {
    if (this.props.gender === 'male'){
      return '♂'
    } else {
      return '♀'
    }
  }

  renderAdopted = () => {

  if (this.props.isAdopted){
    return <button className="ui disabled button">Already adopted</button>
  } else {
    return <button onClick ={this.handleAdoptClick} data-id = {this.props.id} className="ui primary button">Adopt pet</button>
  }
}

  handleAdoptClick = (event) => {
    this.props.onAdoptPet(event.target.dataset.id)
  }

  render(){
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.name}
            {this.renderMaleorFemale()}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.renderAdopted()}
        </div>
      </div>
    )
  }

}

export default Pet
