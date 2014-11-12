import Ember from 'ember';

export default Ember.Object.extend({

  matches: function() {
    return new Set();
  }.property(),

  listeners: {},

  mql: window.matchMedia,

  classNames: function() {
    var dasherize = Ember.String.dasherize;
    return this.get('matches').map(function(name) {
      return 'media-' + dasherize(name);
    }).join(' ');
  }.property('matches.[]'),

  match: function(name, query) {
    var classify = Ember.String.classify,
        matcher = (this.get('mql') || window.matchMedia)(query),
        isser = 'is' + classify(name),
        _this = this;

    function listener(matcher) {
      _this.set(name, matcher);
      _this.set(isser, matcher.matches);

      if (matcher.matches) {
        _this.get('matches').add(name);
      } else {
        _this.get('matches').delete(name);
      }
    }
    this.get('listeners')[name] = listener;

    if (matcher.addListener) {
      matcher.addListener(function(matcher){
        Ember.run(null, listener, matcher);
      });
    }
    listener(matcher);
  }
});
