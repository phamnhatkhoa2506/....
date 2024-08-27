var slideIndex = 1;
function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("div-film");
    var dots = document.getElementsByClassName("dot");

    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length - x.length % 4 + 1}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }

    for (i = 0; i < 4; i++)
    {
        var index = slideIndex - 1 + i;
        if (index < x.length)
            x[index].style.display = "inline-block";
    }  

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    dots[(slideIndex - 1) / 4].className += " active";
}
function createDots() {
    var slideCount = document.getElementsByClassName("div-film").length;
    var dotContainer = document.querySelector(".dot-container");
    for (var i = 0; i < slideCount / 4; i++) {
        var dot = document.createElement("span");
        dot.className = "dot";
        dotContainer.appendChild(dot);
    }

    var dots = document.getElementsByClassName("dot");
    dots[0].className = dots[0].className.replace(" active", "");
    dots[0].className += " active";
}
document.addEventListener("DOMContentLoaded", function() {
    createDots();
});
showDivs(slideIndex)