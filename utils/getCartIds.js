export default function getCartIds() {
  const storageName = "cart";
  const localStorageValue = localStorage.getItem(storageName);

  if (!localStorageValue) return [];

  return JSON.parse(localStorageValue);
}
