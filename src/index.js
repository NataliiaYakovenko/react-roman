
import React from "react";
import ReactDOM from "react-dom";

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
    } else if (this.state.count === 0 || (this.state.count - this.state.step) < 0) {
      alert("Лічильник не повинен дорівнювати 0");
    }
  }

  render() {
    const counter = React.createElement(
      "h2",
      {},
      `Значення лічильника: ${this.state.count}`
    );
    const step = React.createElement(
      "h2",
      {},
      `Значення кроку: ${this.state.step}`
    );

    const buttonIncrement = React.createElement(
      "button",
      {
        onClick: () => {
          this.increment();
        },
      },
      "+"
    );

    const buttonDecrement = React.createElement(
      "button",
      {
        onClick: () => {
          this.decrement();
        },
      },
      "-"
    );

    const setStepButton = React.createElement(
      "button",
      {
        onClick: () => {
          this.setState({
            step: Number(prompt("Введіть нове значення для кроку:"))
          })
        },
      },
      "Встановити нове значення для кроку"
    );

    return React.createElement(
      React.Fragment,
      {},
      counter,
      buttonIncrement,
      buttonDecrement,
      step,
      setStepButton
    );
  }
}

const component = React.createElement(Counter);

const root = document.querySelector("#root");

ReactDOM.render(component, root);

//-------------------------------------------------------------------------------
/*
1. Реакт - це бібліотека для створення користувацьких інтерфейсів
2. Ви можете викорстовувати як звичайний "ванільний" JS, так можете використовувати і реакт. 
Це може відбуватись одночасно
3. Пропси - це данні, які можна передавати в компоненти для того, щоб налаштовувати
зовнішній вигляд компонента
4. Для того щоб реакт нам щось відобразив, нам потрібно викликати метод ReactDOM.render()
Він приймає два папаметриЖ
- елемент, який потрібно відрендерити
- елемент, в який потрібно рендерити
5. Реакт оперує реакт-елементами
Реак-елемент - це об'єкт.
Реак-елемент набагато легший ніж той, що у нативному DOMi
6. З цих Рект-елементів, як з маленьких блоків складаються Реак-компоненти
А з Реакт-компонент складаються сторінки, які будуть бачити наші користувачі.
7. Стан-конпоненти - це такі данні, які можуть змінюватись за час життя нашої компоненти

*/
