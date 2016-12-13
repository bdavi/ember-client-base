import Ember from 'ember';

export default Ember.Mixin.create({

  isValidEmail(value) {
    const pattern = /\S+@\S+\.\S+/;
    return pattern.test(value);
  },

});
