import ModelView from 'views/model-view';
import EditView from 'views/images/edit-view';

var ImageItemView = ModelView.extend({
    initialize: function() {
        // this.listenTo(this.model, 'change', this.render);
    },

    tagName: 'li',

    className: 'image-item',

    template: JST['image'],

    events: {
        'click .fa-pencil-square': 'renderEdit',
        'click .fa-trash-o': 'delete',
    },

    renderEdit: function() {
        var editView = new EditView({
            collection: this.collection,
            model: this.model,
        });
        this.$el.append(editView.render().el);
    },

    delete: function() {
    	debugger;
        this.model.destroy();
        this.remove();
    }

});

export default ImageItemView;
