<template>
  <div class="hello">
   
  
  <hr /><br>
  <h2>First, define a main grid: set size and classes:</h2><br>
    <h3>Columns and rows</h3><br>
    <input
      type="number"
      name="grid_columns"
      id="grid_columns"
      placeholder="columns"
      style="width:100px;"
      class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple"
      v-model="grid_columns"
    /> - 
    <input type="number" 
    style="width:100px;"
    placeholder="rows"
    class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple"
    v-model="grid_rows" />

<br><br>
  <h3>Classes:</h3><br>
  <input
          v-model.lazy="form['all']"
          :name="'allcontroller'"
          :key="'allcontroller'"
          style="width:100px;"
          @change="handle_all_controller()"
          type="text"
          class="bg-grey appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple"
          :placeholder="'all'"
          :id="'all_'"
        />
  <template v-for="(column, index2) in int_grid_columns()">
        <input
          v-model="form['column'+column]"
          :name="'columncontroller' + column"
          :key="'columncontroller'+index2"
          style="width:100px;"
          @change="handle_column_controller(column)"
          type="text"
          class="bg-grey-light appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple"
          :placeholder="'col ' + column"
          :id="'column_' + column"
        />
  </template>

  <br />
    <template v-for="(row, index) in int_grid_rows()">
      <input
          v-model="form['row'+row]"
          :name="'rowcontroller' + row"
          :key="'rowcontroller'+index"
          style="width:100px;"
          @change="handle_row_controller(row)"
          type="text"
          class="bg-grey-light appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple"
          value="row"
          :placeholder="'row ' + row"
          :id="'row_' + row"
        />
      <template v-for="(column, index2) in int_grid_columns()">
        <input
          v-model="created_grid['col'+column+'row'+row]"
          :name="'el' + row + '_' + column"
          :key="index+'-'+index2"
          style="width:100px;"
          type="text"
          class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple"
          value="main"
          :placeholder="column + ' - ' + row"
          :id="column + '_' + row"
        />
      </template>
      
      <br />
    </template>
    <br><h3>Define main grid:</h3><br>
    <h2>When you`re happy, click on define main grid :</h2><br>
      <button class="button bg-green-lighter border-2 border-grey-lighter py-2 px-6 hover:bg-blue" 
      :disabled="active_area != 'all'"
      @click="define_main_grid_areas()" 
      >Define main grid</button>
    <br><br>

     <h3>Available grids, based on defined classes:</h3> <div class="buttons"><br>
      <button class="button bg-green-lighter border-2 border-grey-lighter py-2 px-6 hover:bg-blue" 
      :disabled="active_area == 'all'"
      @click="enable_area('all')" 
      >all</button> - 
    <template v-for="(area, index) in areas">
      <button class="button bg-blue-lighter border-2 border-grey-lighter py-2 px-6 hover:bg-blue" 
      :disabled="active_area == area"
      @click="enable_area(area)" 
      :key="index" >{{area}}</button> - 
    </template>
    </div>

    <template v-if="active_area == 'all'">
    <br><h3>Save classes, and render the grid:</h3><br>
      <button class="button bg-green-lighter border-2 border-grey-lighter py-2 px-6 hover:bg-blue" 
      :disabled="active_area != 'all'"
      @click="build_main_grid()" 
      >build grid</button>
    </template><br><br>

    <!-- <div class="wrapper" :style=" 'grid-template-areas: ' + grid_template_areas +';grid-template-columns: '+ get_grid_template_columns+';'" >
      <template v-for="area in areas">
        <template v-if="is_subarea(area)">
            <div :class="area + ' wrapper-part'"  :style="'grid-area: '+area" >{{ area }}
              <p> wouter is niet</p>
            </div>
        </template>
        <template v-else>
          <div  :class="area + ' wrapper-part'" :style="'grid-area: '+area" >{{ area }}
            <p> wouter is gek</p>
          </div>
        </template>
      </template>
      
    </div> -->
      <!-- <h1>FOR REALZ</h1> -->
    <!-- <template v-if="active_area == 'all'"> -->
      <div class="wrapper" :style=" 'grid-template-areas: ' + grid_template_areas +';grid-template-columns: '+ get_grid_template_columns+';'" >
      <template v-for="(area, index) in areas">
        <template v-if="is_subarea(area)">
          <div :class="area + ' wrapper-part subgrid'" :key="index"
          :style="'grid-area: '+area+'; grid-template-areas: '+subgrids_message[area]"
          >
          <!-- <template v-if="Object.keys(grids[area].unique_areas.length).length > 1"> -->
            <template v-if="grids[area].unique_areas.length > 1">
              <template v-for="(subarea, index2) in grids[area].unique_areas">
                <div :key="index2" 
                :class="subarea + ' wrapper-part-deep'" 
                :style="'grid-area: '+subarea" >
                  
                  <p>{{subarea}} :{{ class_contents[subarea] }}</p>
                </div>
                
              </template>
            </template>
          </div>
        </template>
        <template v-else>
          <div :class="area + ' wrapper-part'" :style="'grid-area: '+area" >{{ area }}
            <p>{{area}} : {{ class_contents[area] }}</p>
          </div>
        </template>
      </template>
      </div>

      <input
      type="text"
      style="width:200px;"
      placeholder="class"
      class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple"
      v-model="user_class"
    /> 
      <input
      type="text"
      style="width:200px;"
      placeholder="input"
      class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple"
      @change="fill_class_content()"
      v-model="user_content"
    /> 
    <!-- </template> -->

    <!--
      <div class="header wrapper-part">Header</div>
      <div class="sidebar wrapper-part">Sidebar</div>
      <div class="content wrapper-part">Content</div>
      <div class="footer wrapper-part">Footer</div>
    -->
  </div>
</template>

<script>
let grid = [
  {id: 1, x: 1, y:1, name: "top"},
  {id: 2, x: 1, y:2, name: "top"},
  {id: 3, x: 1, y:3, name: "top"},
  {id: 4, x: 2, y:1, name: "side"},
  {id: 5, x: 2, y:2, name: "main"},
  {id: 6, x: 2, y:3, name: "main"},
  {id: 7, x: 3, y:1, name: "side"},
  {id: 8, x: 3, y:2, name: "main"},
  {id: 9, x: 3, y:3, name: "main"},
];

export default {
  name: "HelloWorld",
  data() {
    return {
      user_class: "",
      user_content: "",
      areas: ["all"],
      all_areas: ["all"],
      sub_areas: [1],
      calculating_areas: [],
      grid_columns: 3,
      grid_rows: 3,
      created_grid: {},
      whole_grid: {},
      form: {
        parent_id: []
      },
      grids: {},
      class_contents: {awd: "hi there"},
      active_area: 'all',
      grid_template_columns: 8,
      grid: grid,
      el1_1: 15,
      msg: "Welcome to Your Vue.js App",
      subgrids_message: {},
      grid_template_areas:
        "'hd hd hd hd   hd   hd   hd   hd   hd' 'sd sd sd main main main main main main' 'sd sd sd main main main main main main' 'sd sd sd main main main main main main' 'ft ft ft ft   ft   ft   ft   ft   ft'"
    };
  },

  mounted: function() {
    //this.loop_over_inputs();
  },

  computed: {
    get_grid_template_columns: function() {
      var line = '';
      for (var i = 1; i <= this.grid_columns; i++) {
        line = line + '1fr ';
      }
      return line;
    },

  },

   watch: {
      value(created_grid) {
          this.$el.innerHTML = v;
      }
  },

  methods: {
    fill_class_content() {
      this.class_contents[this.user_class] = this.user_content;
    },
    
    handle_row_controller(row) {
      var grid_columns = this.int_grid_columns();

      for (var column = 1; column <= grid_columns; column++) {
        // for (var row = 1; row <= grid_rows; row++) {
          // if (column == given_column) {
            // console.log(given_column);
            this.created_grid["col"+column+"row"+row] = this.form["row"+row];
          //}
        // }
      }

      this.form["row"+row] = '';
    },
    
    /* Sets every column to the given value */
    handle_column_controller(given_column) {
      var grid_rows = this.int_grid_rows();

      // for (var column = 1; column <= grid_columns; column++) {
        for (var row = 1; row <= grid_rows; row++) {
          // if (column == given_column) {
            console.log(given_column);
            this.created_grid["col"+given_column+"row"+row] = this.form["column"+given_column];
          //}
        }
      // }

      this.form["column"+given_column] = '';
      
      console.log("column done?");
    },

    handle_all_controller() {
      var grid_columns = this.int_grid_columns();
      var grid_rows = this.int_grid_rows();

      for (var column = 1; column <= grid_columns; column++) {
        for (var row = 1; row <= grid_rows; row++) {
          this.created_grid["col"+column+"row"+row] = this.form["all"];
        }
      }

      this.form["all"] = '';
      console.log("done?");
    },

    define_main_grid_areas() {
       this.build_main_grid();
    },

    enable_area(area_name) {
      console.log("area: "+area_name);
      console.log("active_area: "+this.active_area);
      
      //save the current grid:
      
      this.grids[this.active_area] =  {
        grid: this.created_grid,
        columns: this.int_grid_columns(),
        rows: this.int_grid_rows(),
        unique_areas: [...new Set(Object.values(this.created_grid))],
      };

      //reset
      this.created_grid = {};
    
      //if it is saved before, reload it
      if (this.grids[area_name] != undefined) {
        this.created_grid = this.grids[area_name].grid;
        this.grid_columns = this.grids[area_name].columns;
        this.grid_rows = this.grids[area_name].rows;

      //else lets create a new one!
      } else {
        this.created_grid = {};
        this.grid_columns = 4;
        this.grid_rows = 4;
      }

      //finally, set the active area
      this.active_area = area_name;
    },

    int_grid_columns: function() {
      return parseInt(this.grid_columns);
    },

  
    int_grid_rows: function() {
      return parseInt(this.grid_rows);
    },

    is_subarea: function(area) {
      return this.sub_areas.includes(area);
    },

    build_main_grid : function() {
      if (this.grids.all == undefined) {
        this.enable_area('all')
      }
      //first, show the main grid:
      let columns = this.grids.all.columns;
      let rows = this.grids.all.rows;
      this.grid_columns = columns;
      let current_grid = this.grids.all.grid;
      let message = '';
      let line = "";
      let areas = [];

      for (var row = 1; row <= rows; row++) {
        line = "";
        for (var column = 1; column <= columns; column++) {
          areas.push(this.grids.all.grid["col"+column+"row"+row]);
          line =
            line +
            this.grids.all.grid["col"+column+"row"+row] +
            " ";
          // console.log(line);
        }

        message = message + "'" + line + "' ";
      }
      this.grids.all.grid_template_areas = message;
      let distinctAreas = [...new Set(areas)];
      this.areas = distinctAreas;
      this.all_areas = distinctAreas;

      for (let area of distinctAreas) {
        if (this.grids[area] != undefined) {
          this.sub_areas.push(area);
          this.subgrids_message[area] = this.create_sub_grid(area); 
        }
      }

      console.log(message);
      this.msg = message;
      this.grid_template_areas = message;

    },

    create_sub_grid: function(name) {
      console.log(name);
      console.log(this.grids[name]);
      console.log(this.grids[name].columns);
      let columns = this.grids[name].columns;
      let rows = this.grids[name].rows;
      let message = '';
      let line = "";
      let areas = [];

      for (var row = 1; row <= rows; row++) {
        line = "";
        for (var column = 1; column <= columns; column++) {
          areas.push(this.grids[name].grid["col"+column+"row"+row]);
          line =
            line +
            this.grids[name].grid["col"+column+"row"+row] +
            " ";
          
        }

        message = message + "'" + line + "' ";
      }
      
      console.log("subgrid: "+ message);
      return message;
    },

    loop_over_inputs: function() {
      var grid_columns = this.int_grid_columns();
      var grid_rows = this.int_grid_rows();

      let areas = [];
      let message = "";
      let line = "";
      for (var i = 1; i <= grid_rows; i++) {
        line = "";
        for (var j = 1; j <= grid_columns; j++) {
          areas.push(document.getElementsByName("el" + i + "_" + j)[0].value);
          line =
            line +
            document.getElementsByName("el" + i + "_" + j)[0].value +
            " ";
        }

        message = message + "'" + line + "' ";
      }

      //set which areas are clickable, 
      if (this.active_area == 'all') {
        let distinctAreas = [...new Set(areas)];
        this.areas = distinctAreas;
      }
    
      this.msg = message;

      this.grid_template_areas = message;
      //this.grid_template_columns = grid_columns;
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
.wrapper {
  display: grid;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 10px;
}

.subgrid {
  display: grid;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 5px;
  background-color: lightgreen;
}

.wrapper-part {
  background-color: lightgrey;
}

.wrapper-part-deep {
  background-color: greenyellow;
}

.header {
  grid-area: hd;
}

.footer {
  grid-area: ft;
}
.content {
  grid-area: main;
}
.sidebar {
  grid-area: sd;
}

.h {
  grid-area: h;
}
.m {
  grid-area: m;
}
.f {
  grid-area: f;
}
.s {
  grid-area: s;
}

</style>
