function Animation() {
    var x = document.getElementById("links");
    var y = document.getElementById("login");
    var z = document.getElementById("content");
    var h = document.getElementById("hamburger");
    var c = document.getElementById("close");
    x.style.display = "block";
    y.style.display = "block";
    z.style.top = "250px";
    c.style.display = "block";
    h.style.display = "none";
  };
function AnimationClose() {
    var x = document.getElementById("links");
    var y = document.getElementById("login");
    var z = document.getElementById("content");
    var h = document.getElementById("hamburger");
    var c = document.getElementById("close");
    x.style.display = "none";
    y.style.display = "none";
    z.style.top = "100px";
    c.style.display = "none";
    h.style.display = "block";
  }