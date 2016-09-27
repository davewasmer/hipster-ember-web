import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({

  text: attr('string'),

  author: belongsTo('user'),
  tip: belongsTo('tip')

});
