import Backbone from 'backbone';
import {t} from '@lingui/macro';

import i18n from '@rover/utilities/translation';

const HeaderView = Backbone.View.extend({
  el: document.getElementById('backbone-app'),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(`
      <h1 class="card bg-backbone">${i18n._(t`We’re The Dog People.`)}</h1>
      <h3 class="card bg-backbone">${i18n._(t`The nation’s largest network of 5‑star pet sitters and dog walkers.`)}</h2>
    `);
  },
});

export default HeaderView;
