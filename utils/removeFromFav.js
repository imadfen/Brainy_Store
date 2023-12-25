export default function removeFromFav(productId) {
  const storageName = "favorite";
  const storedProductsIds = JSON.parse(localStorage.getItem(storageName));

  if (!storedProductsIds) return;

  const newList = storedProductsIds.filter((id) => id !== productId);
  localStorage.setItem(storageName, JSON.stringify(newList));
}
