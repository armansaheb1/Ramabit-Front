<template>
  <div>
    <div style="min-height:100%" :class="$store.state.collapse ? 'big-collapse' : 'big-ncollapse'">
      <div style="min-height:1000px"
        :class="{ 'bannerbg-dark': $store.state.isDark, 'bannerbg-light': !$store.state.isDark }">


        <navbar />
        <router-view></router-view>
        <div style="height:100px"></div>
      </div>
    </div>

    <div
      :class="{ 'bg-light': !$store.state.isDark, 'bg-dark': $store.state.isDark, 'small-collapse': $store.state.collapse, 'small-ncollapse': !$store.state.collapse }"
      style="" class=" side">
      <div id="aa" style="height: 100%" :class="{ 'bg-light': !$store.state.isDark, 'bg-dark': $store.state.isDark }">
        <sidebar />
      </div>
    </div>

  </div>
</template>

<script>
import navbar from './navbar.vue'
import footers from './footer.vue'
import sidebar from './sidebar.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    navbar,
    footers,
    sidebar
  }
}
</script>

<style scoped>
.side::-webkit-scrollbar {
  width: 0
}
</style>
<style>
.big-collapse {
  width: 100%;
  padding-right: 55px;
  float: left;
  min-height: 100%;
  left: 0;
  position: absolute
}

.big-ncollapse {
  width: 80%;
  float: left;
  min-height: 100%;
  left: 0;
  position: absolute
}

.small-collapse {
  width: 55px;
  float: right;
  right: 0;
  height: 100%;
  position: fixed;
  overflow: auto
}

.small-ncollapse {
  width: 20%;
  float: right;
  right: 0;
  height: 100%;
  position: fixed;
  overflow: auto
}

@media only screen and (max-width: 600px) {
  .big-ncollapse {
    width: 100% !important;
    padding-right: 55px;
    float: left;
    position: absolute;
    left: 0
  }

  .big-collapse {
    width: 100%;
    padding-right: 55px;
    float: left;
    position: absolute;
    left: 0
  }

  .small-ncollapse {
    width: 50% !important;
    float: right;
    height: 100%;
    position: fixed;
    overflow: auto
  }
}
</style>