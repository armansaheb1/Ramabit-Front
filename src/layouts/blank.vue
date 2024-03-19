<template>
  <div>
        <router-view></router-view>
      <footers />
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
