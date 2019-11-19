import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Helper | gt", function(hooks) {
  setupRenderingTest(hooks);
  test("it renders", async function(assert) {
    assert.expect(2);
    await render(hbs` {{if (gt 10 12) 'over-limit' 'in-limit'}}`);
    assert.equal(this.element.textContent.trim(), "in-limit");
    await render(hbs` {{if (gt 12 10) 'over-limit' 'in-limit'}}`);
    assert.equal(this.element.textContent.trim(), "over-limit");
  });
});
