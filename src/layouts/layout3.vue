<template>
  <div>
      <div :class="$store.state.collapse ? 'big-collapse' : 'big-ncollapse'">
        <div style="min-height:1000px; padding-bottom:100px" :class="{'bannerbg-dark' :$store.state.isDark, 'bannerbg-light' :!$store.state.isDark}">
          <navbar />
          <router-view style=""></router-view>
        </div>
      </div>


      <div :class="$store.state.collapse ? 'small-collapse' : 'small-ncollapse'" style="" class=" side">
        <div id="aa" style="height: 100%" :class="{'bg-light' : !$store.state.isDark,  'bg-dark' : $store.state.isDark}">
        <sidebar />
        </div>
      </div>
      
      
  </div>
</template>

<script>
import navbar from './navbar.vue'
import footers from './footer.vue'
import sidebar from './sidebar2.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
      navbar,
      footers,
      sidebar
  }
}
</script>

<style scoped>
.side::-webkit-scrollbar{
  width:0

}
</style>
<style>
.big-collapse{
  width:100% ; padding-right:55px ; float:right
}
.big-ncollapse{
  width:80% ; float:right
}
.small-collapse{
  width:55px ; float:left ; height:100% ; position:fixed ; overflow:auto
}
.small-ncollapse{
  width:20% ; float:left ; height:100% ; position:fixed ; overflow:auto
}
@media only screen and (max-width: 600px) {
.big-ncollapse{
  width:100%!important ; padding-right:55px ; float:right ;position: absolute ; right: 0
}
.big-collapse{
  width:100% ; padding-right:55px ; float:right ;position: absolute ; right: 0
}
.small-ncollapse{
  width:50%!important ; float:left ; height:100% ; position:fixed ; overflow:auto
}
}
</style>