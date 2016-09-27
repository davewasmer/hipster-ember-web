import Ember from 'ember';

const computed = Ember.computed;
const { service } = Ember.inject;

export default Ember.Component.extend({

  session: service(),

  canEdit: computed('session.currentUser.isAdmin', 'comment.author', function() {
    return this.get('session.currentUser.isAdmin') ||
           (this.get('session.currentUser') === this.get('comment.author'));
  }),

  actions: {
    delete() {
      this.get('comment').destroyRecord();
    }
  }

});
