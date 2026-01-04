<template>
  <div class="mx-auto w-full md:max-w-4xl space-y-6 px-4">
    <PvCard>
      <template #title>Products</template>
      <template #content>
        <div v-if="isLoading" class="flex items-center justify-center py-10">
          <PvProgressSpinner />
        </div>
        <div
          v-else-if="error"
          class="rounded-md bg-red-50 p-4 text-sm text-red-700"
        >
          {{ error }}
        </div>

        <PvDataTable
          v-else
          :value="products"
          striped-rows
          breakpoint="786px"
          class="p-datatable-sm"
        >
          <PvColumn
            header="Image"
            headerClass="text-xs md:text-base"
            bodyClass="text-xs md:text-base"
          >
            <template #body="{ data }">
              <img
                :src="data.image"
                :alt="data.title"
                class="h-12 w-12 md:h-16 md:w-16 object-contain"
                loading="lazy"
              />
            </template>
          </PvColumn>
          <PvColumn
            header="Name"
            headerClass="text-xs md:text-base"
            bodyClass="text-xs md:text-base"
          >
            <template #body="{ data }">
              <div class="text-xs md:text-base leading-tight">
                {{ data.title }}
              </div>
            </template>
          </PvColumn>
          <PvColumn
            field="price"
            header="Price"
            headerClass="text-xs md:text-base"
            bodyClass="text-xs md:text-base"
          >
            <template #body="{ data }">
              <span class="text-xs md:text-base"
                >${{ data.price.toFixed(2) }}</span
              >
            </template>
          </PvColumn>
          <PvColumn
            header="Cart"
            headerClass="text-xs md:text-base"
            bodyClass="text-xs md:text-base"
          >
            <template #body="{ data }">
              <PvButton
                v-if="getItemQuantity(data.id) === 0"
                label="Add"
                size="small"
                class="text-xs md:text-base"
                @click="addProduct(data.id)"
              />
              <QuantityControl
                v-else
                :item-id="data.id"
                :quantity="getItemQuantity(data.id)"
                @increase="increaseQuantity"
                @decrease="decreaseQuantity"
              />
            </template>
          </PvColumn>
        </PvDataTable>
      </template>
    </PvCard>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import BasketSmall from "./BasketSmall.vue";
import QuantityControl from "./QuantityControl.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useBasketStore } from "../stores/BasketStore";
import { useProducts } from "../utils/useProducts";

const { products, isLoading, error, fetchProducts } = useProducts();

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
