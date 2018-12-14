import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import WhatsAppClone from '../components/WhatsAppClone.vue';

storiesOf('WhatsAppClone', module)
  .add('story as a template', () => '<my-button :rounded="true">story as a function template</my-button>')
  .add('story as a component', () => ({
    components: { WhatsAppClone },
    template: '<my-button :rounded="true">rounded</my-button>'
  }));