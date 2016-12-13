import DS from 'ember-data';
import Ember from 'ember';
import ModelValidationMixin from '../mixins/model-validation-mixin';

const { attr } = DS;
const { computed, isPresent } = Ember;

export default DS.Model.extend(ModelValidationMixin, {

  name: attr('string'),

  isNameVaild: computed('name', function() {
    return isPresent(this.get('name'));
  }),

  password: attr('string'),

  email: attr('string'),

  isEmailVaild: computed('email', function() {
    return this.isValidEmail(this.get('email'));
  }),

  createdAt: attr('date'),

  isValid: computed.and('isNameVaild', 'isEmailVaild'),

});
