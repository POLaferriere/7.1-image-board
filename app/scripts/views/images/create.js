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

  createImage: function(){
    this.collection.create(this.getInfo());
    this.$('input').val('');
  },

  getInfo: function(){
    var results = {};
    var info = this.$el.serializeArray();
    info.each(function(obj){
      results[obj.name] = obj.value;
    })
    return results;
  },

  toggleCreate: function(e) {
    e.preventDefault();
    this.$('form').toggleClass('active');
  }
})

export default CreateView;
