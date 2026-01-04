const STORAGE_KEY = 'basket-items';

export type BasketItem = { id: number; quantity: number };

export function getStoredItems(): BasketItem[] {
  if (typeof window === 'undefined') {
    return []; // Return empty array if window is not defined 
  }
   try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to load basket:', error);
    return [];
  }

}

export function setStoredItems(items: BasketItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.error('Failed to save basket:', error);
  }
}
