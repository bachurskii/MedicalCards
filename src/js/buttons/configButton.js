import Modal from "../modal/modal.js";
import api from "../api/API.js";
import card from "../Card/Card.js";
const modal = new Modal();

export const buttonConfig = {
  login: {
    type: "button",
    text: "Login",
    onClick: () => {
      modal.renderModal("login");
    },
    className:
      "p-3 text-white bg-slate-600 rounded-xl hover:bg-blue-600 font-medium py-2 px-4 rounded",
  },

  submit: {
    type: "submit",
    text: "Submit",
    className:
      "btn btn-Submit p-3 text-white bg-slate-600 rounded-xl hover:bg-blue-600 font-medium py-2 px-4 rounded w-28",
  },
  cancel: {
    type: "button",
    text: "Cancel",
    className:
      "btn btn-Cancel p-3 text-white bg-slate-600 rounded-xl hover:bg-blue-600 font-medium py-2 px-4 rounded w-28",
    onClick: (e) => {
      modal.removeModal(e);
    },
  },
  demo: {
    type: "button",
    text: "Demo user",
    className:
      "btn btn-Demo p-3 text-white bg-slate-600 rounded-xl hover:bg-blue-600 font-medium py-2 px-4 rounded w-28",
    onClick: () => {
      const email = document.querySelector("#email");
      const password = document.querySelector("#password");
      email.value = "demousern34@gmail.com";
      password.value = "demouser12345";
    },
  },
  createBtn: {
    type: "button",
    text: "Creacte Card",
    className:
      "p-3 text-white bg-slate-600 rounded-xl hover:bg-blue-600 font-medium py-2 px-4 rounded",
    onClick: () => {
      modal.renderModal("createModal");
    },
  },
  deleteBtn: {
    type: "button",
    text: "Delete card",
    className:
      "p-3 text-white bg-slate-600 rounded-xl hover:bg-blue-600 font-medium py-2 px-4 rounded mr-2.5",
    onClick: (e) => {
      const id = e.target.closest("li").id;

      modal.renderModal("deleteCard", `#${id}`);
    },
  },
  confirmDeleteBtn: {
    type: "button",
    text: "Delete a card",
    className:
      "p-3 text-white bg-slate-600 rounded-xl hover:bg-blue-600 font-medium py-2 px-4 rounded",
    onClick: async (e) => {
      const id = e.target.closest("#modal-content").dataset.card;
      const idForDelete = id.split("_");
      const deletedId = idForDelete[idForDelete.length - 1];
      const res = await api.deleteData(deletedId);

      if (+res === +deletedId) {
        modal.removeModal(e);
        card.deleteCard(res, id);
        Notiflix.Notify.success("Successeful deleted");
      }
    },
  },
  cancelDeleteBtn: {
    type: "button",
    text: "Cancel",
    className:
      "p-3 text-white bg-slate-600 rounded-xl hover:bg-blue-600 font-medium py-2 px-4 rounded ml-2.5",
    onClick: (e) => {
      modal.removeModal(e);
    },
  },
  updateBtn: {
    type: "button",
    text: "update a card",
    className:
      "p-3 text-white bg-slate-600 rounded-xl hover:bg-blue-600 font-medium py-2 px-4 rounded mr-2.5",
    onClick: (e) => {
      const list = e.target.closest("li").id;
      let index = list.indexOf("_");
      const id = +list.slice(index + 1);
      modal.renderModal("updateCard", id);
    },
  },
  showMoreBtn: {
    type: "button",
    text: "show more information",

    className:
      "p-3 text-white bg-slate-600 rounded-xl hover:bg-blue-600 font-medium py-2 px-4 rounded",
    onClick: function (e) {
      e.preventDefault();
      const idList = e.target.closest("li");
      const hiden = idList.querySelector("#show-more");
      hiden.classList.toggle("hiden");

      if (e.target.textContent === "show more information") {
        e.target.textContent = "show less information";
      } else {
        e.target.textContent = "show more information";
      }
    },
  },
  resetFilter: {
    type: "button",
    text: "Reset filter",
    className: "",
    onClick: (e) => {
      const selectObj = {
        urgency: "Choose",
        statusOfVisit: "Choose",
      };
      e.preventDefault();
      const parrent = e.target.closest("div");
      const inputs = parrent.querySelectorAll("input");
      const selects = parrent.querySelectorAll("select");
      inputs.forEach((input) => {
        input.value = "";
      });
      selects.forEach((select) => {
        select.value = selectObj[select.name];
      });
      card.renderCardList(Object.values(card.card));
    },
  },
};
