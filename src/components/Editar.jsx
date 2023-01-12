import React from 'react';

const Editar = ({ peli, getMovies, setEdit, setListState }) => {

    const title_Component = 'Editar Pelicula';

    const saveEdit = (e, id) => {
        e.preventDefault();

        // Conseguir el target del evento
        let target = e.target;

        // Buscar el indice del objeto de la pelicula a actualizar
        const peliculasAlmacenadas = getMovies();
        const index = peliculasAlmacenadas.findIndex(peli => peli.id === id);

        // Crear objeto con ese indice
        let peli_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value,
        };
        // Actualizar el elemento con ese indice
        peliculasAlmacenadas[index] = peli_actualizada;

        // Guardar el array en el localstorage
        localStorage.setItem('pelis', JSON.stringify(peliculasAlmacenadas));
        
        // Actualizar estados
        setListState(peliculasAlmacenadas);
        setEdit(0);
    };

    return (
        <div className='edit_form'>
            <h3 className='title'>{title_Component}</h3>
            <form onSubmit={e => saveEdit(e, peli.id)}>
                <input 
                    type='text'
                    name='titulo'
                    className='titulo_editado'
                    defaultValue={peli.titulo}
                />
                <textarea 
                    name='descripcion'
                    defaultValue={peli.descripcion}
                    className='descripcion_editada'
                >
                </textarea>
                <input type='submit' className='editar' value='Actualizar' />
            </form>
        </div>
    )
};

export default Editar;