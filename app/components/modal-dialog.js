import Ember from 'ember';

export default Ember.Component.extend({
  visible: false,

  confirmLabel: "Confirm",

  title: "Confirmation Required",

  confirmAction: null,

  actions: {
    confirm() {
      this.get('confirmAction')().finally(() => {
        if (!this.get('isDestroyed') && !this.get('isDestroying')) {
          this.set('visible', false);
        }
      });
    },

    cancel() {
      this.set('visible', false);
    },
  },
});
