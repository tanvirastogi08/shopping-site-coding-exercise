export const makeRequest = {
	getRequest: async (url, id) => {
		const options = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		};
		
		try {
			const response = await fetch(url, options)
			let data = await response.json();
			// productByCategoryId
			if (id) {
				data.products = data.products.filter(d => d.category === id)
			}
			return data;
		} catch (err) {
			console.error('Error getting data', err)
		}
	}
}