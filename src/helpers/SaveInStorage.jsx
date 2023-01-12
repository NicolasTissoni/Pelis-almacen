export const saveInStorage = (key, elemento) => {

    // Conseguir los elemenos del almacenamiento local
    let element = JSON.parse(localStorage.getItem(key));
    console.log(element);

    // Comprobar si es un array
    if (Array.isArray(element)){
        // Añadir dentro del array un elemento nuevo
        element.push(elemento);
    } else {
        // Crear un array con un nuevo elemento
        element = [elemento];
    };

    // Guardar el almacenamiento local
    localStorage.setItem(key, JSON.stringify(element));

    // Devolver Objeto guardado
    return elemento;
};