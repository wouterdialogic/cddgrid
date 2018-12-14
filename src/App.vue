<template>
  <div id="app">
    <CssGrid></CssGrid>
     <input type="text" v-model="gemeente">
      <select v-model= "gemeente">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="opel">Opel</option>
      <option value="audi">Audi</option>
    </select>
    <br>
<TailwindDropdown
  title="i liek monkeys"
  :items=items>
</TailwindDropdown>
<FormTextInput 
  form_id="1"
  form_label="monkey name"
  form_input="Wouter!"
  form_action="save_monkey"></FormTextInput>
    <Card 
    title="Wouter" 
    :gemeente=gemeente
    content="this is a card" 
    :some_crazy_color=crazy_color 
    image_link="https://cdn.pixabay.com/photo/2016/10/07/15/47/dragon-1721875__340.png" /> 
    <Card 
    title="Titia" 
    :gemeente=gemeente
    content="this is a card" 
    :some_crazy_color=crazy_color 
    image_link="https://cdn.pixabay.com/photo/2016/10/07/15/47/dragon-1721875__340.png" />
  <WhatsAppClone></WhatsAppClone>
   <h1>errors</h1>
   <ol>
  <li v-for="err in errors.errors">{{err}}</li>
   </ol>
  <br><button @click="get_random_images">hi there this is a button</button>
  <TailwindImage v-for="image in images"
    :image=image
  ></TailwindImage>

  <TailWindInlineForm></TailWindInlineForm>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Card from './components/Card.vue'
import FormTextInput from './components/FormTextInput.vue'
import TailwindDropdown from './components/TailwindDropdown.vue'
import WhatsAppClone from './components/WhatsAppClone.vue'
import TailwindImage from './components/TailwindImage.vue'
import TailWindInlineForm from './components/TailWindInlineForm.vue'
import CssGrid from './components/CssGrid.vue'
import Vue from 'vue'
//import Events from './components/Event.vue'

class Errors {
  constructor() {
    this.errors = [];
  }

  get(field) {
    if (this.errors.field) {
      return this.errors[field];
    }
  }

  is_empty() {
    if (this.errors == {}) {
      return true;
    } else {
      return false;
    }
  }

  console_log_all() {
    for (error in this.errors) {
      console.log(error);
    }
  }

  get_all() {
    return this.errors;
  }

  put(errors) {
    this.errors.push(errors)
  }
}

class Form {
  constructor(data) {
    this.originalData = data;

    for (let field in data) {
      this[field] = data[field];
    }

    this.errors = new Errors;
  }

  reset() {
    for (let field in this.originalData) {
      this[field] = '';
    }
  }

  submit() {

  }
}

let woter = new Errors;
Event = new Vue();

export default {
  name: 'app',
  components: {
    HelloWorld,
    FormTextInput,
    TailwindDropdown,
    Card,
    Event,
    WhatsAppClone,
    TailwindImage,
    TailWindInlineForm,
    CssGrid,
  },
  data: function() {
    return {
      errors: new Errors(),
      items: [{text: "waar", type: "text"}, {type: "spreader"}, {type: "text", text: "waars 2"}],
      gemeente: "amsterdam",
      crazy_color: "#22eeff",
      images: [],
      messages: [],
    }
  },

  created() {
    Event.$on('button_action', () => console.log("emitted"));
    
    this.errors.put("i like monkey errors!");
    this.errors.put("i like monkey errors 2!");
    //Event.$on('button_action2', (data) => console.log(data));
  },

  methods: {
    get_random_images() {
      var images = Math.floor(Math.random() * 6) + 1;
      console.log(images + ' - ' + size_x + " - " + size_y );
      this.images = [];
      for (var i = 1; i < images; i++) {
        var size_x = Math.floor(Math.random() * 10) * 100;
        var size_y = Math.floor(Math.random() * 10) * 100;
        let link = "https://picsum.photos/" + size_x + "/" + size_y;
        self = this;
        axios.get('https://jsonplaceholder.typicode.com/todos/' + i)
        .then(function (response) {
          var new_object = {
            text: response.data.title,
            link: link
          };
          console.log(new_object);
          // self.messages.push(response.data.title)
          self.errors.put("i like mowdwdw nkey errors 3!");
          self.images.push(new_object)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });

        //this.images.push(link);
      }
      console.log(this.images);

    },

    consoleme(log_this) {
      console.log("logging a click");
      console.log(log_this);
    },

    set_gemeente(gemeente) {
      this.gemeente = gemeente;
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
