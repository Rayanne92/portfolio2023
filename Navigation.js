function Navigation() {
    var x = document.getElementById("m-nav");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

Change =(icon) => icon.classList.toggle('fa-xmark')