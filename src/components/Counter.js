import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: 1,
    };
  }
  increment() {
    this.setState({
      count: this.state.count + this.state.step,
    });
  }

  decrement() {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - this.state.step,
      });
    } else if (
      this.state.count === 0 ||
      this.state.count - this.state.step < 0
    ) {
      alert("Лічильник не повинен дорівнювати 0");
    }
  }

  render() {
    return(
    <>
      <h2>{this.state.count}</h2>
      <h2>{this.state.step}</h2>
      <button onClick={()=>{this.increment()}}>+</button>
      <button onClick={()=>{this.decrement()}}>-</button>
      <button onClick={()=>{this.setState({step: Number(prompt("Введіть нове значення для кроку:"))})}}>Встановити нове значення для кроку</button>

    </>
    )

    //   return React.createElement(
    //     React.Fragment,
    //     {},
    //     counter,
    //     buttonIncrement,
    //     buttonDecrement,
    //     step,
    //     setStepButton
    //   );
  }
}

export default Counter;
