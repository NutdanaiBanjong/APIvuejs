<template>
  <div class="sm:px-40">
    <h1 class="text-center text-xl py-3">รายละเอียดสินค้า</h1>
  <div class="grid grid-cols-2 p-3 bg-orange-200/80 rounded-lg">
    <div class="h-full w-full">
      <img :src='products.thumbnail'>
    </div>
    <div class="text-xl rounded-lg">
      <h1>ชื่อสินค้า : {{ products.title }} </h1>
      <h1>ราคา : {{ products.price }} บาท</h1>
      <h1>รายละเอียด : {{ products.description }} </h1>
      <h1>จํานวนสินค้าที่เหลือ : {{ products.stock }} ชิ้น</h1>
    </div>
  </div>
  <div class="pt-5 text-center">
      <router-link to="/products" class="border border-black px-3 py-1">กลับ</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MyDetails',
  props: ['id'],
  data () {
    return {
      // id: this.$route.params.id,
      products: {}
    }
  },
  async created () {
    try {
      const response = await axios.get('https://dummyjson.com/products/' + this.id)
      this.products = response.data
      console.log(this.products, 'products')
    } catch (error) {
      this.products = false
      console.log(error, 'error')
    }
  }
}
</script>
