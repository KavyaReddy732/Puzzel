<template>
  <div class="mx-auto max-w-4xl space-y-6">

    <PvCard>
      <template #title>Products</template>
      <template #content>
        <div v-if="isLoading" class="flex items-center justify-center py-10">
          <PvProgressSpinner />
        </div>
        <div v-else-if="error" class="rounded-md bg-red-50 p-4 text-sm text-red-700">
          {{ error }}
        </div>
        <PvDataTable v-else :value="products" striped-rows>
          <PvColumn header="Image">
            <template #body="{ data }">
              <img
                :src="data.image"
                :alt="data.title"
                class="product-thumb h-12 w-12  object-contain"
                loading="lazy"
              />
            </template>
          </PvColumn>
          <PvColumn field="title" header="Name" />
          <PvColumn field="price" header="Price">
            <template #body="{ data }">
              {{ data.price.toFixed(2) }}
            </template>
          </PvColumn>
          <PvColumn header="Add to Basket">
            <template #body="{ data }">
              <PvButton
                v-if="getItemQuantity(data.id) === 0"
                label="Add"
                @click="addProduct(data.id)"
              />
              <div v-else class="flex items-center gap-2">
                <PvButton @click="decreaseQuantity(data.id)">
                  <FontAwesomeIcon icon="minus" />
                </PvButton>
                <span>{{ getItemQuantity(data.id) }}</span>
                <PvButton @click="increaseQuantity(data.id)">
                  <FontAwesomeIcon icon="plus" />
                </PvButton>
              </div>
            </template>
          </PvColumn>
        </PvDataTable>
      </template>
    </PvCard>

        <PvCard>
      <template #title>
        <div class="flex items-center gap-2">
          <FontAwesomeIcon icon="cart-shopping" />
          Basket
        </div>
      </template>
      <template #content>
        <BasketSmall :items="basketStore.basketItems" :products="products" :is-loading="isLoading" @remove="removeFromCart"/>
      </template>
    </PvCard>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import BasketSmall from './BasketSmall.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useBasketStore } from '../stores/BasketStore';
import { useProducts } from '../utils/useProducts';

const { products, isLoading , error, fetchProducts } = useProducts();

const basketStore = useBasketStore();

function addProduct(id, quantity = 1) {
  basketStore.addProduct(id, quantity);
}

function getItemQuantity(id) {
  return basketStore.getItemQuantity(id);
}

function increaseQuantity(id, amount = 1) {
  basketStore.increaseQuantity(id, amount);
}

function decreaseQuantity(id, amount = 1) {
  basketStore.decreaseQuantity(id, amount);
}

function removeFromCart(id) {
  basketStore.removeFromCart(id);
}

onMounted(() => {
  fetchProducts();
});
</script>
