
function activateGallery(){
  let thumbnails = document.getElementById("gallery-thumbs").querySelectorAll("img");
  let mainImage = document.getElementById("gallery-photo").querySelector("img");
   // Utilisation de 2 querySelector en 1 et dans 2 notaitons différentes
  let mainTitle = document.querySelector("#gallery-info .title");
  let mainDescription= document.querySelector("#gallery-info > p")

  thumbnails.forEach(function(thumbnail){
    thumbnail.onclick = function() {
      // Preload large images.
      let newImageSrc  = thumbnail.dataset.largeVersion;
      let largeVersion = new Image();
      largeVersion.src = newImageSrc;

      let newAlt = thumbnail.alt    
      let newTitle = thumbnail.dataset.title;
      let newDescription = thumbnail.dataset.description;

      // Set clicked image as display image with desciption & title
      mainImage.setAttribute("src",newImageSrc);
      mainImage.setAttribute("alt",newAlt);
      mainTitle.innerHTML = newTitle;
      mainDescription.innerHTML = newDescription;

      // Change which image is current
      document.querySelector(".current").classList.remove("current");
      thumbnail.parentNode.classList.add("current");
    };
  });
}