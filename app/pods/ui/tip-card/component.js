import Ember from 'ember';

const { service } = Ember.inject;
const computed = Ember.computed;

export default Ember.Component.extend({

  store: service(),
  session: service(),

  classNames: [ 'tip-card' ],
  classNameBindings: [ 'showDetails:show-details' ],

  votedUp: computed('tip.upVotes.[]', function() {
    return this.get('tip.upVotes').findBy('voter.id', this.get('session.currentUser.id'));
  }),

  votedDown: computed('tip.downVotes.[]', function() {
    return this.get('tip.downVotes').findBy('voter.id', this.get('session.currentUser.id'));
  }),

  actions: {

    voteUp() {
      if (this.get('votedUp')) {
        return this.get('votedUp').destroyRecord();
      }
      if (this.get('votedDown')) {
        let vote = this.get('votedDown');
        vote.set('direction', 'up');
        return vote.save();
      }
      this.get('store').createRecord('vote', {
        tip: this.get('tip'),
        voter: this.get('session.currentUser'),
        direction: 'up'
      }).save();
    },

    voteDown() {
      if (this.get('votedDown')) {
        return this.get('votedDown').destroyRecord();
      }
      if (this.get('votedUp')) {
        let vote = this.get('votedUp');
        vote.set('direction', 'down');
        return vote.save();
      }
      this.get('store').createRecord('vote', {
        tip: this.get('tip'),
        voter: this.get('session.currentUser'),
        direction: 'down'
      }).save();
    }

  }

});
