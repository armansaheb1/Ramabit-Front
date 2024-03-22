<template>
  <div style="z-index:1000; height: 100%; border-left: solid #333 1px">
    <nav style="height:80px " class="navbar navbar-expand-lg"
      :class="{ 'bg-light': !$store.state.isDark, 'bg-dark': $store.state.isDark }">
      <a v-if="$store.state.collapse" @click="collapse()"
        style="cursor:pointer;color:grey ; font-size: 30px ; margin-left: 15px; margin-top: 15px"><font-awesome-icon
          icon="angles-left" /></a>
      <a v-if="!$store.state.collapse" @click="collapse()"
        style="cursor:pointer;color:grey ; font-size: 30px ; position:absolute ; left: 10px"
        class="lefty"><font-awesome-icon icon="angles-right" /></a>
      <a v-if="!$store.state.collapse" class="navbar-brand" href="/"
        style="font: 18px 'arial'; color:#efefef ; height:70px ; padding:10% ; text-align:center ;float:left"> </a>
      <a v-if="$store.state.collapse" class="navbar-brand" href="/"
        style="font: 18px 'arial'; color:#efefef ; height:70px ; padding:10% ; text-align:center ;float:left"> </a>
    </nav>
    <nav class="navbar" style=" border-top: solid #333 1px ;padding:0; direction:rtl">
      <div class="" style="padding:0 ; width:100% ; text-align:left">
        <SidenavLink style="width:100%; font-weight:light" icon="list" href="/dashboard"><a
            v-if="!$store.state.collapse"> داشبورد</a></SidenavLink>
        <SidenavLink style="width:100%; font-weight:light" icon="user" href="/dashboard/profile"><a
            v-if="!$store.state.collapse"> پروفایل</a></SidenavLink>
        <SidenavLink style="width:100%; font-weight:light" icon="wallet" href="/dashboard/my-plans"><a
            v-if="!$store.state.collapse"> پلن ها</a></SidenavLink>
        <SidenavLink style="width:100%; font-weight:light" icon="shopping-cart" href="/dashboard/balances"><a
            v-if="!$store.state.collapse"> موجودی ها</a></SidenavLink>
        <SidenavLink style="width:100%; font-weight:light" icon="shopping-cart" href="/dashboard/jobs"><a
            v-if="!$store.state.collapse"> کسب درآمد</a></SidenavLink>
        <SidenavLink style="width:100%; font-weight:light" icon="exchange" href="/dashboard/charge"><a
            v-if="!$store.state.collapse"> شارژ حساب</a></SidenavLink>
        <SidenavLink style="width:100%; font-weight:light" icon="money-bill" href="/dashboard/withdraw"><a
            v-if="!$store.state.collapse"> برداشت </a></SidenavLink>
        <SidenavLink style="width:100%; font-weight:light" icon="money-bill" href="/dashboard/profit-history"><a
            v-if="!$store.state.collapse"> درآمد ها</a></SidenavLink>
        <SidenavLink style="width:100%; font-weight:light" icon="users" href="/dashboard/transactions"><a
            v-if="!$store.state.collapse"> تراکنش ها</a></SidenavLink>
        <SidenavLink hidden style="width:100%; font-weight:light" icon="exchange" href="/dashboard/support"><a
            v-if="!$store.state.collapse"> پشتیبانی</a></SidenavLink>
        <SidenavLink hidden style="width:100%; font-weight:light" icon="exchange" href="/dashboard/verify"><a
            v-if="!$store.state.collapse"> احراز هویت</a></SidenavLink>
        <SidenavLink style="width:100%; font-weight:light" icon="sign-out" href="/logout"><a
            v-if="!$store.state.collapse"> خروج </a></SidenavLink>
      </div>

    </nav>
  </div>
</template>

<script>
import SidenavLink from './sidebar/SidenavLink.vue'
import SidenavRouterLink from './sidebar/SidenavRouterLink.vue'
import SidenavMenu from './sidebar/SidenavMenu.vue'
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
      freelancer: true,
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

path {
  color: darkgray
}
</style>
