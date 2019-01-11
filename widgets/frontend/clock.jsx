import React from 'react';

class Clock extends React.Component {
  constructor (props) {
    super(props);

    this.state = { Date: new Date() }; 
    this.tick = this.tick.bind(this);

    this.ourSeconds = null; 
  }

  tick() {
    this.setState( { Date: new Date() } );
  }

  componentDidMount() {
    this.ourSeconds = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.ourSeconds);
    this.ourSeconds = 0;
  }

  render() {
    // debugger
    const hours = this.state.Date.getHours(); 
    const minutes = this.state.Date.getMinutes(); 
    const seconds = this.state.Date.getSeconds(); 

    return ( 
    <>
      <h1>{hours}:{minutes}:{seconds}</h1>
    </>
    )
  }
}

export default Clock; 