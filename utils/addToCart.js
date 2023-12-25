export default function addToCart(productId) {
    const storageName = "cart";
    const storedProductsIds = JSON.parse(localStorage.getItem(storageName));
    if(storedProductsIds === null) {
      localStorage.setItem(storageName, JSON.stringify([productId]));
      alert("Product added to cart");
      return;
    }
    const newList = [...storedProductsIds, productId];
    localStorage.setItem(storageName, JSON.stringify(newList));
    console.log("newList", newList);
  }
  