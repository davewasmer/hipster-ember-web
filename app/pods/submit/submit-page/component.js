import Ember from 'ember';

const { service } = Ember.inject;
const computed = Ember.computed;
const { not } = Ember.computed;

export default Ember.Component.extend({

  router: service('-routing'),
  store: service(),
  session: service(),

  tip: computed(function() {
    return this.get('store').createRecord('tip', {
      author: this.get('session.currentUser')
    });
  }),

  isValid: computed('tip.title', 'tip.description', function() {
    let { title, description } = this.get('tip').getProperties('title', 'description');
    return (typeof title === 'string' && title.length > 0)
        && (typeof description === 'string' && description.length > 0);
  }),

  isInvalid: not('isValid'),

  actions: {
    close() {
      this.get('router').transitionTo('tips');
    },
    submit() {
      if (!this.get('isInvalid')) {
        this.get('tip').save();
      }
    }
  }

});
