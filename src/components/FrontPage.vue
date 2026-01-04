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
               <PvButton
                v-if="getItemQuantity(data.id) === 0"
                label="Add"
                @click="addProduct(data.id)"
              />
              <div v-else class="flex items-center gap-2">
                <PvButton @click="decreaseQuantity(data.id)" > <FontAwesomeIcon icon="minus" /></PvButton>
                <span>{{ getItemQuantity(data.id) }}</span>
                <PvButton @click="increaseQuantity(data.id)" > <FontAwesomeIcon icon="plus" /></PvButton>
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
        <BasketSmall :items="basket" :products="products" @remove="removeFromCart"/>
      </template>
    </PvCard>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BasketSmall from './BasketSmall.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

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

function getItemQuantity(id) {
  const item = basket.value.find((x) => x.id === id);
  return item ? item.quantity : 0;
}


function increaseQuantity(id, amount = 1) {
  const item = basket.value.find((x) => x.id === id);
  if (item) {
    item.quantity += amount;
  }
}

function decreaseQuantity(id, amount = 1) {
  const item = basket.value.find((x) => x.id === id);
  if (item) {
    item.quantity = Math.max(0, item.quantity - amount);
    if (item.quantity === 0) {
      removeFromCart(id);
    }
  }
}

function removeFromCart(id) {
  basket.value = basket.value.filter(item => item.id !== id);
}
</script>
