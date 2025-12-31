<template>
  <div class="mx-auto max-w-4xl space-y-6">

    <PvCard>
      <template #title>Products</template>
      <template #content>
        <PvDataTable :value="products" striped-rows>
          <PvColumn field="title" header="Name" />
          <PvColumn field="price" header="Price">
            <template #body="{ data }">
              {{ data.price.toFixed(2) }}
            </template>
          </PvColumn>
          <PvColumn header="Add to Basket">
            <template #body="{ data }">
              <PvButton label="Add" @click="addProduct(data.id)" />
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
        <BasketSmall :items="basket" :products="products" />
      </template>
    </PvCard>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BasketSmall from './BasketSmall.vue';

const products = ref([
  { id: 0, title: 'Banana', price: 1.2 },
  { id: 1, title: 'Orange', price: 2.5 },
  { id: 2, title: 'Tomato', price: 1.6 },
  { id: 3, title: 'Flour', price: 5.0 },
]);

const basket = ref([]);

function addProduct(id, quantity = 1) {
  const existingItem = basket.value.find((x) => x.id === id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    basket.value.push({ id, quantity });
  }
}
</script>
