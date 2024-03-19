<template>
    <div style="overflow-x: auto" class="hello"><br>
      <table  class="table">
        <thead>
          <tr>
            <th>
              Currency
            </th>
            <th>
              Min In
            </th>
            <th>
              Max In
            </th>
            <th>
              Min Out
            </th>
            <th>
              Max Out
            </th>
            <th>
              Min Trade
            </th>
            <th>
              Max Trade
            </th>
             <th>
              Min Swap
            </th>
            <th>
              Max Swap
            </th>
            <th>
              Opreations
            </th>
          </tr>
        </thead>
        <tbody>
          <tr  v-for="(item, idx) in currencies" v-bind:key="idx">
            <th>{{item.get_currency}}</th>
            <th><input v-model="item.min_in" class="form-control" type="text"></th>
            <th><input v-model="item.max_in" class="form-control" type="text"></th>
            <th><input v-model="item.min_out" class="form-control" type="text"></th>
            <th><input v-model="item.max_out" class="form-control" type="text"></th>
            <th><input v-model="item.min_trade" class="form-control" type="text"></th>
            <th><input v-model="item.max_trade" class="form-control" type="text"></th>
            <th><input v-model="item.min_swap" class="form-control" type="text"></th>
            <th><input v-model="item.max_swap" class="form-control" type="text"></th>
            <th><button @click="click(idx)" class="btn btn-dark">Submit</button></th>
          </tr>
        </tbody>
      </table>
    </div>
    

</template>

<script>
import axios from 'axios'
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal'


export default {
  name: 'availablity',
  props: {
    msg: String,
  },
  data:() =>{
    return {
      showModal: false,
      tab: 'Availablity',
      currencies: [],
    }
  },
  mounted(){
    this.get_coins()
  },
  components: {
    VueFinalModal,
    ModalsContainer,
  },
  methods:{
    async get_coins(){
      await axios
        .get('/limits')
        .then(response => {
          this.currencies = response.data
        })
    },
    async click(id){
      await axios
        .post(`/limits/${this.currencies[id]['id']}`, {min_in: this.currencies[id]['min_in'], max_in: this.currencies[id]['max_in'], min_out: this.currencies[id]['min_out'], max_out: this.currencies[id]['max_out'], min_trade: this.currencies[id]['min_trade'], max_trade: this.currencies[id]['max_trade'], min_swap: this.currencies[id]['min_swap'], max_swap: this.currencies[id]['max_swap']})
        .then(response => {
          this.currencies = response.data
        })
    }
  }
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
.banner{
  width: 100%;
  
}
.b-back{
    width:70%;
    left:15% 
  }
.mobile{
  display: block;
}
.nmobile{
  display: none;
}
@media only screen and (max-width: 700px) {
  .b-back{
    width:100%;
    left:0 
  }
  .mobile{
    display: none;
  }
  .nmobile{
    display: block;
  }
}
</style>
