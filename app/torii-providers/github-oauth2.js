import Ember from 'ember';
import GithubOauth2Provider from 'torii/providers/github-oauth2';

const { service } = Ember.inject;

export default GithubOauth2Provider.extend({

  ajax: service(),
  session: service(),
  store: service(),

  open() {
    return this._super(...arguments).then((authorization) => {
      return this.get('ajax').post('/login', {
        authorizationCode: authorization.authorizationCode
      });
    }).then((authentication) => {
      return this.fetch(authentication);
    });
  },

  fetch(authentication) {
    this.set('session.token', authentication.token);
    return this.get('store').findRecord('user', authentication.user).then((user) => {
      this.set('session.user', authentication.user);
      this.set('session.currentUser', user);
      return authentication;
    });
  }

});
