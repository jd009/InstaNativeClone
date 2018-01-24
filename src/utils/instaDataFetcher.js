const DATA_API_URL = 'https://randomuser.me/api/?results=3&nat=US';

export function fetchInstaData() {
  return fetch(DATA_API_URL)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
