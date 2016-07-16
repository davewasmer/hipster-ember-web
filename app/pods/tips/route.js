import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return {
      tips: this.store.findAll('tip')
    }
  }

});
