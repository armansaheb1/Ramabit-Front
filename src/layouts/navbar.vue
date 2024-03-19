<template>
  <div>
    <nav style="height:81px; border-bottom: solid lightgrey 1px; direction: rtl;" class="navbar navbar-expand-lg"
      :class="{ 'bg-light': !$store.state.isDark, 'bg-dark': $store.state.isDark }">
      <div class="container-fluid">
        <a class="navbar-brand" href="/"><img style="height:60px ; margin-left:10px"
            src="https://www.ramabit.com/media/settings/ramabit.jpg" alt=""></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="width: 100%;">
            <li class="nav-item ">
              <a class="nav-link " href="/" id="navbarDropdown" role="button" aria-expanded="false">
                خانه
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/blog" id="navbarDropdown" role="button" aria-expanded="false">
                بلاگ
              </a>

            </li>
            <li class="nav-item ">
              <a class="nav-link " href="/contact-us" id="navbarDropdown" role="button" aria-expanded="false">
                تماس با ما
              </a>

            </li>
            <li class="nav-item">
              <a class="nav-link " href="/about-us" id="navbarDropdown" role="button" aria-expanded="false">
                ارتباط با ما
              </a>

            </li>
            <li class="nav-item">
              <a v-if="$store.state.isAuthenticated" class="nav-link " href="/dashboard" id="navbarDropdown"
                role="button" aria-expanded="false">
                ورود به پنل
              </a>

            </li>
            <li class="nav-item">
              <a v-if="$store.state.isAuthenticated" class="nav-link " href="/logout" id="navbarDropdown" role="button"
                aria-expanded="false">
                خروج
              </a>
            </li>
          </ul>

          <ul class="navbar-nav  mb-2 mb-lg-0" style="font-size:23px">
            <li class="nav-item ">
              <a style="margin-right:15px" v-if="!$store.state.isDark" @click="darker()" class="nav-link " href="#"
                id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <font-awesome-icon icon="moon" />
              </a>
              <a style="margin-right:15px" v-if="$store.state.isDark" @click="lighter()" class="nav-link " href="#"
                id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <font-awesome-icon icon="sun" />
              </a>
            </li>


            <li> </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <font-awesome-icon icon="circle-user" />
              </a>
              <ul v-if="$store.state.isAuthenticated" class="dropdown-menu" aria-labelledby="navbarDropdown"
                style="left:5px">
                <li><a class="dropdown-item" href="/dashboard/" style="color:blue">{{ name }}</a></li>
                <li><a class="dropdown-item" href="/dashboard/profile">Profile</a></li>
                <li><a class="dropdown-item" href="#">Membership</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><router-link to="/logout" class="dropdown-item" href="#">Logout</router-link></li>
              </ul>
              <ul v-if="!$store.state.isAuthenticated" class="dropdown-menu" aria-labelledby="navbarDropdown"
                style="left:5px">
                <li><a @click="login()" class="dropdown-item" href="#">LOGIN</a></li>
                <li><a @click="login()" class="dropdown-item" href="#">REGISTER</a></li>
              </ul>
            </li>
          </ul>

        </div>
      </div>
    </nav>
    <vue-final-modal style="width:100% ; background:none" v-model="showModal">
      <login />
    </vue-final-modal>
  </div>
</template>

<script>
import axios from 'axios'
import login from './../components/Login2.vue'
export default {
  name: 'navbar',
  props: {
    msg: String
  },
  components: {
    login
  },
  mounted() {
    this.get_user()
  },
  data() {
    return {
      showModal: false,
      name: '',
    }
  },
  methods: {
    async get_user() {
      await axios
        .get('/user')
        .then(response => response.data)
        .then(response => {
          this.name = `${response.name} ${response.last_name}`
        })
    },
    login() {
      this.showModal = true
    },
    darker() {
      this.$store.state.isDark = true
      localStorage.setItem('isDark', true)
      if (this.$store.state.isDark) {
        document.querySelector('html').style.background = "#0B0E11"
      } else {
        document.querySelector('html').style.background = "#fff"
      }
    },
    lighter() {
      this.$store.state.isDark = false
      localStorage.setItem('isDark', false)
      if (this.$store.state.isDark) {
        document.querySelector('html').style.background = "#0B0E11"
      } else {
        document.querySelector('html').style.background = "#fff"
      }
    },
  }
}
</script>

<style scoped></style>
