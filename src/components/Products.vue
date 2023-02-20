<template>
    <div class="bg-[#FDFD96] h-screen w-screen px-40">
      <h1 class="text-center text-2xl">Product Page</h1>
      <div class="grid sm:grid-cols-4 grid-cols-2 gap-4">
        <div v-for="item in listToChild" :key="item.id" class="bg-blue-200 p-2">
          <router-link :to="{name: 'MyDetails' , params:{id: item.id}}">
            <p class="text-center">{{ item.title }}</p>
          </router-link>
        </div>
      </div>
    </div>
  <!-- <router-view></router-view> -->
</template>
<script>

export default {
  name: 'MyProducts',
  props: ['listToChild']
}
</script>
