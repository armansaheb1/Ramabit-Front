<template>
  <div class="sidenav-item" style="color: white" >
    <a :href="to" style="color: white ; font-size:16px; float:left ; background:#444 ; border: none ; border-radius:0 ; padding: 15px ; padding-left:5px ; padding-right:5px" :target="target" class="form-control" :class="$route.path === href ? 'actives' : ''">
       <font-awesome-icon  :icon="icon" style="margin-left:10px; float:left ; font-size:19px ; width:48px ; padding-top:5px " />
      <div style="; float:left"><slot></slot></div>
      <div v-if="badge"  class="pl-1 ml-auto"><div class="badge" :class="badgeClass">{{badge}}</div></div>
    </a>
    </div>
</template>

<script>
export default {
  name: 'sidenav-router-link',
  props: {
    to: null,
    replace: {
      type: Boolean,
      default: false
    },
    append: {
      type: Boolean,
      default: false
    },
    exact: {
      type: Boolean,
      default: false
    },
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
    href: {
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
    }
  }
}
</script>
