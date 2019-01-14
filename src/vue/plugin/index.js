import JasonBorder from './jason-border';

export default {
  install (Vue, options = {}) {
    Vue.component(JasonBorder.name, JasonBorder);
  }
};

// script import
if (window && window.Vue) {
  window.Vue.component(JasonBorder.name, JasonBorder);
}