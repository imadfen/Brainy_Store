export default function getCartIds() {
  const storageName = "cart";
  return JSON.parse(localStorage.getItem(storageName));
}
