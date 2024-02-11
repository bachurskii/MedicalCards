import Button from "../buttons/button.js";

class Card {
  constructor() {
    this.filtered = [];
    // this.parrent = document.getElementById("root");
    this.ulList = null;
    this.card = {};
  }
  modifyData(cards) {
    const updateData = cards.reduce((accum, currentValue) => {
      accum[currentValue.id] = currentValue;
      return accum;
    }, {});
    this.card = updateData;
    this.renderCardList(cards);
  }
  renderCardList(cards) {
    const main = document.getElementById("main");
    main.innerHTML = "";
    const div = document.createElement("div");
    const ulList = document.createElement("ul");
    ulList.style.display = "grid";
    ulList.style.gridTemplateColumns = "repeat(2, 1fr)";
    ulList.style.listStyle = "none";
    ulList.style.padding = "0";
    ulList.style.margin = "0";
    ulList.style.gap = "10px";
    ulList.id = "cards";
    div.append(ulList);
    this.ulList = ulList;
    if (!cards.length) {
      const emptyContainer = document.createElement("div");
      emptyContainer.classList.add(
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "text-center",
        "py-10"
      );

      const image = document.createElement("img");
      image.src =
        "https://st3.depositphotos.com/3356953/12574/v/600/depositphotos_125748560-stock-illustration-smiley-doctor-icon.jpg";
      image.alt = "not have cards";
      image.classList.add("w-24", "h-24", "mb-4");
      const notCards = document.createElement("p");
      notCards.textContent = "You dont have a cards!";
      notCards.classList.add("text-lg", "font-bold", "mb-4");
      emptyContainer.append(notCards, image);

      ulList.append(emptyContainer);
      main.appendChild(div);
      // this.parrent.append(main);
      return false;
    }

    cards.forEach((card) => {
      ulList.append(this.renderCard(card));
    });

    main.appendChild(div);

    // this.parrent.append(main);
    // return main;
  }
  renderCard(card) {
    if (!(card.id in this.card)) {
      this.card[card.id] = card;
    }

    const button = new Button();
    const list = document.createElement("li");
    list.id = `id_${card.id}`;
    list.classList.add("bg-white", "rounded-lg", "shadow", "p-6", "mb-4");
    const deleteBtn = button.render(
      "deleteBtn",
      `
    #${list.id}
    `
    );
    const updateBtn = button.render("updateBtn");
    const showMore = button.render("showMoreBtn");
    list.innerHTML = `
    <h3 class="text-lg font-semibold mb-2"> Name: ${card.name}</h3>
    <p class="mb-1"> Age :${card.age}</p>
    <h3 class="text-lg font-semibold mb-2">Title :${card.title}</h3>
    <p class="mb-1"> Urgency :${card.urgency}</p>
    <p class="mb-1"> Description :${card.description}</p>
    <p  class="mb-4"> Doctor :${card.doctor}<p>
    <div id='show-more' class= 'hiden mb-5'>
    ${
      card.allergicToAnestesia
        ? `<p>Alergia:${card.allergicToAnestesia}</p>`
        : ""
    }
     ${card.lastDateVisit ? `<p>Last date visit:${card.lastDateVisit}</p>` : ""}
      ${
        card.recentDiseasses
          ? `<p>Recent diseasses:${card.recentDiseasses}</p>`
          : ""
      }
       ${card.bp ? `<p>Your bp:${card.bp}</p>` : ""}
        ${card.weight ? `<p>Your weight:${card.weight}</p>` : ""}
    </div>
    `;
    list.append(deleteBtn, updateBtn, showMore);

    return list;
  }
  updateCard(data) {
    this.card[data.id] = data;
    const id = `#id_${data.id}`;
    const list = document.querySelector(id);
    const updated = this.renderCard(data);
    list.replaceWith(updated);
  }

  deleteCard(id, liId) {
    delete this.card[id];
    const li = document.querySelector(liId);
    li.remove();
    const list = Object.keys(this.card).length;
    if (!list) {
      const emptyContainer = document.createElement("div");
      emptyContainer.classList.add(
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "text-center",
        "py-10"
      );

      const image = document.createElement("img");
      image.src =
        "https://st3.depositphotos.com/3356953/12574/v/600/depositphotos_125748560-stock-illustration-smiley-doctor-icon.jpg";
      image.alt = "not have cards";
      image.classList.add("w-24", "h-24", "mb-4");
      const notCards = document.createElement("p");
      notCards.textContent = "You dont have a cards!";
      notCards.classList.add("text-lg", "font-bold", "mb-4");
      emptyContainer.append(notCards, image);

      ulList.append(emptyContainer);
    }
  }
}
const card = new Card();
export default card;
