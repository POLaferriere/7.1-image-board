var Image = Backbone.Model.extend({
  defaults : {
    url: '',
    caption: '',
  },
  idAttribute: '_id',
})

export default Image;
