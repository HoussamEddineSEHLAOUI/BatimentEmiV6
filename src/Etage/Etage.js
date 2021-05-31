import React from 'react';
import Chambre from '../Chombre/Chambre'
import './Etage.css';


const Etage=(props) =>{
     
    const ChombreComponent =props.chambres.map((idChmbre,i) =>{
        return (
        <Chambre className='chambre'
             key={i} 
            idChmbre={props.chambres[i].idChmbre}
            dispo={props.chambres[i].dispo}
            disableModifier={props.disableModifier}
          />
        ); 
    })
    
    return (
        <div className='CompEtage'>
            <h3 className='numEtage'>Eatge : {props.idEtage}</h3>
             <div className='Etage'>
                 {ChombreComponent}
             </div>
        </div>
    );
}
export default Etage;