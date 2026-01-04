<template>
  <div class="flex items-center">
    <PvButton
      size="small"
      class="!w-6 !h-6 md:!w-8 md:!h-8"
      @click="handleDecrease"
      :disabled="disableDecrease"
      aria-label="Decrease quantity"
    >
      <FontAwesomeIcon icon="minus" class="text-[10px] md:text-sm" />
    </PvButton>
    <span class="text-xs md:text-base text-center min-w-8">
      {{ quantity }}
    </span>
    <PvButton
      size="small"
      class="!w-6 !h-6 md:!w-8 md:!h-8"
      @click="handleIncrease"
      aria-label="Increase quantity"
    >
      <FontAwesomeIcon icon="plus" class="text-[10px] md:text-sm" />
    </PvButton>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

interface Props {
  itemId: number;
  quantity: number;
  disableDecrease?: boolean;
}

interface Emits {
  (e: "increase", itemId: number, amount?: number): void;
  (e: "decrease", itemId: number, amount?: number): void;
}

const { itemId, quantity, disableDecrease } = defineProps<Props>();
const emit = defineEmits<Emits>();

function handleIncrease(): void {
  emit("increase", itemId, 1);
}

function handleDecrease(): void {
  emit("decrease", itemId, 1);
}
</script>
