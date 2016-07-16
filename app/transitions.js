import { target } from 'liquid-tether';

export default function() {

  this.transition(
    target('tip-modal'),
    this.use('tether', [ 'ui', 'transition.expandOut', 'transition.expandIn', { duration: 100 } ], [ 'ui', 'transition.fadeOut', 'transition.fadeIn', { duration: 100 } ])
  );

}
