/*jshint node:true*/
module.exports = {
  scenarios: [
    {
      name: 'ember-1.10',
      dependencies: {
        'ember': '1.10.0',
        'ember-data': '1.0.0-beta.15',
      }
    },
    {
      name: 'ember-1.13.13',
      dependencies: {
        'ember': '1.13.13',
        'ember-data': '1.13.15',
      }
    },
    {
      name: 'ember-release',
      dependencies: {
        'ember': 'components/ember#release'
      },
      resolutions: {
        'ember': 'release'
      }
    },
    {
      name: 'ember-beta',
      dependencies: {
        'ember': 'components/ember#beta'
      },
      resolutions: {
        'ember': 'beta'
      }
    },
    {
      name: 'ember-canary',
      dependencies: {
        'ember': 'components/ember#canary'
      },
      resolutions: {
        'ember': 'canary'
      }
    }
  ]
};
