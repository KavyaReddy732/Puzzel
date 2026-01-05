<template>
  <nav class="bg-white shadow-md">
    <div class="mx-auto w-full md:max-w-4xl px-4">
      <div class="flex h-16 items-center justify-between">
        <router-link to="/" class="text-xl font-bold text-gray-800"  active-class="text-green-600" aria-label="Home"> 
         <img src="/src/assets/puzzel.svg" alt="Puzzel Logo" class="h-[4rem] w-[8rem]" />
        </router-link>
        <div class="flex items-center space-x-6">
          <router-link
            to="/"
            class="text-gray-700 hover:text-green-600 font-medium"
            active-class="text-green-600"
          >
            Products
          </router-link>
          <router-link
            to="/cart"
            class="flex items-center space-x-2 text-gray-700 hover:text-green-600 font-medium"
            active-class="text-green-600"
            aria-label="Shopping cart"
          >
            <FontAwesomeIcon icon="cart-shopping" />
            <span>Cart</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>