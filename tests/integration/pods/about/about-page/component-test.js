/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'about/about-page',
  'Integration: AboutAboutPageComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#about/about-page}}
      //     template content
      //   {{/about/about-page}}
      // `);

      this.render(hbs`{{about/about-page}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
