document.addEventListener('mousemove', function(event) {
    let windowWidth = window.innerWidth;
    let mouseX = event.clientX;

    let leftOverlay = document.querySelector('.left-overlay');
    let rightOverlay = document.querySelector('.right-overlay');

    let leftThreshold = windowWidth * 0.1; // 10% del ancho de la ventana a la izquierda
    let rightThreshold = windowWidth * 0.9; // 10% del ancho de la ventana a la derecha

    if (mouseX < leftThreshold) {
        leftOverlay.style.opacity = 1; // Muestra la superposición izquierda
    } else {
        leftOverlay.style.opacity = 0; // Oculta la superposición izquierda
    }

    if (mouseX > rightThreshold) {
        rightOverlay.style.opacity = 1; // Muestra la superposición derecha
    } else {
        rightOverlay.style.opacity = 0; // Oculta la superposición derecha
    }
});