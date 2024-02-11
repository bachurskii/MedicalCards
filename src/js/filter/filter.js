import { filterConfig } from "./configFilter.js";
import Button from "../buttons/button.js";
import Select from "../select/select.js";
import Input from "../inputs/inputs.js";
class Filter {
  constructor() {
    this.filter = null;
  }

  renderFilter(id) {
    const filter = document.createElement("div");

    filter.classList = "flex justify-center m-2.5 ";
    const { inputs, selects } = filterConfig[id];
    inputs.forEach((elem) => {
      const input = new Input();
      filter.append(input.render(elem));
    });
    selects.forEach((elem) => {
      const select = new Select();
      filter.append(select.renderSelect(elem));
    });
    const button = new Button();
    filter.append(button.render("resetFilter"));
    this.filter = filter;

    return this.filter;
  }
}
const filter = new Filter();
export default filter;
