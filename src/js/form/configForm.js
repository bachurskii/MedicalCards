import api from "../api/API.js";
import Modal from "../modal/modal.js";
import filter from "../filter/filter.js";
import Button from "../buttons/button.js";
import card from "../Card/Card.js";

const configFrom = {
  login: {
    buttons: ["submit", "cancel", "demo"],
    inputs: ["email", "password"],
    onSubmit: async (event) => {
      event.preventDefault();
      const form = event.target;
      const inputs = form.querySelectorAll("input");
      const formData = {};
      inputs.forEach((input) => {
        formData[input.name] = input.value;
      });
      const token = await api.login(formData);
      const span = document.createElement("span");

      if (token === "Incorrect username or password") {
        span.textContent = token;
        span.className = "text-red-600 absolute top-0 left-0 ";
        form.prepend(span);
        return;
      }
      if (token) {
        const modal = new Modal();
        modal.removeModal(event);
        const buttonLogin = document.getElementById("login");
        buttonLogin.remove();
        const button = new Button();
        const btnCreateCard = button.render("createBtn");
        const parrentCard = document.querySelector("#header-wrapper");
        parrentCard.appendChild(btnCreateCard);
        const filterSearch = filter.renderFilter("filterCard");

        parrentCard.after(filterSearch);

        const idDiv = document.getElementById("loginMain");
        idDiv.remove();
        const data = await api.getData();
        card.modifyData(data);
      }
    },
    className: "flex flex-col gap-6 relative pt-8 mt-1 items-center",
  },
  createModal: {
    buttons: ["submit", "cancel"],
    inputs: ["age", "name", "title", "dateVisit"],
    textArea: ["description"],
    select: ["priority", "doctor"],
    onSubmit: async (event) => {
      event.preventDefault();
      const target = event.target;
      const inputs = document.querySelectorAll("input");
      const textArea = document.querySelectorAll("textarea");
      const select = document.querySelectorAll("select");
      const formData = {};
      inputs.forEach((input) => {
        formData[input.name] = input.value;
      });
      textArea.forEach((text) => {
        formData[text.name] = text.value;
      });
      select.forEach((elem) => {
        formData[elem.name] = elem.value;
      });
      const data = await api.createCard(formData);
      if (data) {
        const modal = new Modal();
        modal.removeModal(event);
        const newCard = card.renderCard(data);
        const cards = document.getElementById("cards");
        const p = cards.querySelector("p");
        if (p) {
          p.remove();
        }
        cards.append(newCard);
      }
    },

    className: "flex flex-col gap-6 relative pt-8 mt-1",
  },
  updateCard: {
    buttons: ["submit", "cancel"],
    inputs: ["age", "name", "title", "dateVisit"],
    textArea: ["description"],
    select: ["urgency", "doctor"],
    onSubmit: async (id, event) => {
      event.preventDefault();
      const target = event.target;
      const inputs = document.querySelectorAll("input");
      const textArea = document.querySelectorAll("textarea");
      const select = document.querySelectorAll("select");
      const formData = {};
      inputs.forEach((input) => {
        formData[input.name] = input.value;
      });
      textArea.forEach((text) => {
        formData[text.name] = text.value;
      });
      select.forEach((elem) => {
        formData[elem.name] = elem.value;
      });
      const data = await api.updateData(formData, id);
      if (data) {
        const modal = new Modal();
        modal.removeModal(event);
        card.updateCard(data);
      }
    },

    className: "flex flex-col gap-6 relative pt-8 mt-1",
  },
  createDentist: {
    inputs: ["lastDateVisit", "allergicToAnestesia"],

    // textArea: ["description"],
  },
  createTerapevt: {
    inputs: ["bp"],
    // textArea: ["description"],
  },
  createCardiolog: {
    inputs: ["recentDiseasses", "bp", "weight"],
    // textArea: ["description"],
  },
};
export default configFrom;
