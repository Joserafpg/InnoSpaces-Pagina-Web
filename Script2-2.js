let isThrottled = false;

document.addEventListener('keydown', function(event) {
    if (!isThrottled) {
        let keyCode = event.keyCode;

        // Flecha izquierda
        if (keyCode === 37) {
            movePrev();
        } 
        // Flecha derecha
        else if (keyCode === 39) {
            moveNext();
        }

        isThrottled = true;
        setTimeout(function() {
            isThrottled = false;
        }, 500);
    }
});



document.addEventListener('wheel', function(event) {
    if (!isThrottled) {
        let deltaY = event.deltaY;

        if (deltaY > 0) {
            moveNext(); 
        } else if (deltaY < 0) {
            movePrev(); 
        }

        isThrottled = true;
        setTimeout(function() {
            isThrottled = false;
        }, 800);
    }
});

document.addEventListener('click', function(event) {
    if (!isThrottled) {
        let windowWidth = window.innerWidth;
        let clickX = event.clientX; 
        let leftThreshold = windowWidth * 0.08; 
        let rightThreshold = windowWidth * 0.92; 

        if (clickX < leftThreshold) {
            movePrev();
        } else if (clickX > rightThreshold) { 
            moveNext();
        }

        isThrottled = true;
        setTimeout(function() {
            isThrottled = false;
        }, 300);
    }
});

function moveNext() {
    let items = document.querySelectorAll('.item');
    let slide = document.querySelector('.slide');
    slide.appendChild(items[0]);
    slide.style.justifyContent = "flex-end";
}

function movePrev() {
    let items = document.querySelectorAll('.item');
    let slide = document.querySelector('.slide');
    slide.prepend(items[items.length - 1]); 
    slide.style.justifyContent = "flex-start";
}