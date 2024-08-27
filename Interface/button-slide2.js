var slideIndex2 = 1;
function plusDivs2(n) {
    showDivs2(slideIndex2 += n);
}
function showDivs2(n) {
    var i;
    var x = document.getElementsByClassName("div-upcoming");
    var dots = document.getElementsByClassName("dot2");
  
    if (n > x.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = x.length - x.length % 4 + 1}
    for (i = 0; i < x.length; i++)
        x[i].style.display = "none";  
    for (i = 0; i < 4; i++){
        var index = slideIndex2 - 1 + i;
        if (index < x.length)
        x[index].style.display = "inline-block";
    }  
    for (i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(" active", "");
  
    dots[(slideIndex2 - 1) / 4].className += " active";
}
function createDots2() {
    var slideCount = document.getElementsByClassName("div-upcoming").length;
    var dotContainer = document.querySelector(".dot-container2");
    for (var i = 0; i < slideCount / 4; i++) {
        var dot = document.createElement("span");
        dot.className = "dot2";
        dotContainer.appendChild(dot);
    }
  
    var dots = document.getElementsByClassName("dot2");
    dots[0].className = dots[0].className.replace(" active", "");
    dots[0].className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
    createDots2();
});
showDivs2(slideIndex2)