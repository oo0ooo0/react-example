import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Hell from './Hell.js'


class ShoppingList extends 
React.Component {
  render(){
    return (
      <div className="shopping-list">
        <h1>Shopping List for
{this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
        </div>
    )
  }
}
export default ShoppingList;



// class ShoppingList extends React.Component {
//  render() {
//    return (<div className="Hello_Container">
     
//      Hello World<Hell/>
//    <Hell/>
//    <Hell/>
//    <Hell/>
//    <Hell/>
//    <Hell/>
//    <Hell/>
//    </div>)
//  }
// }

// export default ShoppingList;
