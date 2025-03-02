
// class HeaderComponent extends React.Component{
//   render(){  // єдиний метод, який ми зобов'язані визначити в класі
//     console.log(this.props);
//     const p = React.createElement('p',{}, 'Super paragraph')
//     const h2 = React.createElement('h2',{title:'Hi!'},`Hello ${this.props.name}`)
//     const article = React.createElement('article',{},h2,p)
//     return article;
//   }
// }
// const componrnt = React.createElement(HeaderComponent,{name:'Nataliia'})
// const componrnt2 = React.createElement(HeaderComponent,{name:'Roland'})
// const parentElement = React.createElement('section',{},componrnt,componrnt2)


// const root = document.querySelector('#root')

// ReactDOM.render(parentElement, root)
//-------------------------------------------------------------------------------

/*
Зробіть класову компоненту, яка приймає через props ім'я людини 
і повертає h1 з текстом ім'я людини, яке вам передали
*/

class UserComponent extends React.Component{
    render(){
        const h1 = React.createElement('h1',{},`${this.props.name}`)
        const article = React.createElement('article',{},h1)
        return article;
    }
}

const componentName = React.createElement(UserComponent,{name:'Lidia'})

const root = document.querySelector('#root')
ReactDOM.render(componentName,root)
