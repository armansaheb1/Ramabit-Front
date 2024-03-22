<template>
  <div class="hello" style="padding: 5%;padding-top: 5%">

    <div class="card">
      <div class="card-header" :class="{ 'bannerbg-dark': $store.state.isDark, 'bannerbg-light': !$store.state.isDark }"
        style="">
        تاریخچه درآمد ها
      </div>
      <div class="card-body" :class="{ 'bg-light': !$store.state.isDark, 'bg-dark': $store.state.isDark }"
        style="text-align: justify;direction: rtl;">
        <div class="card" :class="{ 'bannerbg-dark': $store.state.isDark, 'bannerbg-light': !$store.state.isDark }">
          <table class="table" style="margin: 0">
            <thead>
              <tr style="color: grey">
                <th scope="col">کاربر</th>
                <th scope="col">نوع ارز</th>
                <th scope="col">نوع پلن</th>
                <th scope="col">مبلغ</th>
                <th scope="col">زمان تراکنش </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in profits" v-bind:key="item">
                <th scope="col">{{ item[0] }}</th>
                <th scope="col">{{ item[4] }}</th>
                <th scope="col">{{ item[1] }}</th>
                <th scope="col">{{ item[2] }}</th>
                <th scope="col">{{ item[3] }} </th>
              </tr>
            </tbody>
          </table>
        </div>




      </div>
    </div>
  </div>
</template>

<script>
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal'

import axios from 'axios'

export default {
  name: 'Index',
  props: {
    msg: String,
  },
  data: () => ({
    showModal: [],
    profits: [],
    currency: '',
    plans: [],
    plan: '',
    pic: ''
  }),
  components: {
    VueFinalModal,
    ModalsContainer,
  },
  mounted() {
    this.get_profits()
  },
  methods: {
    login() {
      this.$store.state.showloginindex = true
    },
    async get_profits() {
      await axios
        .get(`profits`)
        .then(response => response.data)
        .then(response => {
          this.profits = response
        })
    },
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