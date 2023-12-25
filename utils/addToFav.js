export default function addToFav(productId) {
  const storageName = "favorite";
  const storedProductsIds = JSON.parse(localStorage.getItem(storageName));

  if (!storedProductsIds) return;

  const newList = [...storedProductsIds, productId];
  localStorage.setItem(storageName, JSON.stringify(newList));
}
