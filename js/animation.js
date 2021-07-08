function Animation() {
    var x = document.getElementById("links");
    var y = document.getElementById("login");
    //var p = document.getElementById("pic_down");
    var z = document.getElementById("content");
    var h = document.getElementById("hamburger");
    var c = document.getElementById("close");
    x.style.display = "inline-grid";
    x.style.position = "absolute";
    x.style.top = "60px";
    y.style.display = "inline-grid";
    y.style.position = "absolute";
    y.style.top = "600px";
    y.style.left = "31%";
    //p.style.bottom = "-22px";
    z.style.display = "none";
    c.style.display = "block";
    h.style.display = "none";
  };
function AnimationClose() {
    var x = document.getElementById("links");
    var y = document.getElementById("login");
    //var p = document.getElementById("pic_down");
    var z = document.getElementById("content");
    var h = document.getElementById("hamburger");
    var c = document.getElementById("close");
    x.style.display = "none";
    y.style.display = "none";
    //p.style.bottom = "-230px";
    z.style.display = "block";
    c.style.display = "none";
    h.style.display = "block";
  }