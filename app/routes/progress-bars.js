import Route from "@ember/routing/route";
import { set } from "@ember/object";
import { inject as service } from "@ember/service";
import { A } from "@ember/array";

export default Route.extend({
  store: service(),
  model() {
    return this.get("store").findRecord("progress-bar", "1");
  },
  afterModel(model) {
    let barArray = A();

    model.get("bars").forEach((bar, index) => {
      let barObj = {};
      barObj.value = bar;
      barObj.width = parseInt((bar / model.get("limit")) * 100);
      barObj.order = index + 1;
      barArray.push(barObj);
    });
    set(model, "barArray", barArray);
    set(model, "buttonArray", A(model.get("buttons")));
  }
});
