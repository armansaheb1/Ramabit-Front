<template>
  <div class="hello" style="padding: 5%">

    <div class="card">
      <div class="card-header"
        :class="{ 'bannerbg-dark': $store.state.isDark, 'bannerbg-light': !$store.state.isDark }">
        استخدام
      </div>
      <div class="card-body" :class="{ 'bg-light': !$store.state.isDark, 'bg-dark': $store.state.isDark }"
        style="text-align: justify;direction: rtl;">

        <form style="text-align: center;width: 90%; margin: auto; margin-top: 50px" action="addjob" method="POST"
          enctype="multipart/form-data">
          <input class="form-control" type="text" name="title" placeholder="تیتر" required><br>
          <select class="form-control" type="text" name="job" value="1" required>
            <option value="1" selected disabled>موقعیت شغلی مورد نظر</option>
            <option value="2">تریدر</option>
            <option value="3">توسعه دهنده</option>
          </select>
          <br>
          <textarea class="form-control" name="des" rows="5" cols="25" placeholder="متن" required></textarea><br>

          <input hidden type="text" name="place" id="place" value="normal">

          <input class="btn btn-info" type="submit">
        </form>
      </div>



    </div><br><br>

    <div hidden class="card">
      <div class="card-header"
        :class="{ 'bannerbg-dark': $store.state.isDark, 'bannerbg-light': !$store.state.isDark }">
        استخدام
      </div>
      <div class="card-body" :class="{ 'bg-light': !$store.state.isDark, 'bg-dark': $store.state.isDark }"
        style="text-align: justify;direction: rtl;">





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