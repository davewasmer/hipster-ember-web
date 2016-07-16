import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({

  router: service('-routing'),

  actions: {
    close() {
      this.get('router').transitionTo('tips');
    }
  }

});
