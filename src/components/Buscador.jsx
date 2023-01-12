import React, { useState } from 'react';

const Buscador = ({ listState, setListState }) => {
    const [search, setSearch] = useState('');
    const [notCoincidence, setNotCoincidence] = useState(false);

    const searchMovie = (e) => {
        // Crear estado y actualizarlo
        setSearch(e.target.value);

        // Filtrar para buscar coincidencias
        let pelisEncontradas = listState.filter(peli => {
            return peli.titulo.toLowerCase().includes(search.toLocaleLowerCase());
        });

        // Comprobar si hay un resultado
        if (search.length <= 1 || pelisEncontradas <= 0) {
            pelisEncontradas = JSON.parse(localStorage.getItem('pelis'));
            setNotCoincidence(true);
        } else {
            setNotCoincidence(false);
        };

        // Actualizar el estado del listado principal con la filtracion
        setListState(pelisEncontradas);
    };

    return (
        <div className="search">
            <h3 className="title">Buscador</h3>
            {
                notCoincidence && search.length > 1 &&
                <span className='no-coincidencia'>No se encontro coincidencias</span>
            }
            <form>
                <input 
                    type="text" 
                    id="search_field"
                    name='busqueda'
                    autoComplete='off'
                    onChange={searchMovie}
                />
                <button id="search">Buscar</button>
            </form>
        </div>
    )
};

export default Buscador;