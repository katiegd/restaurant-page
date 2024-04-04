import "./style.css";
import "./menustyle.css";
import juniper from "./assets/juniper.svg";
import showMenu from "./menu";
import loadHome from "./home";

const juniperLogo = document.querySelector("#logo");
juniperLogo.src = juniper;
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");
const mainDiv = document.querySelector("#content");

homeBtn.addEventListener("click", () => {
  clearPage();
  loadHome();
});

menuBtn.addEventListener("click", () => {
  showMenu();
});

aboutBtn.addEventListener("click", () => {
  alert("boop! about us!");
});

function clearPage() {
  mainDiv.innerHTML = "";
}
loadHome();
