import { configure } from '@storybook/vue';

import Vue from 'vue';
//import Vuex from 'vuex'; // Vue plugins

// Import your custom components.
import WhatsAppClone from '../src/stories/WhatsAppClone';
import TailWindInlineForm from '../src/stories/TailWindInlineForm';

// Install Vue plugins.
//Vue.use(Vuex);

// Register custom components.
Vue.component('whatsapp-clone', WhatsAppClone);
Vue.component('tailwind-form', TailWindInlineForm);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories/WhatsAppClone.vue');
  require('../src/stories/TailWindInlineForm.vue');
}

configure(loadStories, module);