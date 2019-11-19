import { module, test } from "qunit";
import { setupTest } from "ember-qunit";
import EmberObject from "@ember/object";

module("Unit | Controller | progress-bars", function(hooks) {
  setupTest(hooks);
  hooks.beforeEach(function() {
    this.controller = this.owner.lookup("controller:progress-bars");
    this.route = this.owner.lookup("route:progress-bars");
  });
  test("barSelection functionality", function(assert) {
    assert.expect(1);
    this.controller.send("barSelection", 1);
    assert.equal(this.controller.selectedbar, 1);
  });
  test("updateBarValue functionality", function(assert) {
    assert.expect(2);
    this.controller.selectedbar = 0;
    this.controller.model = EmberObject.create({
      barArray: [
        {
          value: 20,
          width: 15
        }
      ],
      limit: 200
    });
    this.controller.send("updateBarValue", 30);
    assert.equal(this.controller.model.barArray[0].value, 50);
    assert.equal(this.controller.model.barArray[0].width, 25);
  });
});
