var slides = [{
  image: "cat.jpg",
  caption: "I'm a cat"
    
},
{
  image: "dog.jpg",
  caption: "I'm a dog"
    
},
{
  image: "bird.jpg",
  caption: "Tweet,tweet"
}];

for( var i = 0; i < slides.length; i++){
    
var slide = slides [i];
var slideElem = document.createElement("div");
var img = new Image();
var cap = document.createElement("p");
img.src = slide.image;
cap.textContent = slide.caption;

slideElem.appendChild(img);
slideElem.appendChild(cap);

document.body.appendChild(slideElem);
}