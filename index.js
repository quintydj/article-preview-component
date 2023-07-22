const shareKnop = document.querySelector(".shareKnop");
const verstopt2 = document.querySelector(".verstopt2");
const info2 = document.querySelector(".info2");
const shareVerstopt = document.querySelector(".shareVerstopt");

window.onload = latenZien();

shareKnop.addEventListener("click", latenZien);

function latenZien() {
  if (verstopt2.style.display === "none") {
    verstopt2.style.display = "block";
    info2.style.display = "none";
  } else {
    verstopt2.style.display = "none";
  }
}

shareVerstopt.addEventListener("click", verstoppen);

function verstoppen() {
  if (info2.style.display === "none") {
    info2.style.display = "block";
    verstopt2.style.display = "none";
  } else {
    info2.style.display = "none";
  }
}
