import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  tips: hasMany(),
  votes: hasMany(),
  confirmations: hasMany()
});
