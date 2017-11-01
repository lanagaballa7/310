var slides = [
    
    {
    image: "1.gif"
    },{
  image: "2.5.jpg",
  caption: "MOM,MOM,MOM,MOMMYYY,MOMMYYYY,MOMMYY,MAMAAA,MAMAAAA"
    
},
{
  image: "2.jpg",
  caption: "UGGHHHHHHH"
    
},
{
  image: "3.jpg",
  caption: "WHAAAAATTTTTT!!!!"
},
             
{
  image: "hi.jpg",
  caption: "HIII :)!!"
    
},
 {
     image: "Stewie-Mom-Momma.gif",
  caption: "OOPSSS :D !!"
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