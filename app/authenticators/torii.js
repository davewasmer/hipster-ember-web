import Ember from 'ember';
import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii';

const { service } = Ember.inject;

export default ToriiAuthenticator.extend({

  torii: service()

});
