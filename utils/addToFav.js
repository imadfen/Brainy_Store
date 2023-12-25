export default function addToFav(productId) {
  const storageName = "favorite";
  const storedProductsIds = JSON.parse(localStorage.getItem(storageName));

  if (storedProductsIds) {
    var newList = [...storedProductsIds, productId];
  } else {
    var newList = [productId];
  }

  localStorage.setItem(storageName, JSON.stringify(newList));
}
