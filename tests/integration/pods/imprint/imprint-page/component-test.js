/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'imprint/imprint-page',
  'Integration: ImprintImprintPageComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#imprint/imprint-page}}
      //     template content
      //   {{/imprint/imprint-page}}
      // `);

      this.render(hbs`{{imprint/imprint-page}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
