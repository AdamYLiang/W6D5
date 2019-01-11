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
    // this.ourSeconds = 0;
  }

  render() {
    // debugger
    // const hours = this.state.Date.getHours(); 
    // const minutes = this.state.Date.getMinutes(); 
    // const seconds = this.state.Date.getSeconds(); 
    const date = this.state.Date.toDateString();
    const time = this.state.Date.toLocaleTimeString();

    return ( 
    <>
      <section className="clockBox"> 
        <div className="innerClockDiv">
        <label>Time:</label>
        <time className="time clock"> {time}</time>
        </div>

        <div className="innerClockDiv">
        <label>Date:</label>
        <time className="time date"> {date}</time>
        </div>
      </section>
    </>
    )
  }
}

export default Clock; 