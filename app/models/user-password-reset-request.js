import DS from 'ember-data';
import Ember from 'ember';
import ModelValidationMixin from '../mixins/model-validation-mixin';

const { computed } = Ember;
const { attr } = DS;

export default DS.Model.extend(ModelValidationMixin, {

  email: attr('string'),

  isEmailVaild: computed('email', function() {
    return this.isValidEmail(this.get('email'));
  }),

  isValid: computed.alias('isEmailVaild'),

});
