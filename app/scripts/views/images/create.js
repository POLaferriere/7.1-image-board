import BaseView from 'views/base-view';

var CreateView = BaseView.extend({
  tagName: 'header',

  className: 'create-view',

  template: JST['create'],

  events: {
    'click .js-create': 'createImage',
    'click .js-image-create': 'toggleCreate',
    'click .js-create-cancel': 'toggleCreate',
  },

  createImage: function(e){
    e.preventDefault();
    console.log(this.getInfo());
    this.collection.create(this.getInfo());
    this.$('input, textarea').val('');
  },

  getInfo: function(){
    var results = {};
    results.url = this.$('input').val();
    results.caption = this.$('textarea').val();
    return results;
  },

  toggleCreate: function(e) {
    e.preventDefault();
    this.$('form').toggleClass('active');
  }
})

export default CreateView;
