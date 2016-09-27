import Ember from 'ember';

const assert = Ember.assert;
const computed = Ember.computed;
const on = Ember.on;
const observer = Ember.observer;

export default Ember.Component.extend({

  parentCSSScope: computed('parent', function() {
    let parent = this.get('parent');
    assert('You must supply the parent view to modal dialogs', parent);
    return parent.get('classNames.lastObject');
  }),

  cssScope: computed('parentCSSScope', function() {
    return `${ this.get('parentCSSScope') } ${ this.get('classNames.lastObject') }`;
  }),

  preventBodyScroll: on('didInsertElement', function() {
    Ember.$('body').addClass('no-scroll');
  }),

  willDestroyElement() {
    Ember.$('body').removeClass('no-scroll');
    this._super(...arguments);
  },

  actions: {
    dismiss() {
      console.log('dismiss');
      if (this.dismiss) {
        this.dismiss();
      }
    }
  }

});
