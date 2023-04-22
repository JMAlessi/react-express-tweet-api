export function getApi() {
	return fetch('http://localhost:3001/tweets')
		.then((response) => response.json())
		.catch((error) => {
			throw error;
		});
}
