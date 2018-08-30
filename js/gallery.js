document.addEventListener("DOMContentLoaded", function(event) {
  
  let thumbnails = document.getElementById("gallery-thumbs").querySelectorAll("img");
  let mainImage = document.getElementById("gallery-photo").querySelector("img")

  thumbnails.forEach(function(thumbnail){
    let newImageSrc = thumbnail.src.replace(/small/i,"large")
    thumbnail.onClick = function() {mainImage.setAttribute("src",newImageSrc)};
    console.log(newImageSrc);
    });
});
