import Form from "../form/form.js";
import card from "../Card/Card.js";
export const configSelect = {
  doctor: {
    name: "doctor",
    opitonValue: ["Choose the doctor", "Cardiologist", "Dentist", "Therapist"],
    eventListenenr: (e) => {
      const form = new Form();
      const doctorWrapper = document.querySelector("#doctor-wrapper");

      if (doctorWrapper) {
        doctorWrapper.remove();
      }
      if (e.target.value === "Cardiologist") {
        const elem = form.renderCardiologistForm("createCardiolog");
        e.target.after(elem);
      }
      if (e.target.value === "Dentist") {
        const elem = form.renderDandistForm("createDentist");
        e.target.after(elem);
      }
      if (e.target.value === "Therapist") {
        const elem = form.renderTherapistForm("createTerapevt");
        e.target.after(elem);
      }
    },
  },
  priority: {
    name: "urgency",
    opitonValue: ["Choose priority", "normal", "heigh", "low"],
  },
  urgency: {
    name: "urgency",
    opitonValue: ["Choose priority", "normal", "heigh", "low"],

    eventListenenr: (e) => {
      const cardList = Object.values(card.card);
      const target = e.target;
      const parent = target.closest("div");
      const inputs = parent.querySelectorAll("input");
      const selects = parent.querySelectorAll("select");
      let formData = {};
      inputs.forEach((input) => {
        formData[input.name] = input.value;
      });
      selects.forEach((select) => {
        formData[select.name] = select.value;
      });
      const filteredCard = cardList.filter((elem) => {
        const today = new Date();
        const dateVisit = new Date(elem.dataVisit);
        if (formData.statusOfVisit === "Choose" && !formData.inputSearch) {
          return elem.urgency === target.value;
        }
        if (formData.statusOfVisit !== "Choose" && !formData.inputSearch) {
          if (formData.statusOfVisit === "done") {
            return elem.urgency === target.value && dateVisit < today;
          }
          if (formData.statusOfVisit === "open") {
            return elem.urgency === target.value && dateVisit > today;
          }
        }
        if (formData.statusOfVisit !== "Choose" && formData.inputSearch) {
          if (
            formData.statusOfVisit === "done" &&
            dateVisit < today &&
            elem.urgency === target.value
          ) {
            return (
              elem.name
                .toLowerCase()
                .startsWith(formData.inputSearch.toLowerCase()) ||
              elem.title
                .toLowerCase()
                .startsWith(formData.inputSearch.toLowerCase()) ||
              elem.doctor
                .toLowerCase()
                .startsWith(formData.inputSearch.toLowerCase()) ||
              elem.description
                .toLowerCase()
                .startsWith(formData.inputSearch.toLowerCase())
            );
          }
          if (
            formData.statusOfVisit === "open" &&
            dateVisit > today &&
            elem.urgency === target.value
          ) {
            return (
              elem.name
                .toLowerCase()
                .startsWith(formData.inputSearch.toLowerCase()) ||
              elem.title
                .toLowerCase()
                .startsWith(formData.inputSearch.toLowerCase()) ||
              elem.doctor
                .toLowerCase()
                .startsWith(formData.inputSearch.toLowerCase()) ||
              elem.description
                .toLowerCase()
                .startsWith(formData.inputSearch.toLowerCase())
            );
          }
        }
        if (formData.statusOfVisit === "Choose" && formData.inputSearch) {
          return (
            (elem.name
              .toLowerCase()
              .startsWith(formData.inputSearch.toLowerCase()) ||
              elem.title
                .toLowerCase()
                .startsWith(formData.inputSearch.toLowerCase()) ||
              elem.doctor
                .toLowerCase()
                .startsWith(formData.inputSearch.toLowerCase()) ||
              elem.description
                .toLowerCase()
                .startsWith(formData.inputSearch.toLowerCase())) &&
            elem.urgency === target.value
          );
        }
      });

      card.renderCardList(filteredCard);
    },
  },
  statusOfVisit: {
    name: "statusOfVisit",
    opitonValue: ["Choose status", "open", "done"],
    eventListenenr: (e) => {
      let formData = {};
      const target = e.target;
      const parent = target.closest("div");
      const inputs = parent.querySelectorAll("input");
      const select = parent.querySelectorAll("select");
      inputs.forEach((input) => {
        formData[input.name] = input.value;
      });
      select.forEach((select) => {
        formData[select.name] = select.value;
      });
      const cardList = Object.values(card.card);

      const filteredCard = cardList.filter((elem) => {
        const today = new Date();
        const dateVisit = new Date(elem.dataVisit);
        if (!formData.inputSearch && formData.urgency === "Choose") {
          if (formData.statusOfVisit === "done") {
            return today > dateVisit;
          }
          if (formData.statusOfVisit === "open") {
            return today < dateVisit;
          }
        }
        if (!formData.inputSearch && formData.urgency !== "Choose") {
          if (formData.statusOfVisit === "done") {
            return today > dateVisit && elem.urgency === formData.urgency;
          }
          if (formData.statusOfVisit === "open") {
            return today < dateVisit && elem.urgency === formData.urgency;
          }
        }

        if (formData.inputSearch && formData.urgency === "Choose") {
          if (formData.statusOfVisit === "done" && today > dateVisit) {
            return (
              elem.name
                .toLowerCase()
                .startsWith(formData.inputSearch.toLowerCase()) ||
              elem.title
                .toLowerCase()
                .startsWith(formData.inputSearch.toLowerCase()) ||
              elem.doctor
                .toLowerCase()
                .startsWith(formData.inputSearch.toLowerCase()) ||
              elem.description
                .toLowerCase()
                .startsWith(formData.inputSearch.toLowerCase())
            );
          }
          if (formData.statusOfVisit === "open" && today < dateVisit) {
            return (
              elem.name
                .toLowerCase()
                .startsWith(formData.inputSearch.toLowerCase()) ||
              elem.title
                .toLowerCase()
                .startsWith(formData.inputSearch.toLowerCase()) ||
              elem.doctor
                .toLowerCase()
                .startsWith(formData.inputSearch.toLowerCase()) ||
              elem.description
                .toLowerCase()
                .startsWith(formData.inputSearch.toLowerCase())
            );
          }
        }

        if (formData.statusOfVisit !== "Choose" && formData.inputSearch) {
          if (
            formData.statusOfVisit === "done" &&
            dateVisit < today &&
            elem.urgency === formData.urgency
          ) {
            return (
              elem.name
                .toLowerCase()
                .startsWith(formData.inputSearch.toLowerCase()) ||
              elem.title
                .toLowerCase()
                .startsWith(formData.inputSearch.toLowerCase()) ||
              elem.doctor
                .toLowerCase()
                .startsWith(formData.inputSearch.toLowerCase()) ||
              elem.description
                .toLowerCase()
                .startsWith(formData.inputSearch.toLowerCase())
            );
          }
          if (
            formData.statusOfVisit === "open" &&
            dateVisit > today &&
            elem.urgency === formData.urgency
          ) {
            return (
              elem.name
                .toLowerCase()
                .startsWith(formData.inputSearch.toLowerCase()) ||
              elem.title
                .toLowerCase()
                .startsWith(formData.inputSearch.toLowerCase()) ||
              elem.doctor
                .toLowerCase()
                .startsWith(formData.inputSearch.toLowerCase()) ||
              elem.description
                .toLowerCase()
                .startsWith(formData.inputSearch.toLowerCase())
            );
          }
        }
      });

      card.renderCardList(filteredCard);
    },
  },
};
