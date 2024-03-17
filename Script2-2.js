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

document.addEventListener('wheel', function(event) {
    let deltaY = event.deltaY;

    if (deltaY > 0) {
        moveNext(); // Si el desplazamiento es hacia abajo, mover hacia adelante
    } else if (deltaY < 0) {
        movePrev(); // Si el desplazamiento es hacia arriba, mover hacia atrás
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
    let slide = document.querySelector('.slide');
    slide.appendChild(items[0]); // Mueve el primer elemento al final
    slide.style.justifyContent = "flex-end"; // Alinea los elementos al extremo derecho
}

function movePrev() {
    let items = document.querySelectorAll('.item');
    let slide = document.querySelector('.slide');
    slide.prepend(items[items.length - 1]); // Mueve el último elemento al principio
    slide.style.justifyContent = "flex-start"; // Alinea los elementos al extremo izquierdo
}