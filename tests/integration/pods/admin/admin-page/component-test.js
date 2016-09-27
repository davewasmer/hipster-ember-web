/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'admin/admin-page',
  'Integration: AdminAdminPageComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#admin/admin-page}}
      //     template content
      //   {{/admin/admin-page}}
      // `);

      this.render(hbs`{{admin/admin-page}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
