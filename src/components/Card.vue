<template>
  <div class="hello">

    <div class="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
      <div class="sm:flex sm:items-center px-6 py-4">
        <img class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" :src="image_link" alt="">
        <div class="text-center sm:text-left sm:flex-grow">
          <div class="mb-4">
            <p class="text-xl leading-tight">{{title}}</p>
            <p class="text-sm leading-tight text-grey-dark">{{content}}</p>
          </div>
          <div>
            <button class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">{{gemeente}}</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    //Event: Object,
    title: String,
    some_crazy_color: String,
    content: String,
    gemeente: String,
    image_link: String
  },

  created() {
    Event.$on('button_action2', (data) => console.log("im in card: "+this.title));
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
