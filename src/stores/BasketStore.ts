import { defineStore } from 'pinia';
import { getStoredItems, setStoredItems } from '../utils/basketLocalStorage';

export const useBasketStore = defineStore('cart', {
  state: () => ({
    basketItems: getStoredItems(),
  }),
  actions: {
    persist() {
      setStoredItems(this.basketItems);
    },

    addProduct(id: number, quantity = 1) {
      const existingCartItem = this.basketItems.find((item) => item.id === id);
      if (existingCartItem) {
        existingCartItem.quantity += quantity;
      } else {
        this.basketItems.push({ id, quantity });
      }
      this.persist();
    },

    increaseQuantity(id: number, amount = 1) {
      const item = this.basketItems.find((item) => item.id === id);
      if (item) {
        item.quantity += amount;
        this.persist();
      }
    },

    decreaseQuantity(id: number, amount = 1) {
      const item = this.basketItems.find((item) => item.id === id);
      if (!item) return; 
      item.quantity -= amount;
      if (item.quantity <= 0) {
        this.basketItems = this.basketItems.filter(item => item.id !== id);
      }
      this.persist();
    },

    removeFromCart(id: number) {
      this.basketItems = this.basketItems.filter((item) => item.id !== id);
      this.persist();
    },

    getItemQuantity(id: number) {
      const item = this.basketItems.find((item) => item.id === id);
      return item ? item.quantity : 0;
    },
  },
});
