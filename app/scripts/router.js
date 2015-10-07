import ImageCollection from 'models/image-collection';
import CreateView from 'views/images/create';
import ImageListView from 'views/images/image-list';
import ImageZoomView from 'views/images/image-zoom';

var AppRouter = Backbone.Router.extend({
    initialize: function() {
        this.images = new ImageCollection();
        this.images.fetch();

        var createView = new CreateView({
            collection: this.images,
        });
        $('#container').append(createView.render().el);

        var imageList = new ImageListView({
            collection: this.images,
        });
        $('#container').append(imageList.render().el);
        this.currentView = imageList;
    },

    routes: {
    	'images': 'showList',
    	'images/:id' : 'showImage',
    },

    showList: function() {
    	var view = new ImageListView({collection: this.images});
    	this.showView(view);
    },

    showImage: function(id){
    	var image = this.images.get(id);
    	var view = new ImageZoomView({model: image});
    	this.showView(view);
    },

    showView: function(view) {
    	if(this.currentView){
    		this.currentView.remove();
    	}
    	this.currentView = view;
    	$('#container').append(view.render().el);
    },
});

export default AppRouter;
