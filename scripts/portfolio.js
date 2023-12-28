// logo
let logo = "<img alt='' src='images/logo.png' />";
document.getElementById("logo").innerHTML = logo;
// header 
let hdr = " ";
hdr += "<h1 class='bold'>Hello, I'm Sam</h1>";
hdr += "<h2 class='light'>Web Designer</h2>";
document.getElementById("hdr").innerHTML = hdr; 
// banner 
let banner = "<img alt='' src='images/hero1.jpg' />";
document.getElementById("banner").innerHTML = banner;
// portfolio 
let titles = [];
titles[0] = "technoline";
titles[1] = "majestique"
titles[2] = "silverzim";

let container = document.getElementById("container");
let newCode = " ";
for (let i = 0; i < titles.length; i++) {
    newCode += "<figure class='light'>";
    newCode += "<figcaption class='caps'>" + titles[i] + "</figcaption>";
    newCode += "<figcaption class='links'>" + "<a href='#'>" + titles[i] + ".com </a></figcaption>";
    newCode += "<img class='enlarge' alt='' src='images/photo" + i + ".jpg' data-enhanced='images/photo" + i + ".jpg' />";
    newCode += "</figure>";
}

container.innerHTML = newCode;

window.onload = portfolio;

function enhanceImage() {
    let overlay = document.createElement("div");
    overlay.setAttribute("id","overlay");
    overlay.setAttribute("class", "overlay"); 
 
    document.body.appendChild(overlay);   
 
    let img = document.createElement("img");
    img.setAttribute("id","display");
    img.src = this.getAttribute("data-enhanced");
 
    img.setAttribute("class","imageExpanded");
 
    img.onclick=restore;
 
    document.body.appendChild(img);
 }
 
function restore() {
  document.body.removeChild(document.getElementById("overlay")); 
  document.body.removeChild(document.getElementById("display"));
 }
            
function portfolio() {
    let imgs = document.getElementsByClassName("enlarge");
    imgs[0].focus();
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].onclick=enhanceImage;
      imgs[i].onkeydown=enhanceImage;
    }
 }

 