<template>
<div style="z-index:1000">
  <div style="clear:both"></div>
  <nav id="foot" class="navbar navbar-light " :class="{'fbg-light' : !$store.state.isDark,  'fbg-dark' : $store.state.isDark}" style=" width:100%!important;">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      My Exchange
    </a>
  </div>
</nav>
</div>
</template>

<script>
document.addEventListener('domContentLoaded' ,() => {
  document.getElementById('foot').style.bottom = Window.innerHeight
})

export default {
  name: 'footers',
  methods: {
  }
}
</script>
<style>
.fbg-dark{
  background-color: #080a0c;
  color: lightgrey
}
.fbg-light{
  background-color: lightgrey;
  color:black
}
</style>