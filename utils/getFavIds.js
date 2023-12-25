export default function getFavIds() {
  const storageName = "favorite";
  return JSON.parse(localStorage.getItem(storageName));
}
