<template>
    <div class="hello"><br>
    <h2 style="text-align:left; margin: 25px">Coins Management</h2>
        <div class="col-11 card" style="margin:auto ; text-align: left">
            <div class="card-header" :class="{'bannerbg-dark' :$store.state.isDark, 'bannerbg-light' :!$store.state.isDark}">
              <ul  class="nav nav-tabs">
                <li class="nav-item">
                  <a @click="tab = 'Availablity'" class="nav-link" :class="{'active' : this.tab === 'Availablity'}" style="color:grey ; cursor:pointer">Availablity</a>
                </li>
                <li class="nav-item">
                  <a @click="tab = 'Limits'" class="nav-link" :class="{'active' : this.tab === 'Limits'}" style="color:grey ; cursor:pointer">Limits</a>
                </li>
                <li class="nav-item">
                  <a @click="tab = 'Fees'" class="nav-link" :class="{'active' : this.tab === 'Fees'}" style="color:grey ; cursor:pointer">Fees</a>
                </li>
                <li class="nav-item">
                  <a @click="tab = 'Whole'" class="nav-link" :class="{'active' : this.tab === 'Whole'}" style="color:grey ; cursor:pointer">Whole Part Availablity</a>
                </li>
              </ul>
            </div>
            <div class="card-body" :class="{'bg-light' : !$store.state.isDark,  'bg-dark' : $store.state.isDark}" >
                <availablity v-if="tab == 'Availablity'" />
                <minandmax v-if="tab == 'Limits'" />
                <fees v-if="tab == 'Fees'" />
                <wholeavailablity v-if="tab == 'Whole'" />
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
      tab: 'Availablity',
    }
  },
  mounted(){
    this.get_coins()
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
        .get('/coins')
        .then(response => {
          console.log(response.data)
          this.leverage = response.data
          this.leverageback = response.data
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
