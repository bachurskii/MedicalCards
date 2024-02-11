import api from "./api/API.js";
import Button from "./buttons/button.js";
import Header from "./header/header.js";
import card from "./Card/Card.js";
import Main from "./header/main/main.js";
import filter from "./filter/filter.js";
const header = new Header();
const button = new Button();
const main = new Main();
const root = document.getElementById("root");
// const api = new API();
const init = async () => {
  root.prepend(header.renderHeader());
  const token = api.getToket();
  if (!token) {
    root.appendChild(main.renderMain());
    const btnLogin = button.render("login");
    const parrent = document.querySelector("#header-wrapper");
    parrent.appendChild(btnLogin);
  }
  if (token) {
    const btnCreateCard = button.render("createBtn");
    const parrentCard = document.querySelector("#header-wrapper");
    parrentCard.appendChild(btnCreateCard);
    const cards = await api.getData();
    parrentCard.after(filter.renderFilter("filterCard"));
    card.renderCardList(cards);
  }
};
init();
