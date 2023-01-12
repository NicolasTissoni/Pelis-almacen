import React, { useEffect, useState } from 'react';
import Editar from './Editar';

const Listado = ({listState, setListState}) => {

    const [edit, setEdit] = useState(0);

    useEffect(() =>{
        console.log('Componente cargado');
        getMovies();
    }, []);

    const getMovies = () => {
        let movies = JSON.parse(localStorage.getItem('pelis'));
        setListState(movies);
        return movies;
    };

    const clearMovie = (id) => {
        // Conseguir peliculas almacenadas
        let moviesSaved = getMovies();

        // Filtrar esas peliculas para eliminar del array la que yo quiero
        let newListMovies = moviesSaved.filter(peli => peli.id !== parseInt(id));

        // Actualizar el estado en el list
        setListState(newListMovies);

        // Actualizar los datos en el localStorage 
        localStorage.setItem('pelis', JSON.stringify(newListMovies));
    };

    return (
        <>
            {listState != null ? listState.map(peli => {
                return (            
                    <article key={peli.id} className="peli-item">
                        <h3 className="title">{peli.titulo}</h3>
                        <p className="description">{peli.descripcion}</p>
                        <button className="edit" onClick={() => setEdit(peli.id)}>Editar</button>
                        <button className="delete" onClick={() => clearMovie(peli.id)}>Borrar</button>
                        {edit === peli.id && (
                            <Editar peli={peli} getMovies={getMovies} 
                            setEdit={setEdit}
                            setListState={setListState}
                            />
                        )}
                    </article>
                    )
            })
            : <h2>No hay peliculas para mostrar</h2>
            };
        </>
    )
};

export default Listado;