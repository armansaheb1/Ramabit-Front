<template>
  <div class="sidenav-item" style="color: white">
    <a :href="href"
      style="color: white ; font-size:18px; float:right ; background:none ; border: none ; border-radius:0 ; padding: 15px ; padding-right:5px ; padding-right:5px"
      :target="target" class="form-control" :class="$route.path === href ? 'actives' : ''">
      <font-awesome-icon :icon="icon" style="float:right ; font-size:21px ; width:48px ; padding-top:5px " />
      <div style="float:right">
        <slot></slot>
      </div>
      <div v-if="badge" class="pl-1 ml-auto">
        <div class="badge" :class="badgeClass">{{ badge }}</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'sidenav-link',
  props: {
    href: String,
    icon: String,
    target: {
      type: String,
      default: '_self'
    },
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
<style>
bg-dark .actives {
  background: rgba(0, 0, 0, 0.1) !important;
}
</style>
