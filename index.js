
class HeaderComponent extends React.Component{
  render(){  // єдиний метод, який ми зобов'язані визначити в класі
    console.log(this.props);
    const p = React.createElement('p',{}, 'Super paragraph')
    const h2 = React.createElement('h2',{title:'Hi!'},`Hello ${this.props.name}`)
    const article = React.createElement('article',{},h2,p)
    return article;
  }
}
const componrnt = React.createElement(HeaderComponent,{name:'Nataliia'})
const componrnt2 = React.createElement(HeaderComponent,{name:'Roland'})
const parentElement = React.createElement('section',{},componrnt,componrnt2)


const root = document.querySelector('#root')

ReactDOM.render(parentElement, root)
