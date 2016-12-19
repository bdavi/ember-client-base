import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-forgot-password', 'Integration | Component | form forgot password', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{form-forgot-password}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#form-forgot-password}}
      template block text
    {{/form-forgot-password}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
