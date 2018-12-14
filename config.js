import { configure } from '@storybook/vue';

import Vue from 'vue';
//import Vuex from 'vuex'; // Vue plugins

// Import your custom components.
import WhatsAppClone from '../src/stories/WhatsAppClone.vue';

// Install Vue plugins.
//Vue.use(Vuex);

// Register custom components.
Vue.component('whatsapp-clone', WhatsAppClone);

function loadStories() {
  // You can require as many stories as you need.
  require('src/stories/WhatsAppClone.vue');
}

configure(loadStories, module);