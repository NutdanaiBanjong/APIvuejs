<template>
<nav class="bg-orange-200/75 px-2 sm:px-4">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
        <span class="self-center text-xl font-semibold ">GetAPI</span>
    <div class="hidden w-full md:block md:w-auto">
      <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
        <li>
          <router-link to="/" class="focus:underline">Home</router-link>
        </li>
        <li>
          <router-link to="/products" class="focus:underline">Products</router-link>
        </li>
        <li>
          <router-link to="/author" class="focus:underline">Author</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>
<script>
export default {
  name: 'MyNavbar'
}
</script>
