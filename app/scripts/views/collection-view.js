import BaseView from 'views/base-view';

var CollectionView = BaseView.extend({
  initialize: function() {
    	this.listenTo(this.collection, 'update', this.render);
    },
});

export default CollectionView;
