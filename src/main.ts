
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import App from './App.vue';
import router from './router';

import './assets/base.css';
import 'primevue/resources/primevue.min.css'; // core
import 'primevue/resources/themes/saga-blue/theme.css'; //theme
import 'primeicons/primeicons.css'; //icons

import BadgeDirective from 'primevue/badgedirective';
import Tooltip from 'primevue/tooltip';
import StyleClass from 'primevue/styleclass';
import FocusTrap from 'primevue/focustrap';
import Ripple from 'primevue/ripple';

library.add(fas);

const app = createApp(App);

app.directive('click-outside', {
  beforeMount(el, binding) {
    el.clickOutsideEvent = function (event: Event) {
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value();
      }
    };
    document.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent);
  }
});

app.use(PrimeVue, { ripple: true });
app.component('Fa', FontAwesomeIcon);
app.use(createPinia());
app.use(router);

app.directive('tooltip', Tooltip);
app.directive('badge', BadgeDirective);
app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);
app.directive('focustrap', FocusTrap);

app.mount('#app');