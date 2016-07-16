import Ember from 'ember';

const assert = Ember.assert;
const computed = Ember.computed;

export default Ember.Component.extend({

  parentCSSScope: computed('parent', function() {
    let parent = this.get('parent');
    assert('You must supply the parent view to modal dialogs', parent);
    return parent.get('classNames.lastObject');
  }),

  cssScope: computed('parentCSSScope', function() {
    return `${ this.get('parentCSSScope') } ${ this.get('classNames.lastObject') }`;
  }),

  actions: {
    dismiss() {
      if (this.dismiss) {
        this.dismiss();
      }
    }
  }

});
