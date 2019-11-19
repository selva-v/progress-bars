import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload) {
    let data = {};
    data.id = "bar-1";
    data.type = "progress-bars";
    data.attributes = {};
    data.attributes.bars = payload.bars;
    data.attributes.buttons = payload.buttons;
    data.attributes.limit = payload.limit;
    payload.data = data;
    return this._super(...arguments);
  }
});
