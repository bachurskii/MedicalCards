import { buttonConfig } from "./configButton.js";
class Button {
  constructor() {
    this.button = null;
  }

  render(id, dataAtribute) {
    const { className, type, text, onClick } = buttonConfig[id];
    const button = document.createElement("button");
    button.className = className;
    button.type = type;
    button.id = id;
    button.textContent = text;
    if (dataAtribute) {
      button.dataset.li = dataAtribute;
    }
    button.addEventListener("click", onClick);
    this.button = button;
    return this.button;
  }
}
export default Button;
