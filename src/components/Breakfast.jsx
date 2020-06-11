import React from 'react';
import '../assets/css/breakfast.css';
import burgerqueen from '../assets/img/burgerqueen.png';

const Breakfast = () => {
    return (
        // Contenedor background con imágen
        <div className="container-back container-fluid">

            {/* Contenedor para toda la vista */}
            <div className="container">

                {/* Contenedor para título, input, select y logo */}
                <div className="row pt-5">

                    {/* Contenedor para título, input y select */}
                    <div className="col-9 row">

                        {/* Título, input y select */}
                        <h1 className="title-breakfast col-12">Menú Desayuno</h1>
                            <input type="text" placeholder="Nombre cliente" className="form-control col-5 inputs-ingreso"/>
                            <select name="" id="" className="inputs-ingreso custom-select col-3 ml-3">
                                <option value="">N° mesa</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                    </div>

                    {/* Logotipo pequeño */}
                    <div className="col-3">
                        <img src={burgerqueen} alt="" className="logo-small"/>
                    </div>
                
                </div>

                 {/* Botones de menú Desayuno*/}
                <div className="row d-flex justify-content-between mt-4">
                    
                        <button type="button" className="btn btn-breakfast mb-2">CAFÉ AMERICANO $500</button>
                        <button type="button" className="btn btn-breakfast">SANDWICH DE JAMÓN Y QUESO $1.000</button>
                        <button type="button" className="btn btn-breakfast">CAFÉ CON LECHE $700</button>
                        <button type="button" className="btn btn-breakfast">JUEGO DE FRUTA NATURAL $700</button>
                    
                </div>
            

            {/* Pedido de mesero a cliente*/}
            <table className="table table-borderless mt-5">
                
                <thead className="title-pedido">
                    <th colspan="3" className="border-pedido pl-4 pb-3">PEDIDO</th>
                </thead>
                
                <tbody className="table-pedido">
                    <tr>
                        <th scope="col">Cliente:</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Mesa:</th>
                    </tr>

                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>

                    <tr>
                        <td></td>
                        <td>TOTAL:</td>
                        <td>$</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            <button type="button" className="btn btn-enviar">ENVIAR</button>
                        </td>
                    </tr>
                </tbody>
            </table>


            {/* Pedidos enviados desde cocinero para entregar por el mesero */}
            <table className="table table-borderless mt-5">
                
                <thead className="title-pedido">  
                    <th colspan="3" className="border-pedido pl-4 pb-3">PEDIDOS PARA ENTREGAR</th>    
                </thead>
                
                <tbody className="table-pedido">
                    <tr>
                        <th scope="col">Mesa:</th>
                        <th scope="col">Entregar</th>
                        <th scope="col">Check:</th>
                    </tr>

                    <tr>
                        <th scope="col">Mesa:</th>
                        <th scope="col">Entregar</th>
                        <th scope="col">Check:</th>
                    </tr>

                    <tr>
                        <th scope="col">Mesa:</th>
                        <th scope="col">Entregar</th>
                        <th scope="col">Check:</th>
                    </tr>

                  
                </tbody>
            </table>

                
            </div>
        </div>
    )
}

export default Breakfast;
