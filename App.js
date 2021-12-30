
import './App.css';
import React, { Component } from 'react';

import { SearchBox } from './components/searchBox/search-box-component';
import { CardList } from './components/Card-list/card-list-component';

//REACT SON FUNCIONES/COMPONENTES QUE REGRESAN ALGUN HTML. 
//PODEMOS USAR CLASES, QUE NOS PERMITEN HACER VARIAS COSAS CON COMPONENTES

//App es el objeto de la clase, y heréda component
class App extends Component (){
  constructor(){ //for creating and initializing an object instance of that class.
    super(); //is used to access and call functions and atributes on an object's parent. 
    this.state = {
    monsters: [],
    searchField:''
    }
  };
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users') //PETICION/FETCH nos regresa una promesa, response(objeto de http) si es verdad
    .then(response => response.json)
    //response es un parámetro, es equivalente a decir: function jason (response){return response.json}
    //then es para promesas cumplidas, exitosas, no errores
    .then(users => (this.setState({monsters: users}))) 
   //La promesa también me dice que se ejecutará "algun dia" React decide cuando es el mejor momento

  }
  //MUY IMPORTANTE
  //nuestra propia funcion tiene que estar en arrow, o no sabe que es this.state
  //Por la forma en la que esta programado js, arrow entiende cosas externas a su definicion
  //componentDidMount y Render estan en forma de función, pero si conocen this, porque son de component, super()
 handleChange = e=>{this.setState({searchField: e.target.value})}
      // target nos da el elemento html (<input type="search"...)
    //.value nos dará el string que ocaciona el evento
    //setState es una llamada a función asíncrona, como las promesas.
  render(){
    const {monsters, searchField} = this.state;
        //Equivalente a decir;
    /*
    const monsters = this.state.monsters;
    const searchField = this.state.searchField;
    */
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLoweCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
        placeholder='search monster'
        handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}


export default App;
