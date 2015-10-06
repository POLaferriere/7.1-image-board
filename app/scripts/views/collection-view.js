import BaseView from 'views/base-view';

var CollectionView = BaseView.extend({
  intialize: function(){
    this.listenTo(this.collection, 'add remove', this.render);
  },
});

export default CollectionView;
