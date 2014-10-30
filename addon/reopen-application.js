import Ember from 'ember';
import Media from 'media';

export default function () {

  Ember.Application.reopenClass({
    responsive: function(config) {
      var media = config.media;

      if (!this.responsive.media) {
        this.responsive.media = Media.create();
      }

      if (media) {
        for (var name in media) {
          if (media.hasOwnProperty(name)) {
            this.responsive.media.match(name, media[name]);
          }
        }
      }

      return this;
    }
  });
}
