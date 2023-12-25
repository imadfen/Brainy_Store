export default function addToCart(productId) {
    const storageName = "cart";
    const storedProductsIds = JSON.parse(localStorage.getItem(storageName));
  
    if (storedProductsIds) {
      var newList = [...storedProductsIds, productId];
    } else {
      var newList = [productId];
    }
  
    localStorage.setItem(storageName, JSON.stringify(newList));
  }
  