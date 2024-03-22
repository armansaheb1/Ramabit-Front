<template>
  <div class="hello">
    <div style="font-weight: bold " class="banner"
      :class="{ 'bannerbg-dark': $store.state.isDark, 'bannerbg-light': !$store.state.isDark }">
      <div style="width: 100%; height: 100%; background: rgba(0,0,0,0.5);padding:5% ; padding-top:5%;">
        <h2 style="text-align:right; z-index:100; color:yellow ; font-family:'URWDINB'; font-size:50px">
          {{ general.banner_title }}
          <hr>
        </h2>
        <h4 style="color: white; text-align:right; margin: 0; text-shadow: black 2px 2px;">{{ general.banner_text }}
        </h4><br><br>
        <button v-if="!$store.state.isAuthenticated" @click="login()" class="btn btn-warning"
          style="font-family: 'Yekan'!important">ثبت نام</button>
        <a href="/dashboard"><button v-if="$store.state.isAuthenticated" class="btn btn-warning"
            style="font-family: 'Yekan'!important">شروع سرمایه گذاری</button></a>

      </div>
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
  mounted() {
    this.get_general()
  },
  methods: {
    login() {
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
.bannerbg-dark {
  background-color: #0B0E11;
  color: white
}

.bannerbg-light {
  color: black
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

.banner {
  width: 100%;
  height: 440px;
  background: url('../../public/blockchain-network-concept-free-video.jpg');
  background-size: 100%;
}

.banner::before {
  transform: scale(-1, 1);
}

.b-back {
  width: 70%;
  right: 15%
}

.mobile {
  display: block;
}

.nmobile {
  display: none;
}

@media only screen and (max-width: 700px) {
  .b-back {
    width: 100%;
    right: 0
  }

  .banner {
    width: 100%;
    height: 300px;
    background: url('../../public/blockchain-network-concept-free-video.jpg');
    background-size: 100%;
  }

  .mobile {
    display: none;
  }

  .nmobile {
    display: block;
  }
}
</style>
<style></style>