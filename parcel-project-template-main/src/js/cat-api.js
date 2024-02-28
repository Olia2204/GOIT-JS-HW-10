import Notiflix from 'notiflix';

export default fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/breeds/${breedId}`,
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}