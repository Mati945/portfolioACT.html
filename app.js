const button = document.querySelector('.btn');
let isLight = true; // Variable para alternar entre los dos colores

// Función para cambiar el color de fondo
button.addEventListener('click', () => {
    if (isLight) {
        document.body.style.backgroundColor = '#000000'; // Fondo negro
    } else {
        document.body.style.backgroundColor = '#E0DACE'; // Fondo color claro
    }
    
 
    isLight = !isLight;
});






  

