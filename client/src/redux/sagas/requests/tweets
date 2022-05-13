export function getApi() {
    return fetch({
        method: 'GET',
        url: 'http://localhost:3001/tweets',
    }).then(response => response.json())
        .catch((error) => {throw error});
};