
const root = document.querySelector('#root')
const h1 = React.createElement('h1',{},'Hello React!') //реак елемент
console.log(h1);

const anotherH1 = document.createElement('h1') //HTML елемент
console.dir(anotherH1);


ReactDOM.render(h1, root)