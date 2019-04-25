export const makeRequest = {
	getRequest: async (url) => {
		const options = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		};
		
		try {
			const response = await fetch(url, options)
			const data = await response.json();
			console.log(data);
			return data;
		} catch (err) {
			console.error('Error getting data', err)
		}
	}
}