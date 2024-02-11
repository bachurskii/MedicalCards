import Button from "../buttons/button.js";
import Input from "../inputs/inputs.js";
import configForm from "./configForm.js";
import Select from "../select/select.js";
import TextArea from "../textArea/TextArea.js";
import card from "../Card/Card.js";

class Form {
  constructor() {
    this.form = null;
  }

  renderForm(id, cardId) {
    const { buttons, inputs, textArea, onSubmit, className, select } =
      configForm[id];
    const elem = card.card[cardId];
    const form = document.createElement("form");
    form.id = id;
    if (cardId) {
      form.addEventListener("submit", onSubmit.bind(this, cardId));
    } else {
      form.addEventListener("submit", onSubmit.bind(this));
    }

    inputs.forEach((input) => {
      const newInput = new Input();
      if (elem) {
        form.appendChild(newInput.render(input, elem[input]));
      } else {
        form.appendChild(newInput.render(input));
      }
    });
    textArea?.forEach((text) => {
      const newTextArea = new TextArea();

      if (elem) {
        form.appendChild(newTextArea.renderTextArea(text, elem[text]));
      } else {
        form.appendChild(newTextArea.renderTextArea(text));
      }
    });
    select?.forEach((item) => {
      const newSelect = new Select();
      if (elem) {
        form.appendChild(newSelect.renderSelect(item, elem[item]));
      } else {
        form.appendChild(newSelect.renderSelect(item));
      }
    });

    buttons.forEach((button) => {
      const newButton = new Button();
      form.appendChild(newButton.render(button));
    });
    if (elem?.doctor === "Dentist") {
      const elemDetist = this.renderDandistForm("createDentist", elem);
      form.querySelector("#doctor").after(elemDetist);
    }
    if (elem?.doctor === "Cardiologist") {
      const elemCardio = this.renderCardiologistForm("createCardiolog", elem);
      form.querySelector("#doctor").after(elemCardio);
    }
    if (elem?.doctor === "Therapist") {
      const elemTheraphist = this.renderTherapistForm("createTerapevt", elem);
      form.querySelector("#doctor").after(elemTheraphist);
    }
    form.className = className;

    this.form = form;

    return this.form;
  }
  renderDandistForm(id, elem) {
    const div = document.createElement("div");
    div.id = "doctor-wrapper";
    div.className = "flex gap-3";
    const { inputs } = configForm[id];
    inputs.forEach((input) => {
      const dantistInput = new Input();
      if (elem) {
        div.appendChild(dantistInput.render(input, elem[input]));
      } else {
        div.appendChild(dantistInput.render(input));
      }
    });
    // textArea.forEach((text) => {
    //   const textArea = new TextArea();
    //   div.appendChild(textArea.renderTextArea(text));
    // });
    return div;
  }
  renderTherapistForm(id, elem) {
    const div = document.createElement("div");
    div.id = "doctor-wrapper";
    div.className = "flex gap-3";
    const { inputs } = configForm[id];

    inputs.forEach((input) => {
      const therapeftInput = new Input();

      if (elem) {
        div.appendChild(therapeftInput.render(input, elem[input]));
      } else {
        div.appendChild(therapeftInput.render(input));
      }
    });
    // textArea.forEach((text) => {
    //   const textArea = new TextArea();
    //   div.appendChild(textArea.renderTextArea(text));
    // });

    return div;
  }
  renderCardiologistForm(id, elem) {
    const div = document.createElement("div");
    div.id = "doctor-wrapper";
    div.className = "flex gap-3";
    const { inputs } = configForm[id];

    inputs.forEach((input) => {
      const cardiologInput = new Input();
      if (elem) {
        div.appendChild(cardiologInput.render(input, elem[input]));
      } else {
        div.appendChild(cardiologInput.render(input));
      }
    });
    // textArea.forEach((text) => {
    //   const textArea = new TextArea();
    //   div.appendChild(textArea.renderTextArea(text));
    // });
    return div;
  }
}
export default Form;
