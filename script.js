document.getElementById('revealButton').addEventListener('click', function() {
    document.getElementById('specialMessage').style.display = 'block';
});
function openLightbox(src) {
    document.getElementById('lightboxOverlay').style.display = 'flex';
    document.getElementById('lightboxImage').src = src;
}

function closeLightbox() {
    document.getElementById('lightboxOverlay').style.display = 'none';
}

// Add this onclick function to each of your gallery images
// Example: <img src="path-to-image.jpg" onclick="openLightbox(this.src)">
