import React ,{useState,useCallback } from 'react';

function Compteur(props){

    const [count,setCount]= useState(0);

    const increment = useCallback(() => {
        setCount(count +Number(props.increment));
      }, [count,props.increment]);
    

    return (
        <div>
            <Bouton  onClick={increment}></Bouton>
            <h3>incrémente:{count}</h3>
        </div>
    )
}

function Bouton(props){
    return(
        <button onClick={()=>props.onClick()} >incrémenter</button>)
}
export {Compteur}