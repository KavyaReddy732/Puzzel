<template>
  <div class="mx-auto w-full md:max-w-4xl space-y-6 px-4">
    <PvCard>
      <template #title>
        <div class="flex items-center gap-2">
          <FontAwesomeIcon icon="cart-shopping" />
          Shopping Cart
        </div>
      </template>
      <template #content>
        <template v-if="isLoading">
          <div class="flex items-center justify-center py-10">
            <PvProgressSpinner />
          </div>
        </template>
        <template v-else-if="productCount === 0">
          <div class="text-center py-8 text-gray-500">
            <p class="mb-4">Your basket is empty.</p>
            <router-link to="/">
              <PvButton 
                label="Browse Products"
                class="bg-blue-600 hover:bg-blue-700"
              />
            </router-link>
          </div>
        </template>

        <template v-else>
          <p class="mb-4 text-xs md:text-base text-gray-600">
            Number of items in basket: {{ productCount }}
          </p>
          <PvDataTable :value="itemOverview" striped-rows breakpoint="786px" class="p-datatable-sm">
            <PvColumn field="title" header="Name" headerClass="text-xs md:text-base" bodyClass="text-xs md:text-base" />
            <PvColumn field="price" header="Price" headerClass="text-xs md:text-base" bodyClass="text-xs md:text-base">
              <template #body="{ data }">
                ${{ data.price.toFixed(2) }}
              </template>
            </PvColumn>
            <PvColumn header="Quantity" headerClass="text-xs md:text-base" bodyClass="text-xs md:text-base">
              <template #body="{ data }">
                <QuantityControl
                  :item-id="data.id"
                  :quantity="data.quantity"
                  :disable-decrease="data.quantity === 1"
                  @increase="increaseQuantity"
                  @decrease="decreaseQuantity"
                />
              </template>
            </PvColumn>
            <PvColumn header="Total" headerClass="text-xs md:text-base" bodyClass="text-xs md:text-base">
              <template #body="{ data }">
                ${{ data.total.toFixed(2) }}
              </template>
            </PvColumn>
            <PvColumn field="id" header="" headerClass="text-xs md:text-base">
              <template #body="{ data }">
                <FontAwesomeIcon 
                  icon="trash" 
                  @click="removeFromCart(data.id)" 
                  class="cursor-pointer text-red-600 hover:text-red-800 text-xs md:text-base"
                  aria-label="Remove item from cart" 
                />
              </template>
            </PvColumn>
          </PvDataTable>
          <p class="mt-4 text-base md:text-lg font-bold">
            Total price: 
            <span :class="total > 50 ? 'text-red-600' : 'text-black'">
              ${{ total.toFixed(2) }}
            </span>
          </p>
        </template>
      </template>
    </PvCard>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import QuantityControl from './QuantityControl.vue';
import { useBasketStore } from '../stores/BasketStore';
import { useProducts } from '../utils/useProducts';

const basketStore = useBasketStore();
const { products, isLoading, fetchProducts } = useProducts();

const productCount = computed(() =>
  basketStore.basketItems.reduce((sum, item) => sum + item.quantity, 0),
);

const itemOverview = computed(() =>
  basketStore.basketItems
    .map((item) => {
      const product = products.value.find((entry) => entry.id === item.id);
      if (!product) return null;
      return {
        id: item.id,
        title: product.title,
        price: product.price,
        quantity: item.quantity,
        total: item.quantity * product.price,
      };
    })
    .filter((item) => item !== null),
);

const total = computed(() =>
  itemOverview.value.reduce((sum, item) => sum + item.total, 0),
);

function removeFromCart(id) {
  basketStore.removeFromCart(id);
}

function increaseQuantity(id, amount = 1) {
  basketStore.increaseQuantity(id, amount);
}

function decreaseQuantity(id, amount = 1) {
  basketStore.decreaseQuantity(id, amount);
}

onMounted(() => {
  fetchProducts();
});
</script>
