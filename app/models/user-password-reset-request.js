import DS from 'ember-data';
import Ember from 'ember';
import validator from 'npm:validator';

const { computed } = Ember;
const { attr } = DS;
const { isEmail } = validator;

export default DS.Model.extend({

  email: attr('string'),

  isEmailValid: computed('email', function() {
    return isEmail(this.get('email'));
  }),

  isValid: computed.alias('isEmailValid'),

});
