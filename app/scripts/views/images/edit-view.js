import BaseView from 'views/base-view';

var EditView = BaseView.extend({
	
	tagName: 'form',

	className: 'edit-view',

	template: JST['edit-view'],

	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	events: {
		'click .fa-times': 'exitView',
		'submit': 'updateImage'
	},

	exitView: function(){
		console.log('clicked');
		this.remove();
	},

	updateImage: function(e){
    e.preventDefault();
    this.model.save(this.getInfo());
    this.remove();
  },

	getInfo: function(){
    var results = {};
    results.url = this.$('input').val();
    results.caption = this.$('textarea').val();
    return results;
  },

});

export default EditView;