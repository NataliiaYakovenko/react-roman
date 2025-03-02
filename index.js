
class HeaderComponent extends React.Component{
  render(){  // єдиний метод, який ми зобов'язані визначити в класі
    console.log(this.props);
    const p = React.createElement('p',{}, 'Super paragraph')
    const h2 = React.createElement('h2',{title:'Hi!'},`Hello ${this.props.name}`)
    const article = React.createElement('article',{},h2,p)
    return article;
  }
}
const componrnt = React.createElement(HeaderComponent,{name:'Nataliia'},'Test --> Nataliia')
const componrnt2 = React.createElement(HeaderComponent,{name:'Roland'},'Test --> Roland')
const parentElement = React.createElement('section',{},componrnt,componrnt2)


const root = document.querySelector('#root')

ReactDOM.render(parentElement, root)
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

*/

