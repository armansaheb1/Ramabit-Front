<template>
    <div class="hello"><br>
      <table class="table">
        <thead>
          <tr>
            <th>
              Currency
            </th>
            <th>
              Spot Trading
            </th>
            <th>
              Swap
            </th>
            <th>
              Savings
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in currencies" v-bind:key="item">
            <th>{{item.get_currency}}</th>
            <th><button @click="click(item.id , 'spot')" class="btn btn-danger" v-if="item.spot">Disable</button> <button @click="click(item.id , 'spot')" class="btn btn-success" v-if="!item.spot">Enable</button> </th>
            <th><button @click="click(item.id , 'swap')" class="btn btn-danger" v-if="item.swap">Disable</button> <button @click="click(item.id , 'swap')" class="btn btn-success" v-if="!item.swap">Enable</button> </th>
            <th><button @click="click(item.id , 'savings')" class="btn btn-danger" v-if="item.savings">Disable</button> <button @click="click(item.id , 'savings')" class="btn btn-success" v-if="!item.savings">Enable</button> </th>
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
      currencies: []
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
        .get('/availablity')
        .then(response => {
          console.log(response.data)
          this.currencies = response.data
        })
    },
    async click(id, part){
      await axios
        .post(`/availablity/${id}/${part}`)
        .then(response => {
          console.log(response.data)
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
