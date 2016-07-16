import Ember from 'ember';
import { animate, stop } from 'liquid-fire';
import merge from 'lodash/object/merge';

// Arguments:
//
//   this.use('ui', 'transition.slideRightIn')  <- Uses same effect for both old and new elements
//   this.use('ui', 'transition.fadeOut', 'transition.slideRightIn')  <- fadeOut the old element, slideRightIn the new element
//
// Options (in addition to standard velocity.js options):
//
// `target` - CSS selector to target child elements, usually for stagger/drag
//            effects
// `oldTarget`, `newTarget` - target child elements for old and new elements in
//                            the transition, respectively

export default function uiTransition(oldEffect, newEffect, options) {
  let oldElement = this.oldElement;
  let newElement = this.newElement;

  // Arg handling
  if (!newEffect) {
    newEffect = oldEffect;
    options = {};
  } else if (!options) {
    options = newEffect;
    newEffect = oldEffect;
  }

  stop(oldElement);
  return Ember.RSVP.all([
    animate(oldElement, oldEffect, options),
    animate(newElement, newEffect, options)
  ]);
}
