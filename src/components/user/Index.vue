<template>
  <div class="hello">
    <div style="font-weight: bold;padding:5% ; padding-top:5%; " class="banner" :class="{'bannerbg-dark' :$store.state.isDark, 'bannerbg-light' :!$store.state.isDark}">
      <h1 style="text-align:right; z-index:100; color:yellow ; font-family:'URWDINB'; font-size:64px" >{{general.banner_title}} <hr></h1><br class="nmobile">
      <h3 style="color: white; text-align:right">{{general.banner_text}}</h3><br><br>
      <button style="font-family: 'Yekan';" v-if="!$store.state.isAuthenticated" @click="login()" class="btn btn-warning" >ثبت نام</button>
      <a href="/dashboard"><button v-if="$store.state.isAuthenticated"  class="btn btn-warning" style="">شروع سرمایه گذاری</button></a>
       
      
    </div>

    

    
    <vue-final-modal style="width:100% ; background:none" v-model="$store.state.showloginindex">
      <login />
    </vue-final-modal>
    
  </div>
</template>

<script>
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal'

import login from '../components/Login2.vue'
import axios from 'axios'

export default {
  name: 'Index',
  props: {
    msg: String,
  },
  data: () => ({
    showModal: [],
    general: {}
  }),
  components: {
    VueFinalModal,
    ModalsContainer,
    login
  },
  mounted(){
    this.get_general()
  },
  methods:{
    login(){
      this.$store.state.showloginindex = true
    },
    async get_general() {
      await axios
        .get('general')
        .then(response => response.data)
        .then(response => {
        this.general = response
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bannerbg-dark{
  background-color: #0B0E11;
  color:white
}
.bannerbg-light{
  color:black
}
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
  height: 440px;
  background: url('https://static.vecteezy.com/system/resources/thumbnails/002/021/615/original/blockchain-network-concept-free-video.jpg');
  background-size: 100%;
}
.b-back{
    width:70%;
    right:15% 
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
    right:0 
  }
  .mobile{
    display: none;
  }
  .nmobile{
    display: block;
  }
}
</style>
<style>

</style>