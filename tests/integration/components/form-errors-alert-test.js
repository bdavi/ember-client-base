import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-errors-alert', 'Integration | Component | form errors alert', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{form-errors-alert}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#form-errors-alert}}
      template block text
    {{/form-errors-alert}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
