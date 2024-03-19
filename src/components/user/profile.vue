<template>
  <div class="hello" style="padding: 5%;padding-top: 5%">

    <div class="card">
      <div class="card-header" :class="{ 'bannerbg-dark': $store.state.isDark, 'bannerbg-light': !$store.state.isDark }"
        style="">
        پروفایل
      </div>
      <div class="card-body" :class="{ 'bg-light': !$store.state.isDark, 'bg-dark': $store.state.isDark }"
        style="text-align: justify;direction: rtl;">

        <div>
          نام <input class="form-control" readonly style="color: black" v-model="user.name">
          نام خانوادگی <input class="form-control" readonly style="color: black" v-model="user.lastname">
          نام کاربری <input class="form-control" readonly style="color: black" v-model="user.username">
          تلفن <input class="form-control" readonly style="color: black" v-model="user.mobile">
          ایمیل <input class="form-control" readonly style="color: black" v-model="user.email">



          <div class="title" style="width:90%;margin:auto;margin-top:30px;text-align:center"> تغییر کلمه عبور </div>


          <div class="autoplay">
            کلمه عبور قبلی <input class="form-control" type="password" name="opassword">
            کلمه عبور جدید <input class="form-control" type="password" name="password">
            تکرار کلمه عبور <input class="form-control" type="password" name="repassword">
            <br>
            <a class="btn btn-success">تغییر رمز</a>

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
    user: ''
  }),
  components: {
    VueFinalModal,
    ModalsContainer,
  },
  mounted() {
    this.get_user()
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