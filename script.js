
function openFullscreen(image) {
    const modal = document.getElementById("fullscreenModal");
    const fullscreenImage = document.getElementById("fullscreenImage");
    
   
    fullscreenImage.src = image.src;

    modal.style.display = "flex";
}


function closeFullscreen() {
    const modal = document.getElementById("fullscreenModal");
    modal.style.display = "none";
}
