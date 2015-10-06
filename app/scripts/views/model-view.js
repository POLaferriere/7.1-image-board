import BaseView from 'views/base-view';

var ModelView = BaseView.extend({

	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

});

export default ModelView;
