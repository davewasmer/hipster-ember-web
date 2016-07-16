import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

const { filterBy } = Ember.computed;

export default Model.extend({

  number: attr('number'),
  title: attr('string'),
  description: attr('string'),
  link: attr('string'),

  author: belongsTo('user', { async: true }),
  votes: hasMany('vote', { async: true }),
  confirmations: hasMany('confirmation', { async: true }),

  upVotes: filterBy('votes', 'direction', 'up'),
  downVotes: filterBy('votes', 'direction', 'down')

});
