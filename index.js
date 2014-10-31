module.exports = {
  name: 'ember-cli-responsive',
  included: function (app) {
    this._super.included(app);
    app.import('bower_components/matchMedia/matchMedia.js');
  }
};
