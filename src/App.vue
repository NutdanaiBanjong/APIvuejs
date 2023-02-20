<template>
  <div id="app">
    <header>
      <MyNavbar/>
    </header>
    <div>
      <router-view
      :listToChild="list">
      </router-view>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import MyNavbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    MyNavbar
  },
  data () {
    return {
      list: []
    }
  },
  async created () {
    try {
      const response = await axios.get('https://dummyjson.com/products/')
      this.list = response.data.products
      console.log(this.list, 'from list')
    } catch (error) {
      this.list = false
      console.log(error)
    }
  }
}
</script>

<style>
</style>
