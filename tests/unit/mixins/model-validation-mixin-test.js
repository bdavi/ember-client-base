import Ember from 'ember';
import ModelValidationMixinMixin from 'ember-client-base/mixins/model-validation-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | model validation mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let ModelValidationMixinObject = Ember.Object.extend(ModelValidationMixinMixin);
  let subject = ModelValidationMixinObject.create();
  assert.ok(subject);
});
