document.addEventListener("DOMContentLoaded", function() {
    const images = ["images/blog1.jpg", "Imagenes/FotoEquipo.jpg", "images/blog2.jpg"];
    let currentImageIndex = 0;

    const imageContainer = document.querySelector('.image-container');
    const imagesList = imageContainer.getElementsByTagName('img');

    function changeImage() {
        imagesList[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imagesList[currentImageIndex].classList.add('active');
    }

    images.forEach(function(imageSrc, index) {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.classList.add('active');
        if (index === 0) {
            img.classList.add('active');
        }
        imageContainer.appendChild(img);
    });

    setInterval(changeImage, 3000); // Cambiar cada 5 segundos (ajusta según tus necesidades)
});