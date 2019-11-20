import Controller from "@ember/controller";
import { set } from "@ember/object";

export default Controller.extend({
  selectedbar: 0,
  actions: {
    barSelection(value) {
      this.set("selectedbar", value);
    },
    updateBarValue(value) {
      let selectedBar = this.model.get("barArray")[parseInt(this.selectedbar)];
      let newVal = selectedBar.value + value;
      let computedWidth = 0;
      if (newVal >= 0) {
        computedWidth = parseInt((newVal / this.model.get("limit")) * 100);
      } else {
        newVal = 0;
      }
      set(selectedBar, "value", newVal);
      set(selectedBar, "width", computedWidth);
    }
  }
});
