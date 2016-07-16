import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({

  tip: belongsTo('vote', { async: true }),
  voter: belongsTo('user', { async: true })

});
