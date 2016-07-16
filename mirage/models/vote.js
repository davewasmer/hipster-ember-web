import { Model, hasMany, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  voter: belongsTo('user'),
  tip: belongsTo()
});
