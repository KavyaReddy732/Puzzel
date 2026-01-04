<template>
  <div>
    <template v-if="isLoading">
      <div class="flex items-center justify-center py-10">
        <PvProgressSpinner />
      </div>
    </template>
    <template v-else-if="productCount === 0">
      Your basket is empty.
    </template>

    <template v-else>
      <p class="mb-4 text-gray-600">
        Number of items in basket: {{ productCount }}
      </p>
      <PvDataTable :value="itemOverview" striped-rows>
        <PvColumn field="title" header="Name" />
        <PvColumn field="price" header="Price">
          <template #body="{ data }">
            {{ data.price.toFixed(2) }}
          </template>
        </PvColumn>
        <PvColumn field="quantity" header="Quantity" />
        <PvColumn header="Total">
          <template #body="{ data }">
            {{ data.total.toFixed(2) }}
          </template>
        </PvColumn>
        <PvColumn field="id" header="">
          <template #body="{ data }">
            <FontAwesomeIcon icon="trash" @click="$emit('remove', data.id)" class="cursor-pointer text-red-600" />
          </template>
        </PvColumn>
      </PvDataTable>
      <p class="mt-4 text-lg font-bold">
        Total price: <span :class="`${ total > 50 ? 'text-red-600' : 'text-black' }`">{{ total.toFixed(2) }}</span>
      </p>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  items: { type: Array, required: true },
  products: { type: Array, required: true },
  isLoading: { type: Boolean, default: false },
});

const productCount = computed(() =>
  props.items.reduce((sum, item) => sum + item.quantity, 0),
);

const itemOverview = computed(() =>
  props.items
    .map((item) => {
      const product = props.products[item.id];
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


</script>
