import React, { useState } from 'react';
import { saveInStorage } from '../helpers/SaveInStorage';

const Crear = ({ setListState }) => {
    const title = 'Añadir Pelicula';
    const [movieState, setMovieState] = useState({
        titulo: '',
        descripcion: '',
    });
    const { titulo, descripcion } = movieState;

    const getDataForm = e => {
        e.preventDefault();

        // Conseguir datos del formulario
        let target = e.target;
        let titulo = target.title.value;
        let descripcion = target.description.value;

        // Crear objeto de pelicula a guardar
        let movie = {
            id: new Date().getTime(),
            titulo,
            descripcion,
        };

        // Guardar estado
        setMovieState(movie);
        
        // Actualizar el estado del listado principal
        setListState(elementos => {
            return [...elementos, movie];
        });

        // Guardar en el almacenamiento local
        saveInStorage('pelis', movie);
    };

    return (
        <div className="add">
            <h3 className="title">{title}</h3>
            <strong>
                {(titulo && descripcion) && 'Creaste la Pelicula: ' + titulo}
            </strong>
            <form onSubmit={getDataForm}>
                <input 
                    type="text" 
                    id="title"
                    name='title'
                    placeholder="Titulo" 
                />

                <textarea 
                    id="description"
                    name='description'
                    placeholder="Descripción"> 
                </textarea>

                <input 
                    type="submit" 
                    id="save"
                    name='save'
                    value="Guardar" 
                />
            </form>
        </div>
    )
};

export default Crear;