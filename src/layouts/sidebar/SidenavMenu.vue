<template>
  <div class="sidenav-item" style="color: white">
    <a href="javascript:void(0)" @click="show = !show" class="sidenav-link sidenav-toggle form-control" style="color: white ; font-size:18px;font-family:'arial';text-decoration:none; float:left ; background:none ; border: none ; border-radius:0 ; padding: 15px ; padding-left:5px ; padding-right:5px" :target="target" :class="$route.path === href ? 'actives' : ''">
      <font-awesome-icon  :icon="icon" style="; float:left ; font-size:21px ; width:48px ; padding-top:5px " />
      <div> {{title}}</div>
      <div v-if="badge" class="pl-1 ml-auto"><div class="badge" :class="badgeClass">{{badge}}</div></div>
    </a>
    <div v-if="show" class="sidenav-menu">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidenav-menu',
  data(){
    return{
      show: false,
    }
  },
  props: {
    icon: String,
    linkClass: {
      type: String,
      default: ''
    },
    badge: {
      default: null
    },
    badgeClass: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style>
.actives{
  background: grey!important;
}
</style>