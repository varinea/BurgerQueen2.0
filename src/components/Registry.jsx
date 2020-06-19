import React from 'react';
import '../assets/css/breakfast.css';
import burgerqueen from '../assets/img/burgerqueen.png';

const Registry = () => {
    return (
        <div>
              {/* Logotipo pequeño */}
         <div className="col-3">
         <img src={burgerqueen} alt="" className="logo-small"/>
     </div>
              <h1>Registro</h1>
            <input type="text" placeholder="Nombre" className=""/>
            <input type="text" placeholder="Apellido" className=""/>
            <input type="text" placeholder="Cargo" className=""/>
            <input type="text" placeholder="Clave" className=""/>
            <input type="text" placeholder="Repetir Clave" className=""/>

            <button >Entrar</button>  

           
        </div>

        
    )
}

export default Registry