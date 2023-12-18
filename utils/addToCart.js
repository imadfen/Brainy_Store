export default function addToCart(productId) {
    const storageName = "cart";
    const storedProductsIds = JSON.parse(localStorage.getItem(storageName));
  
    if (!storedProductsIds) return;
  
    const newList = [...storedProductsIds, productId];
    localStorage.setItem(storageName, JSON.stringify(newList));
  }
  