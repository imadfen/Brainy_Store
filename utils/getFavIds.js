export default function getFavIds() {
  const storageName = "favorite";
  const localStorageValue = localStorage.getItem(storageName);

  if (!localStorageValue) return [];

  return JSON.parse(localStorageValue);
}
