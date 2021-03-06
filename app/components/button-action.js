import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({

  classNames: ['margin-bottom'],

  style: 'primary',

  onClickAction: null,

  requiresConfirmation: false,

  isConfirming: false,

  label: null,

  labelIcon: null,

  confirmationMessage: null,

  confirmationTitle: null,

  confirmationButtonLabel: null,

  isProcessing: false,

  disabled: false,

  disableButton: computed('disabled', 'isProcessing', function() {
    return this.get('disabled') || this.get('isProcessing');
  }),

  resetButton() {
    if (!this.get('isDestroyed') && !this.get('isDestroying')) {
      this.set('isConfirming', false);
      this.set('isProcessing', false);
    }
  },

  actions: {
    clickAction() {
      if (this.get('disableButton')) { return; }

      if (this.get('requiresConfirmation')) {
        this.set('isConfirming', true);
        return;
      }

      this.set('isProcessing', true);

      this.get('onClickAction')().finally(
        () => { this.resetButton(); }
      );
    },

    cancel() {
      this.resetButton();
    },
  },

});
