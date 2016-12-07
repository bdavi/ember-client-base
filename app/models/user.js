import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({

  name: attr('string'),

  password: attr('string'),

  email: attr('string'),

  createdAt: attr('date'),

});
