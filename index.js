module.exports = {
  name: 'ember-cli-responsive',
  included: function included(app) {
    this.app = app;
    this._super.included(app);

    app.import(app.bowerDirectory + '/matchMedia/matchMedia.js');
  }
};
