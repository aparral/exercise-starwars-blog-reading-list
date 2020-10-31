import React from 'react';
import { useContext } from 'react';
import { Context } from '../store/appContext';
import Card from "./cards";

const ListaFavoritos = () => {
    const { store, actions } = useContext(Context);
    return (
        <ul>
            {store.favoritos.map((item, index) => {
                return (
                    <div key={index} className="col-3">
                        <Card data={item} />

                        <li>

                        </li>
                    </div>
                );
            })}
        </ul>



    )

};

export default Listacards; 
