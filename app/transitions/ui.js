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
  // Default options
  options = merge({ drag: true, stagger: 100 }, options);

  // Child animation (i.e. for stagger/drag effects)
  if (options.target || options.newTarget) {
    options.newTarget = options.newTarget || options.target;
    // Old element's target defaults to the same as the new element's
    if (!options.oldTarget) {
      options.oldTarget = options.target;
    }
    oldElement = this.oldElement ? [ this.oldElement.find(options.oldTarget) ] : null;
    newElement = this.newElement ? [ this.newElement.find(options.newTarget) ] : null;
  }

  stop(oldElement);
  return animate(oldElement, oldEffect, merge({ backwards: true }, options))
  .then(() => {
    return animate(newElement, newEffect, options);
  });
}
