document.addEventListener('keydown', function(event) {
    let keyCode = event.keyCode;

    // Flecha izquierda
    if (keyCode === 37) {
        movePrev();
    } 
    // Flecha derecha
    else if (keyCode === 39) {
        moveNext();
    }
});

document.addEventListener('click', function(event) {
    let windowWidth = window.innerWidth; // Ancho de la ventana del navegador
    let clickX = event.clientX; // Posición X del clic
    let leftThreshold = windowWidth * 0.08; // 10% del ancho de la ventana a la izquierda
    let rightThreshold = windowWidth * 0.92; // 10% del ancho de la ventana a la derecha

    if (clickX < leftThreshold) { // Si el clic está en el 10% más a la izquierda de la ventana
        movePrev();
    } else if (clickX > rightThreshold) { // Si el clic está en el 10% más a la derecha de la ventana
        moveNext();
    }
});

function moveNext() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
}

function movePrev() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
}