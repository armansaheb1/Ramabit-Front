<template>
  <div class="col-11" style="margin:auto ; margin-top:30px">
    <h2 style="text-align:left">Main Page</h2>
    <div class="card">
      <div class="card-header" :class="{'bannerbg-dark' :$store.state.isDark, 'bannerbg-light' :!$store.state.isDark}">
        <h3 style="margin:0">Main Banner</h3>
      </div>
      <div class="card-body" :class="{'bg-light' : !$store.state.isDark,  'bg-dark' : $store.state.isDark}">
        <form @submit.prevent="submit()">
        <label for="" style="text-align:left; float:left">Main title</label>
        <input required v-model="name"  type="text" class="form-control" placeholder="Name of plan">
        <label for="" style="text-align:left; float:left">Main title Hex Color</label>
        <input required v-model="name"  type="text" class="form-control" placeholder="Name of plan">
        <label for="" style="text-align:left; float:left">Second title</label>
        <input required v-model="name"  type="text" class="form-control" placeholder="Name of plan">
        <label for="" style="text-align:left; float:left">Second title Hex Color</label>
        <input required v-model="name"  type="text" class="form-control" placeholder="Name of plan">
        <label for="" style="text-align:left; float:left">Button Hex Color</label>
        <input required v-model="percent" type="number" class="form-control" placeholder="Profit Percent">
        <label for="" style="text-align:left; float:left">Button Name</label>
        <input required v-model="percent" type="number" class="form-control" placeholder="Profit Percent">
        <label for="" style="text-align:left; float:left">Button Link</label>
        <input required v-model="percent" type="number" class="form-control" placeholder="Profit Percent">
        <label for="" style="text-align:left; float:left">Banner Background</label>
        <input type="file" class="form-control"><br>

        <button class="form-control btn btn-secondary">Submit</button>
        </form>
      </div>

    </div><br><br>

    <div class="card">
      <div class="card-header" :class="{'bannerbg-dark' :$store.state.isDark, 'bannerbg-light' :!$store.state.isDark}">
        <h3 style="margin:0">Add Slides</h3>
      </div>
      <div class="card-body" :class="{'bg-light' : !$store.state.isDark,  'bg-dark' : $store.state.isDark}">
        <form @submit.prevent="submit()">
        <label for="" style="text-align:left; float:left">Main title</label>
        <input required v-model="name"  type="text" class="form-control" placeholder="Name of plan">
        <label for="" style="text-align:left; float:left">Main title Hex Color</label>
        <input required v-model="name"  type="text" class="form-control" placeholder="Name of plan">
        <label for="" style="text-align:left; float:left">Image</label>
        <input type="file" class="form-control"><br>

        <button class="form-control btn btn-secondary">Submit</button>
        </form>
      </div>

    </div><br><br>
    <div class="card">
      <div class="card-header" :class="{'bannerbg-dark' :$store.state.isDark, 'bannerbg-light' :!$store.state.isDark}">
        <h3 style="margin:0">Slides</h3>
      </div>
      <div class="card-body" :class="{'bg-light' : !$store.state.isDark,  'bg-dark' : $store.state.isDark}">
        <table class="table">
            <thead  class="nmobile">
                <tr>
                    <th>
                        Name
                    </th>
                    <th class="nmobile">
                        Coin
                    </th>
                    <th>
                        Period
                    </th>
                    <th>
                        Percent
                    </th>
                    <th class="nmobile">
                        Min
                    </th>
                    <th class="nmobile">
                        Max
                    </th>
                    <th>
                        Operations
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in plans" v-bind:key="item">
                    <td>
                        {{item.name}}
                    </td>
                    <td class="nmobile">
                        {{item.get_coin}}
                    </td>
                    <td>
                        {{item.period}}
                    </td>
                    <td>
                        {{item.percent}}
                    </td>
                    <td class="nmobile">
                        {{item.min}}
                    </td>
                    <td class="nmobile">
                        {{item.max}}
                    </td>
                    <td>
                        <button class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import availablity from './Coinsettings/availablity.vue'
import minandmax from './Coinsettings/minandmax.vue'
import fees from './Coinsettings/fees.vue'
import wholeavailablity from './Coinsettings/wholeavailablity.vue'
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal'


export default {
  name: 'overview',
  props: {
    msg: String,
  },
  data:() =>{
    return {
      showModal: false,
      currencies: [],
      plans: [],
      name: '',
      coin: '',
      percent: '',
      period: '',
      min: '',
      max: '',
    }
  },
  mounted(){
    this.get_coins()
    this.get_plans()
  },
  components: {
    VueFinalModal,
    ModalsContainer,
    availablity,
    minandmax,
    fees,
    wholeavailablity
  },
  methods:{
    async get_coins(){
      await axios
        .get('/cp_currencies')
        .then(response => {
          console.log(response.data)
          this.currencies = response.data
        })
    },
    async get_plans(){
      await axios
        .get('/plan')
        .then(response => {
          console.log(response.data)
          this.plans = response.data
        })
    },
    async submit(){
        const formData = {
          name: this.name,
          currency: this.coin,
          percent: this.percent,
          period: this.period,
          min: this.min,
          max: this.max
        }
        console.log(formData)
      await axios
        .post('/plan', formData)
        .then(response => {
          console.log(response.data)
          this.plans = response.data
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media only screen and (max-width: 700px) {
  .nmobile{
    display: none;
  }
}
</style>
