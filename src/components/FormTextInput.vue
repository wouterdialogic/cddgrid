<template>
  <div class="FormTextInput">

    <form class="w-full max-w-xs">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            {{form_label}}
          </label>
        </div>
        <div class="md:w-2/3">
          <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter 
          rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none 
          focus:bg-white focus:border-blue" id="inline-full-name" @blur="do_action" type="text" v-model="m_input" >
        </div>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  name: 'FormTextInput',
  props: {
    form_: 1,
    form_label: String,
    form_input: String,
    form_action: String
  },
  data: function() {
    return {
      id: 1,
      isCliked: false,
      m_input: this.form_input,
    }
  },

  methods: {
    do_action() {
      var form = this;
      console.log({id: form.id, form_input: form.m_input});
      Event.$emit('button_action')
      Event.$emit('button_action2', {id: this.id, form_input: this.m_input})
      // this.$emit('button_action', [1, 2,])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
