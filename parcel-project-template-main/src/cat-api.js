const url = 'https://api.thecatapi.com/v1';
const api_key = "live_xxQzM2ryId3wc6D0XhlxdLUEmg4zdrsIIXdfX44TdMx23lblNvgU3SBYhHlW9r9N";

export function fetchBreeds() {
    return fetch(`${url}/breeds?api_key=${api_key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });       
};

export function fetchCatByBreed(breedId) {
    return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });  
};