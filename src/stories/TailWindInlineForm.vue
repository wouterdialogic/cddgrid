import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import TailWindInlineForm from '../components/TailWindInlineForm.vue';

storiesOf('TailWindInlineForm', module)
  .add('story as a template', () => '<my-button :rounded="true">story as a function template</my-button>')
  .add('story as a component', () => ({
    components: { TailWindInlineForm },
    template: '<my-button :rounded="true">rounded</my-button>'
  }));