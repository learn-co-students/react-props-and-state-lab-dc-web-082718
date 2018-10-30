import React from 'react'

class Pet extends React.Component {
  constructor(props){
    super(props)
  }
  renderButton(){

    if (this.props.isAdopted){
      return <button className="ui disabled button">Already adopted</button>
    }
    else{
      return <button onClick ={this.handleClick} data-id = {this.props.id} className="ui primary button">Adopt pet</button>
    }

  }
  handleClick = (e) =>{

    this.props.onAdoptPet(e.target.dataset.id)
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.props.name}
            {this.props.gender == "male"?'♀':'♂' }
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
          {this.renderButton()}
        </div>
      </div>
    )
  }
}

export default Pet
