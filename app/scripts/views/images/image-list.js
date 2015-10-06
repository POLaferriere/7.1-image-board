import ImageItemView from 'views/images/image-item';
import CollectionView from 'views/collection-view';

var ImageListView = CollectionView.extend({

    initialize: function() {
    	this.listenTo(this.collection, 'add', this.render);
    },

    tagName: 'ul',

    className: 'image-list',

    render: function() {
        this.renderChildren();
        return this;

    },

    renderChildren: function() {
        this.collection.each((image) => {
            var imageItemView = new ImageItemView({
            	collection: this.collection,
                model: image,
            });
            this.$el.prepend(imageItemView.render().el);
        });
    },

    saySomething: function() {
        console.log('added');
    }
});

export default ImageListView;
