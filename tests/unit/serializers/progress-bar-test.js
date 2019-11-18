import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | progress bar', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('progress-bar');

    assert.ok(serializer);
  });

  test('it serializes records', function(assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('progress-bar', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
