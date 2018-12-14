<template>
  <form class="w-full max-w-xs">
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
          Full Name
        </label>
      </div>
      <div class="md:w-2/3">
        <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" id="in22line-full-name" type="text" value="Jane Doe">
        <p class="text-red text-xs pr-4 italic">Please choose a password.</p>
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
          Password
        </label>
      </div>
      <div class="md:w-2/3">
        <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" id="in22line-username" type="password" placeholder="******************">
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3"></div>
      <label class="md:w-2/3 block text-grey font-bold">
        <input class="mr-2 leading-tight" type="checkbox">
        <span class="text-sm">
          Send me your newsletter!
        </span>
      </label>
    </div>
    <div class="md:flex md:items-center">
      <div class="md:w-1/3"></div>
      <div class="md:w-2/3">
        <button class="shadow bg-purple hover:bg-purple-light focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
          Sign Up
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'TailWindInlineForm',
  props: {
    //form_: 1,
  },
  data: function() {
    return {
      id: 1,
    }
  },

  methods: {
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
