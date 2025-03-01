
const root = document.querySelector('#root')
const h1 = React.createElement('h1',{},'Hello React!') //реак елемент
console.log(h1);

const anotherH1 = document.createElement('h1') //HTML елемент
console.dir(anotherH1);

ReactDOM.render(h1, root)


//-------------------------------------------------------------------

/*
Підключить react i react-dom
Створіть елемент і вбудуйте його на сторінку
Відрендоріть його і переконайтесь, що елемент відображається на сторінці

*/
const img = React.createElement('img', {
    src:'https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg='
})

ReactDOM.render(img, root)