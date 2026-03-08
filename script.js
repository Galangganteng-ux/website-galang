// script.js

// Functionality for image galleries and lightbox

document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery img');
    const lightbox = document.createElement('div');
    const lightboxImage = document.createElement('img');
    const closeBtn = document.createElement('span');

    // Lightbox styles
    lightbox.style.display = 'none';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    lightbox.style.justifyContent = 'center';
    lightbox.style.alignItems = 'center';
    lightbox.style.zIndex = '1000';

    lightboxImage.style.maxWidth = '90%';
    lightboxImage.style.maxHeight = '90%';

    closeBtn.textContent = '✖';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '20px';
    closeBtn.style.right = '20px';
    closeBtn.style.color = '#fff';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.fontSize = '30px';

    // Append elements
    lightbox.appendChild(lightboxImage);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);

    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            lightboxImage.src = this.src;
            lightbox.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });
});
