import ImageCollection from 'models/image-collection';
import CreateView from 'views/images/create';

$(document).ready(function(){
  var images = new ImageCollection();

  var createView = new CreateView({
    collection: images,
  });
  $('#container').append(createView.render().el);
});
