import { configTextArea } from "./configTextArea.js";
class TextArea {
  constructor() {
    this.textarea = null;
  }
  renderTextArea(id, value = "") {
    const { placeholder, name, className } = configTextArea[id];
    const textArea = document.createElement("textarea");
    textArea.placeholder = placeholder;
    textArea.name = name;
    textArea.className = className;
    textArea.value = value;

    this.textarea = textArea;

    return this.textarea;
  }
}
export default TextArea;
