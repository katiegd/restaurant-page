import "./style.css";
import "./menustyle.css";
import "./about.css";
import "./reserve.css";
import juniper from "./assets/juniper.svg";
import showMenu from "./menu";
import loadHome from "./home";
import showAbout from "./about";
import showReserve from "./reserve";

const juniperLogo = document.querySelector("#logo");
juniperLogo.src = juniper;
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");
const reserveBtn = document.querySelector("#reserve");
const mainDiv = document.querySelector("#content");

homeBtn.addEventListener("click", () => {
  clearPage();
  loadHome();
});

menuBtn.addEventListener("click", () => {
  clearPage();
  showMenu();
});

aboutBtn.addEventListener("click", () => {
  clearPage();
  showAbout();
});

reserveBtn.addEventListener("click", () => {
  clearPage();
  showReserve();
});

function clearPage() {
  mainDiv.innerHTML = "";
}

showReserve();
