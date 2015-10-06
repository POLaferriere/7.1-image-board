import ImageCollection from 'models/image-collection';
import CreateView from 'views/images/create';
import ImageListView from 'views/images/image-list';

$(document).ready(function() {
    var images = new ImageCollection();
    images.fetch();

    var createView = new CreateView({
        collection: images,
    });
    $('#container').append(createView.render().el);

    var imageList = new ImageListView({
        collection: images,
    });
    $('#container').append(imageList.render().el);
});
