
// class Counter extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             count: 0
//         };
//     }
//     increment(){
//         // todo: state.count++
//         this.setState({
//             count: this.state.count +1
//         })
//         console.log('CLICK');
//     }

//     render(){
//         const h2 = React.createElement('h2',{},this.state.count)
//         const button = React.createElement('button',{onClick: ()=>{this.increment()}}, '+')
//         return React.createElement(React.Fragment,{},h2,button);

//     }
// }
// const component = React.createElement(Counter)

// const root = document.querySelector('#root')
// ReactDOM.render(component,root)
//--------------------------------------------------------------------------

/*
Зробіть той самий counter, який крім інкременту буде ще й декрементувати лічильник
Лічильник не має опускатися нижчі нуля

*/

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            count: 0
        }
    }
increment(){
    this.setState({
        count: this.state.count + 1
    })
}

decrement(){
    this.setState({
        count: this.state.count - 1
    })
}

render(){
    const h2 = React.createElement('h2', {},this.state.count)
    const buttonIncrement = React.createElement('button', {onClick:()=>{this.increment()}},'+')
    const buttonDecrement = React.createElement('button', {onClick:()=>{this.decrement()}},'-')
    return React.createElement(React.Fragment,{}, h2,buttonIncrement,buttonDecrement)
}

}

const component = React.createElement(Counter)

const root = document.querySelector('#root')

ReactDOM.render(component,root)










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

