import Image from 'models/image';

var ImageCollection = Backbone.Collection.extend({
	url:'http://tiny-lasagna-server.herokuapp.com/collections/POImages',
  	model: Image,
});

export default ImageCollection;
