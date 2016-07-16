import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  confirmer: belongsTo('user'),
  tip: belongsTo()
});
