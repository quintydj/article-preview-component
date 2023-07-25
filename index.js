const shareKnop = document.querySelector(".shareKnop");
const verstopt2 = document.querySelector(".verstopt2");
const info2 = document.querySelector(".info2");
const shareVerstopt = document.querySelector(".shareVerstopt");
const desktop = window.matchMedia("(min-width: 1440px)");

window.onload = latenZien();

shareKnop.addEventListener("click", latenZien);
shareVerstopt.addEventListener("click", latenZien);

function latenZien() {
  if (verstopt2.style.display === "none") {
    verstopt2.style.display = "block";
  } else {
    verstopt2.style.display = "none";
  }
}