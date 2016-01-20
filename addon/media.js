import Ember from 'ember';

export default Ember.Object.extend({

  matches: Ember.computed(function() {
    return Ember.A();
  }),

  listeners: {},

  mql: window.matchMedia,

  classNames: Ember.computed('matches.length', function() {
    var dasherize = Ember.String.dasherize;
    return this.get('matches').map(function(name) {
      return 'media-' + dasherize(name);
    }).join(' ');
  }),

  match: function(name, query) {
    var classify = Ember.String.classify,
        matcher = (this.get('mql') || window.matchMedia)(query),
        isser = 'is' + classify(name),
        _this = this;

    function listener(matcher) {
      _this.set(name, matcher);
      _this.set(isser, matcher.matches);

      if (matcher.matches) {
        _this.get('matches').pushObject(name);
      } else {
        _this.get('matches').removeObject(name);
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
