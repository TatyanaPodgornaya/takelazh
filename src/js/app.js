window.onload = function () {
    var header = document.getElementById("header"),
        nav    = document.getElementById("nav"),
        upLink = document.getElementById("up");

    var height = header.offsetHeight + nav.offsetHeight;

    window.onresize = function () {
        height = header.offsetHeight + nav.offsetHeight;
    }

    window.onscroll = doOnScroll;

    function doOnScroll() {
        console.log("Scroll");
        console.log('h=', height);
        console.log("stE=", document.documentElement.scrollTop);
        console.log("stB=", document.body.scrollTop);
        var top = document.documentElement.scrollTop || document.body.scrollTop
        console.log("stT=", top);
        if (top > height) {
            upLink.style.display = "block";
        } else {
            upLink.style.display = "none";
        }
    }

    //check
    doOnScroll();
}