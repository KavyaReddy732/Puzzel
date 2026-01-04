import { ref } from 'vue';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export function useProducts() {
  const products = ref<Product[]>([]);
  const isLoading = ref(false);
  const error = ref('');

  const fetchProducts = async (limit = 8) => {
    isLoading.value = true;
    error.value = '';
    try {
      const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
      if (!response.ok) {
        throw new Error('Failed to load products');
      }
      products.value = await response.json();
    } catch (err) {
      error.value = 'Unable to load products. Please try again.';
      console.error('Fetch error:', err);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    products,
    isLoading,
    error,
    fetchProducts,
  };
}