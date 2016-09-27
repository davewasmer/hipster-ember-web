import Ember from 'ember';

const { service } = Ember.inject;
const computed = Ember.computed;

export default Ember.Component.extend({

  session: service(),

  sortedTips: computed('tips.@each.upVotes', 'tips.@each.downVotes', 'sort', function() {
    let sort = this.get('sort');
    if (sort === 'new') {
      return this.get('tips').sortBy('createdAt');
    } else if (sort === 'controversial') {
      return this.get('tips').toArray().sort((tipA, tipB) => {
        let aSpread = Math.abs(tipA.get('voteSpread'));
        let bSpread = Math.abs(tipB.get('voteSpread'));
        let aVotes = tipA.get('votes.length');
        let bVotes = tipB.get('votes.length');
        if (aVotes === 0) {
          return 1;
        } else if (bVotes === 0) {
          return -1;
        }
        let spreadSort = Ember.compare(aSpread, bSpread);
        if (spreadSort === 0) {
          return Ember.compare(aVotes, bVotes) * -1;
        }
        return spreadSort;
      });
    }
    return this.get('tips').sortBy('upVotes.length').reverse();
  }),

  actions: {
    login() {
      this.set('isLoggingIn', true);
      this.get('session').authenticate('authenticator:torii', 'github-oauth2')
      .finally(() => {
        this.set('isLoggingIn', false);
      });
    }
  }
});
