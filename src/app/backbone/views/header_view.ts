import Backbone from 'backbone';

const HeaderView = Backbone.View.extend({
  el: document.getElementById('backbone-app'),
  initialize: function() {
    console.log('render');
    this.render();
  },
  render: function() {
    this.$el.html('<div>Hello backbone</div>');
  },
});

export default HeaderView;
