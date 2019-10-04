import React from 'react';
import { IconClose } from './icones/icones';

class Detalhes extends React.Component {
    render () {
        return (
            <div className="detalhes">
               <div className="detalhes__top_bar">
                   <h3>Pokemon Info.</h3>
                   <button className="detalhes__fechar" type="button">
                       <IconClose width="24px" height="24px" fill="#52181c" />
                    </button>
               </div>
               <div className="detalhes__container">
                   <div className="detalhes__img">
                       <h2>Nv 49 MEW</h2>
                       <picture>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png" alt="Mew" />
                       </picture>
                   </div>

                   <table className="detalhes__info_table">
                       <tr>
                           <td>N&deg;</td>
                           <td>151</td>
                       </tr>
                       <tr>
                           <td>NOMBRE</td>
                           <td>MEW</td>
                       </tr>
                       <tr>
                           <td>EO</td>
                           <td>KENTARU</td>
                       </tr>
                       <tr>
                           <td>N&deg; ID</td>
                           <td>06240</td>
                       </tr>
                       <tr>
                           <td>OBJETO</td>
                           <td>NO TIENE</td>
                       </tr>
                   </table>
               </div>
               <div className="detalhes__notas">
                       <p>
                           Naturaleza TÍMIDA.
                           Conseguido por intercambio.
                       </p>
                   </div>
            </div>
        )
    }
}

export default Detalhes;