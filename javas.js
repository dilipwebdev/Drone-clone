function move() {
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");

    img1.style.display = "Block";
    img2.style.display = "none";
    img3.style.display = "none";
  }

  function move2() {
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");

    img1.style.display = "none";
    img2.style.display = "block";
    img3.style.display = "none";
  }

  function move3() {
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");

    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "block";
  }

  function watch() {
    var box = document.getElementById("box-watch");

    box.style.display = "block";
  }

  function cancel() {
    var boxWatch = document.getElementById("box-watch");

    boxWatch.style.display = "none";
  }

  function button()
  {
    var box = document.getElementById("drone-history");

    box.style.display = "block";
  }

  function wrong() {
    var boxWatch = document.getElementById("drone-history");

    boxWatch.style.display = "none";
  }
