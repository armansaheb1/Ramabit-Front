<template>
  <div class="hello" style="padding: 5%;padding-top: 5%">

    <div class="card">
      <div class="card-header"
        :class="{ 'bannerbg-dark': $store.state.isDark, 'bannerbg-light': !$store.state.isDark }">
        موجودی حساب ها
      </div>
      <div class="card-body" :class="{ 'bg-light': !$store.state.isDark, 'bg-dark': $store.state.isDark }"
        style="text-align: justify;direction: rtl;">
        <div class="autoplay" style="width: 90%;margin: auto;height:auto;overflow-y:hidden">
          <div v-for="item in  wallets " v-bind:key="item" class="card card-body wals"
            :class="{ 'bannerbg-dark': $store.state.isDark, 'bannerbg-light': !$store.state.isDark }">
            <img style="position:relative;width: 60%; margin: 0 20%; margin-top: 20px;float:none; aspect-ratio:1/1;"
              :src="item[0]">
            <h6 style="margin: auto; margin-top: 20px;text-align: center;font-family:'calibri';">{{ item[1] }}</h6>
            <h4 style="margin: auto; margin-top: 20px;text-align: center;font-family:'calibri';">{{ item[2] }}</h4><br>
            <form>
              <a href="/dashboard/charge" class="btn btn-success form-control"> واریز</a>

            </form><br>
            <form action="admindecrease" method="POST">
              <a href="/dashboard/withdraw" class="btn btn-danger form-control"> برداشت</a>


            </form>
          </div>
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
    user: '',
    wallets: []
  }),
  components: {
    VueFinalModal,
    ModalsContainer,
  },
  mounted() {
    this.get_user()
    this.get_wallets()
  },
  methods: {
    login() {
      this.$store.state.showloginindex = true
    },
    async get_user() {
      await axios
        .get(`user`)
        .then(response => response.data)
        .then(response => {
          this.user = response
        })
    },
    async get_wallets() {
      await axios
        .get(`wallets`)
        .then(response => response.data)
        .then(response => {
          console.log(response)
          this.wallets = response
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

.wals {
  width: 27%;
  float: left;
  margin: 3%
}

@media only screen and (max-width: 700px) {
  .wals {
    width: 44%;
    float: left;
    margin: 3%;
  }

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

@media only screen and (max-width: 400px) {
  .wals {
    width: 94%;
    float: left;
    margin: 3%;
  }

}
</style>
<style></style>