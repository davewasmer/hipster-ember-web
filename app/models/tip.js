import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

const { filterBy, equal } = Ember.computed;
const computed = Ember.computed;

export default Model.extend({

  number: attr('number'),
  title: attr('string'),
  description: attr('string'),
  link: attr('string'),
  status: attr('string'),

  author: belongsTo('user'),
  votes: hasMany('vote'),
  comments: hasMany('comment'),

  isPending: equal('status', 'pending'),
  isApproved: equal('status', 'approved'),
  isRejected: equal('status', 'rejected'),

  upVotes: filterBy('votes', 'direction', 'up'),
  downVotes: filterBy('votes', 'direction', 'down'),
  voteSpread: computed('upVotes.length', 'downVotes.length', function() {
    return this.get('upVotes.length') - this.get('downVotes.length');
  })

});
