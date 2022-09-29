function webbrowser() {
    location.href = "webbrowser.html";
}

function go(url) {
    if (document.getElementById("prefix").value != "none") {
        document.getElementById("web").src = document.getElementById("prefix").value + url;
    }
    else {
        document.getElementById("web").src = url;
    }
}

function maps() {
    location.href = "maps.html";
}

function mapsnav() {
    document.getElementById("maps").src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyD3s9EsTRca5-acWjANwOB0F23pnkTc9Gc&q=" + document.getElementById("mapsnav").value;
}

function info() {
    location.href = "about.html";
}