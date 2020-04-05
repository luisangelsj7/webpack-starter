// importando clases 
import '../css/componentes.css';


// el export indica que yo puedo utilizar esta funcion fuera de este archivo.

export const saludar = (nombre) => {

    console.log('Creando etiqueta h1, en el HTML..rererererere');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola..., ${nombre}`;

    document.body.append(h1);
}