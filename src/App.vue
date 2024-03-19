<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: '',
  data() {
    return {
      height: 0
    }
  },
  mounted() {
    if (this.$store.state.isDark) {
      document.querySelector('html').style.background = "#0B0E11"
    } else {
      document.querySelector('html').style.background = "#fff"
    }
    this.get_height()
  },
  methods: {
    get_height() {
      this.height = window.innerHeight
    }
  },
  beforeCreate() {
    this.$store.commit('initializeStore')

    const token = this.$store.state.token

    if (token) {
      axios.defaults.headers.common['Authorization'] = "Token " + token
      this.$store.state.isAuthenticated = true
    } else {
      axios.defaults.headers.common['Authorization'] = ""
      this.$store.state.isAuthenticated = false
    }
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Sarpanch:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Sarpanch:wght@800;900&display=swap');

@font-face {
  font-family: 'Yekan';
  src: url('../public/Yekan.eot');
  src: url('../public/Yekan.eot?#iefix') format('embedded-opentype'),
    url('../public/Yekan.ttf') format('truetype');
  font-weight: normal;
}

label {
  margin: 5px
}

* {
  font-family: 'Yekan' !important
}

.btn {
  font-family: 'Yekan' !important
}

.bg-dark input,
.bg-dark input:read-only,
.bg-dark textarea,
.bg-dark select,
.bg-dark option,
.bg-dark .dropdown-menu {
  background: #222;
  color: white !important
}

.bg-dark input:focus,
.bg-dark input:read-only,
.bg-dark textarea:focus,
.bg-dark select:focus,
.bg-dark option:hover,
.bg-dark .dropdown-menu li a:hover {
  background: #333 !important;
  color: white !important
}

.bannerbg-dark {
  background-color: #0B0E11;
  color: lightgrey
}

.bannerbg-light {
  color: black
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: grey;
  font-weight: bold;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.btn {
  font-family: 'arial' !important
}

.bg-dark div,
.bg-dark a,
.bg-dark h1,
.bg-dark h2,
.bg-dark h3,
.bg-dark h4,
.bg-dark h5,
.bg-dark h6,
.bg-dark h,
.bg-dark span,
.bg-dark table,
.bg-dark label {
  color: lightgray !important
}

.bg-light div,
.bg-light a,
.bg-light h1,
.bg-light h2,
.bg-light h3,
.bg-light h4,
.bg-light h5,
.bg-light h6,
.bg-light h,
.bg-light span,
.bg-light table,
.bg-light label {
  color: #666 !important
}
</style>
