import { Model, hasMany, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  tips: hasMany(),
  votes: hasMany(),
  confirmations: hasMany()
});
