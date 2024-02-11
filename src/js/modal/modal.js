import { conFigModal } from "./configModal.js";
import Form from "../form/form.js";
import Button from "../buttons/button.js";

class Modal {
  constructor() {
    this.modal = null;
  }

  renderModal(id, cardId) {
    const { title, text, className, isForm } = conFigModal[id];
    const modal = document.createElement("div");

    const parrent = document.querySelector("#root");

    modal.className = className;
    modal.innerHTML = `
    
  <div class="fixed  z-1 inset-x-0 top-0 w-full h-full  overflow-auto bg-black/50">
    <div id="modal-content" class="bg-white p-20 border-solid border-px  border-zinc-600 w-10/12 mx-auto my-[1%]">
      <span class="w3-button w3-display-topright text-gray-700 text-2xl">&times;</span>
      <h2 class="text-xl md:text-2xl font-semibold text-gray-800 my-2.5">${title}</h2>
      <p class ="text-gray-600 mt-2" >${text}</p>
    </div>
  </div>

    `;
    parrent.appendChild(modal);
    const modalContent = document.getElementById("modal-content");
    modalContent.dataset.card = cardId;

    if (isForm) {
      const form = new Form();
      modalContent.appendChild(form.renderForm(id, cardId));
    }
    if (!isForm) {
      const button = new Button();
      const confirmDelete = button.render("confirmDeleteBtn");
      const cancelDelete = button.render("cancelDeleteBtn");
      modalContent.append(confirmDelete, cancelDelete);
    }
    const closeBtn = modal.querySelector("span");
    closeBtn.addEventListener("click", this.removeModal.bind(this));
    this.modal = modal;
    return this.modal;
  }
  removeModal(event) {
    const modal = event.target.closest(".modal");
    modal.remove();
    this.modal = null;
    return this.modal;
  }
}
export default Modal;
