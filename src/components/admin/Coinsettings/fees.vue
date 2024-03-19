<template>
    <div style="overflow-x: auto" class="hello"><br>
      <table  class="table">
        <thead>
          <tr>
            <th>
              Currency
            </th>
            <th>
              Out (Price)
            </th>
            <th>
              Trade (%)
            </th>
            <th>
              Swap (%)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr  v-for="(item, idx) in currencies" v-bind:key="idx">
            <th>{{item.get_currency}}</th>
            <th><input v-model="item.out" class="form-control" type="text"></th>
            <th><input v-model="item.trade" class="form-control" type="text"></th>
            <th><input v-model="item.swap" class="form-control" type="text"></th>
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
        .get('/fees')
        .then(response => {
          this.currencies = response.data
        })
    },
    async click(id){
      await axios
        .post(`/fees/${this.currencies[id]['id']}`, {out: this.currencies[id]['out'], swap: this.currencies[id]['swap'], trade: this.currencies[id]['trade']})
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
