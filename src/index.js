import "./style.css";
import juniper from "./assets/juniper.svg";

const juniperLogo = document.querySelector("#logo");
juniperLogo.src = juniper;
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

homeBtn.addEventListener("click", () => {
  alert("Hello! You did it!");
});

menuBtn.addEventListener("click", () => {
  alert("Beep! Here's the menu");
});

aboutBtn.addEventListener("click", () => {
  alert("boop! about us!");
});
