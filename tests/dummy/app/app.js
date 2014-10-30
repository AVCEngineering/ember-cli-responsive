import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import 'ember-cli-responsive/responsive';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

App.responsive({
  media: {
    mobile:  '(max-width: 768px)',
    tablet:  '(min-width: 769px) and (max-width: 992px)',
    desktop: '(min-width: 993px) and (max-width: 1200px)',
    jumbo:   '(min-width: 1201px)'
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
