import card from "../Card/Card.js";
let eventKey = "";

export const configInput = {
  email: {
    type: "email",
    placeholder: "Put email",
    className: "p-2 mb-5 border-2 w-[100%] border-solid border-black",
    name: "email",
  },
  password: {
    type: "password",
    placeholder: "Put password",
    className: "p-2 mb-5 border-2 w-[100%] border-solid border-black",
    name: "password",
  },
  age: {
    type: "number",
    name: "age",
    placeholder: "how old are you?",
    className: "border border-2 border-gray-300",
  },
  weight: {
    name: "weight",
    placeholder: "what is your weight?",
    className: "border border-2 border-gray-300",
  },
  bp: {
    name: "bp",
    placeholder: "what is you bp?",
    className: "border border-2 border-gray-300 ",
  },
  name: {
    name: "name",
    placeholder: "what is your name?",
    className: "border border-2 border-gray-300",
  },
  recentDiseasses: {
    name: "recentDiseasses",
    placeholder: "transferred diseases of the cardiovascular system",
    className: "border border-2 border-gray-300",
  },
  lastDateVisit: {
    type: "date",
    name: "lastDateVisit",
    placeholder: "date of last visit",
    className: "border border-2 border-gray-300",
  },
  allergicToAnestesia: {
    name: "allergicToAnestesia",
    placeholder: "are you allergic to anesthesia?",
    className: "border border-2 border-gray-300  w-72",
  },

  title: {
    name: "title",
    placeholder: "reason of visit",
    className: "border border-2 border-gray-300",
  },
  dateVisit: {
    name: "dataVisit",
    type: "date",
    placeholder: "date of visit",
    className: "border border-2 border-gray-300",
  },
  inputSearch: {
    name: "inputSearch",
    placeholder: "search",
    className: "",

    onchange: function (e) {
      let keyValue = e.target.value;
      // eventKey += e.key;
      const parent = e.target.closest("div");
      const select = parent.querySelectorAll("select");
      const formData = {};
      select.forEach((elem) => {
        formData[elem.name] = elem.value;
      });

      const filteredCard = Object.values(card.card).filter((el) => {
        const today = new Date();
        const dateVisit = new Date(el.dataVisit);

        if (
          formData.urgency === "Choose" &&
          formData.statusOfVisit === "Choose"
        ) {
          return (
            el.name.toLowerCase().startsWith(keyValue.toLowerCase()) ||
            el.title.toLowerCase().startsWith(keyValue.toLowerCase()) ||
            el.doctor.toLowerCase().startsWith(keyValue.toLowerCase()) ||
            el.description.toLowerCase().startsWith(keyValue.toLowerCase())
          );
        }
        if (
          formData.urgency !== "Choose" &&
          formData.statusOfVisit === "Choose" &&
          formData.urgency === el.urgency
        ) {
          return (
            el.name.toLowerCase().startsWith(keyValue.toLowerCase()) ||
            el.title.toLowerCase().startsWith(keyValue.toLowerCase()) ||
            el.doctor.toLowerCase().startsWith(keyValue.toLowerCase()) ||
            el.description.toLowerCase().startsWith(keyValue.toLowerCase())
          );
        }
        if (
          formData.urgency === "Choose" &&
          formData.statusOfVisit !== "Choose" &&
          formData.statusOfVisit === "open" &&
          today < dateVisit
        ) {
          return (
            el.name.toLowerCase().startsWith(keyValue.toLowerCase()) ||
            el.title.toLowerCase().startsWith(keyValue.toLowerCase()) ||
            el.doctor.toLowerCase().startsWith(keyValue.toLowerCase()) ||
            el.description.toLowerCase().startsWith(keyValue.toLowerCase())
          );
        }
        if (
          formData.urgency === "Choose" &&
          formData.statusOfVisit !== "Choose" &&
          formData.statusOfVisit === "done" &&
          today > dateVisit
        ) {
          return (
            el.name.toLowerCase().startsWith(keyValue.toLowerCase()) ||
            el.title.toLowerCase().startsWith(keyValue.toLowerCase()) ||
            el.doctor.toLowerCase().startsWith(keyValue.toLowerCase()) ||
            el.description.toLowerCase().startsWith(keyValue.toLowerCase())
          );
        }
        if (
          formData.urgency !== "Choose" &&
          formData.statusOfVisit !== "Choose"
        ) {
          if (formData.statusOfVisit === "done" && today > dateVisit) {
            return (
              (formData.urgency === el.urgency &&
                el.name.toLowerCase().startsWith(keyValue.toLowerCase())) ||
              el.title.toLowerCase().startsWith(keyValue.toLowerCase()) ||
              el.doctor.toLowerCase().startsWith(keyValue.toLowerCase()) ||
              el.description.toLowerCase().startsWith(keyValue.toLowerCase())
            );
          }
          if (formData.statusOfVisit === "open" && today < dateVisit) {
            return (
              (formData.urgency === el.urgency &&
                el.name.toLowerCase().startsWith(keyValue.toLowerCase())) ||
              el.title.toLowerCase().startsWith(keyValue.toLowerCase()) ||
              el.doctor.toLowerCase().startsWith(keyValue.toLowerCase()) ||
              el.description.toLowerCase().startsWith(keyValue.toLowerCase())
            );
          }
        }
      });

      card.renderCardList(filteredCard);
    },
  },
};
