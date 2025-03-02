
class HeaderComponent extends React.Component{
  render(){  // єдиний метод, який ми зобов'язані визначити в класі
    const p = React.createElement('p',{}, 'Super paragraph')
    const h2 = React.createElement('h2',{title:'Hi!'},'Header')
    const article = React.createElement('article',{},h2,p)
    return article;
  }
}
const componrnt = React.createElement(HeaderComponent)
const root = document.querySelector('#root')

ReactDOM.render(componrnt, root)
