import Ember from 'ember';

const { $ } = Ember;

export default Ember.Controller.extend({

  init: function () {
    this._super();

    // We need to style the div generated by the main outlet for the application to
    // get the AdminLTE template installed correctly. This is obviously a hack that
    // can be removed either by editing the AdminLTE styles directly or when routable
    // components are available.
    $(document).ready( function () {
      $('body > div.ember-view').addClass('wrapper');
    });
  },

});
