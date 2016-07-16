/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'ui/modal-dialog',
  'Integration: UiModalDialogComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#ui/modal-dialog}}
      //     template content
      //   {{/ui/modal-dialog}}
      // `);

      this.render(hbs`{{ui/modal-dialog}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
