<template>
  <div style="z-index:1000; border-left: solid lightgrey 1px; min-height:100%">
    <nav style="height:80px" class="navbar navbar-expand-lg"
      :class="{ 'bg-light': !$store.state.isDark, 'bg-dark': $store.state.isDark }">
      <a v-if="$store.state.collapse" @click="collapse()"
        style="cursor:pointer;color:grey ; font-size: 30px ; margin-left: 15px"><font-awesome-icon
          icon="angles-left" /></a>
      <a v-if="!$store.state.collapse" @click="collapse()"
        style="cursor:pointer;color:grey ; font-size: 30px ; position:absolute ; right: 10px"
        class="lefty"><font-awesome-icon icon="angles-right" /></a>
      <a v-if="!$store.state.collapse" class="navbar-brand" href="/"
        style="font: 25px 'arial'; color:#efefef ; height:70px ; padding:10% ; text-align:center ;float:left"> </a>
    </nav>
    <nav class="navbar" :class="{ 'bg-light': !$store.state.isDark, 'bg-dark': $store.state.isDark }"
      style=" padding:0">
      <div class="" style=" border-top: solid lightgrey 1px ;padding:0 ; width:100% ; text-align:left">

        <SidenavLink :active="true" style="width:100%" icon="list" href="/admin-dashboard"> <a
            v-if="!$store.state.collapse"> Overview </a></SidenavLink>
        <SidenavLink :active="true" style="width:100%" icon="coins" href="/admin-dashboard/coin-management"><a
            v-if="!$store.state.collapse"> Coins</a></SidenavLink>
        <SidenavLink :active="true" style="width:100%" icon="chart-line" href="/admin-dashboard/saving-plans"><a
            v-if="!$store.state.collapse"> Saving Plans </a></SidenavLink>
        <SidenavLink :active="true" style="width:100%" icon="print" href="/admin-dashboard/mainpage"><a
            v-if="!$store.state.collapse"> Main Page</a></SidenavLink>
        <SidenavLink :active="true" style="width:100%" icon="globe" href="/admin-dashboard/print-orders"><a
            v-if="!$store.state.collapse"> My Website Orders </a></SidenavLink>
      </div>
    </nav>
  </div>
</template>

<script>
import SidenavLink from './sidebar/SidenavLink.vue'
import SidenavMenu from './sidebar/SidenavMenu.vue'
import SidenavRouterLink from './sidebar/SidenavRouterLink.vue'
import Toggle from '@vueform/toggle'

import axios from 'axios'
export default {
  name: 'sidebar',
  props: {
    msg: String
  },
  components: {
    SidenavLink,
    SidenavMenu,
    SidenavRouterLink,
    Toggle,
  },
  beforeMount() {
    this.get_u = async () => {
      await axios
        .get('/user')
        .then()
        .catch(() => {
          const toPath = '/login'
          this.$router.push(toPath)
        })
    }
    this.get_u()
  },
  mounted() {
  },
  data() {
    return {
      showModal: false,
      freelancer: false,
      name: '',
    }
  },
  methods: {
    collapse() {
      this.$store.state.collapse = !this.$store.state.collapse
    },
    async get_user() {
      await axios
        .get('/user')
        .then(response => response.data)
        .then(response => {
          this.name = `${response.name} ${response.last_name}`
          this.freelancer = response.freelancer
        }).catch(() => {
          const toPath = '/'
          this.$router.push(toPath)
        })
    },
    async toggle() {
      await axios
        .post('/togglerole')
        .then(response => {
          const toPath = '/dashboard'
          this.$router.push(toPath)
        })
    },
    login() {
      this.showModal = true
    }
  }
}
</script>

<style src="@vueform/toggle/themes/default.css"></style>
<style>
.toggle {
  width: 100%;
  height: 30px;
}

.toggle-red {
  --toggle-bg-on: darkblue;
  --toggle-border-on: darkblue;
}

.toggle-label {
  margin-right: 35px;
  font-weight: bold;
  margin-left: 5px
}

.toggle-handle {
  height: 30px;
  width: 30px
}
</style>
