import React from "react";
import './card-list.styles.css'
import { Card } from "../Card/card-component";

//this.state es pasada como un propiedad
export const CardList = (props) =>(
    <div className="card-list">
    {props.monsters.map(monster =>
        //MAP es como un: for i in arreglo, pero nos crea un nuevo arreglo que cumple la función
        //ejemplo: const arreglo: [1,2,3,4]; arreglo.map(elemento=>elemento+1); output: [2,3,4,5]
    <Card mosnter={monster}/> )}
    </div>
);