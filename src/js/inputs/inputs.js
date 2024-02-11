import { configInput } from "./configInput.js";
class Input {
  constructor() {
    this.input = null;
  }

  render(id, value = "") {
    const { type, placeholder, className, name, onchange } = configInput[id];
    const input = document.createElement("input");
    input.id = name;
    input.type = type || "text";
    input.required = true;
    input.placeholder = placeholder;
    input.className = className;
    input.name = name;
    input.value = value;
    input.addEventListener("keyup", onchange);

    this.input = input;
    return this.input;
  }
}

export default Input;
