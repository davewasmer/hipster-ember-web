/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'submit/submit-page',
  'Integration: SubmitSubmitPageComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#submit/submit-page}}
      //     template content
      //   {{/submit/submit-page}}
      // `);

      this.render(hbs`{{submit/submit-page}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
