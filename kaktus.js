const trex = document.querySelector("#trex");
const kaktus = document.querySelector("#kaktus");

function zipla() {
  if (kaktus.classList != ".kaktus-animate") {
    kaktus.classList.add("kaktus-animate");
  }

  if (trex.classList != "trex - animate") {
    trex.classList.add("trex-animate");
    setTimeout(function () {
      trex.classList.remove("trex-animate");
    }, 500);
  }
}

var carpismaKontrol = setInterval(function () {
  let trexBottom = parseInt(
    window.getComputedStyle(trex).getPropertyValue("bottom")
  );
  let kaktusleft = parseInt(
    window.getComputedStyle(kaktus).getPropertyValue("left")
  );
  if (kaktusleft < 140 && kaktusleft > 0 && trexBottom < 40) {
    kaktus.classList.remove("kaktus-animate");
    kaktus.style.display = "none";
    alert("oyun bitti");
  }
}, 10);
