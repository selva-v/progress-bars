import { module, test } from "qunit";
import { setupTest } from "ember-qunit";
import EmberObject from "@ember/object";

module("Unit | Route | progress-bars", function(hooks) {
  setupTest(hooks);
  test("afterModel functionality", function(assert) {
    this.route = this.owner.lookup("route:progress-bars");
    assert.expect(5);
    let model = EmberObject.create({
      bars: [54, 78],
      buttons: [8, 48, -49, -17],
      limit: 180
    });
    this.route.afterModel(model);
    assert.equal(model.get("barArray")[0].width, 30);
    assert.equal(model.get("barArray")[1].width, 43.333333333333336);
    assert.equal(model.get("barArray")[0].value, 54);
    assert.equal(model.get("barArray")[1].value, 78);
    assert.equal(model.get("buttons"), model.get("buttonArray"));
  });
});
