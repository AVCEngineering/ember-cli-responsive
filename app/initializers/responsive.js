export var initialize = function(container, app) {
  // application.inject('route', 'foo', 'service:foo');
  var responsive = app.constructor.responsive;

  if (responsive && responsive.media) {
    app.register('responsive:media', responsive.media, { instantiate: false });
    app.inject('controller', 'media', 'responsive:media');
    app.inject('component', 'media', 'responsive:media');
    app.inject('route', 'media', 'responsive:media');
    app.inject('view', 'media', 'responsive:media');
  }
};

export default {
  name: 'responsive',

  initialize: initialize
};
