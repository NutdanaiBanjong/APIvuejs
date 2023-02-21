<template>
    <div class="bg-white h-screen w-screen px-40 pt-2">
      <h1 class="text-center text-2xl">Product Page</h1>
      <!-- <router-link to="/" class="border border-black">กลับ</router-link> -->
      <div class="grid sm:grid-cols-3 gap-x-4 gap-y-5 pt-2">
        <div v-for="item in listToChild" :key="item.id" class="bg-white shadow-md shadow-gray-500 p-2">
          <router-link :to="{name: 'MyDetails' , params:{id: item.id}}">
            <p class="text-center">สินค้า : {{ item.title }} </p>
          </router-link>
        </div>
      </div>
    </div>
</template>
<script>

export default {
  name: 'MyProducts',
  props: ['listToChild']
}
</script>
