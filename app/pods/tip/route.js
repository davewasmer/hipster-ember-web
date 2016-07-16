import Ember from 'ember';

export default Ember.Route.extend({

  model({ id }) {
    return {
      tip: this.store.findRecord('tip', id)
    }
  }

});
