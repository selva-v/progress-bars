import DS from "ember-data";
const { Model } = DS;

export default Model.extend({
  bars: DS.attr(""),
  buttons: DS.attr(""),
  limit: DS.attr("number")
});
