import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tip', { path: '/tips/:id' });
  this.route('submit');
  this.route('login');

  this.route('admin');

  this.route('about');
  this.route('imprint');
});

export default Router;
