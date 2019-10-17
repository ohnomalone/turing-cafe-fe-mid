import React, { Component } from 'react';
import './App.css';
import { getReservations } from "../ApiCalls/apiCalls";
import ReservationsContainer from '../ReservationsContainer/ReservationsContainer'
// import { getReservations } from '../ApiCalls/apiCalls'

class App extends Component {
constructor() {
  super()
  this.state = {
    reservations: [],
    error: ''
  }
}

componentDidMount() {
  // getReservations()
  fetch('http://localhost:3001/api/v1/reservations')
    .then ( response => response.json())
    .then(reservations => this.setState({ reservations: reservations}))
    .catch( error => console.error(error))
}

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ReservationsContainer reservations={this.state.reservations}
        </div>
      </div>
    )
  }
}

export default App;
