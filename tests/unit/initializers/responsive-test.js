import Ember from 'ember';
import 'ember-cli-responsive/responsive';
import { initialize } from 'dummy/initializers/responsive';
import { module, test } from 'qunit';

var registry, application;

module('Unit | Initializer | responsive', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      registry = application.registry;
      application.deferReadiness();
    });
  }
});

test('it works with Ember 1.x syntax', function(assert) {
  initialize(registry, application);

  assert.ok(true);
});

test('it works with Ember 2.x syntax', function(assert) {
  initialize(application);

  assert.ok(true);
});
