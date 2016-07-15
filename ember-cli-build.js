/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });
  
  // Don't import the regular velocity lib, since that's included with liquid-fire
  app.import('bower_components/velocity/velocity.ui.js');

  return app.toTree();
};
