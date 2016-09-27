/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'ui/comment-card',
  'Integration: UiCommentCardComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#ui/comment-card}}
      //     template content
      //   {{/ui/comment-card}}
      // `);

      this.render(hbs`{{ui/comment-card}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
