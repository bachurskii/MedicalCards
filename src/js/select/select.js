import { configSelect } from "./configSelect.js";

class Select {
  constructor() {
    this.select = null;
  }

  renderSelect(id, value) {
    const { name, opitonValue, eventListenenr } = configSelect[id];
    const select = document.createElement("select");
    select.name = name;
    select.id = name;
    select.addEventListener("change", eventListenenr);
    select.insertAdjacentHTML(
      "beforeend",
      `
    ${opitonValue
      .map((item, i) => {
        if (!i) {
          return `
     <option disabled selected value=${item}>${item}</option>
    `;
        }
        return `
     <option value=${item}>${item}</option>
    `;
      })
      .join("")}

    `
    );
    if (value) {
      select.value = value;
    }
    this.select = select;
    return this.select;
  }
}

export default Select;
