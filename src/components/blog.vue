<template>
  <div class="hello" style="padding: 15%;padding-top: 5%">
    <div v-for="item in posts">

      <div class="card">
        <div class="card-body" :class="{'bg-light' : !$store.state.isDark,  'bg-dark' : $store.state.isDark}" style="text-align: justify;direction: rtl;">
          <img class="card-body" style="width: 100%" :src="'http://127.0.0.1:8000/'+item.pic" alt="">
          <br>
          <h2 class="card-body">
            {{ item.title }}
          </h2>
          <div class="card-body">
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
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
    posts: []
  }),
  components: {
    VueFinalModal,
    ModalsContainer,
    login
  },
  mounted() {
    this.get_posts()
  },
  methods: {
    login() {
      this.$store.state.showloginindex = true
    },
    async get_posts() {
      await axios
        .get('posts')
        .then(response => response.data)
        .then(response => {
          this.posts = response
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
  background: url('https://static.vecteezy.com/system/resources/thumbnails/002/021/615/original/blockchain-network-concept-free-video.jpg');
  background-size: 100%;
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

  .mobile {
    display: none;
  }

  .nmobile {
    display: block;
  }
}
</style>
<style></style>