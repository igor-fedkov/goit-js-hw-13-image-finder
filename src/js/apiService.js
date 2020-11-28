const BASE_URL = 'https://pixabay.com/api/';
const PICTURES_PER_PAGE = 12;
const API_KEY = '19237838-f4b2b6be3555293fd9d73593e';

// const debounce = require('lodash.debounce');

class ApiPictures {
	constructor() {
		this.searchQuery = '';
		this.currentPage = 1;
		this.totalHits = 0;
		this.alreadyDisplayed = 0;
	}

	getPictures() {
		const fullURL = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.currentPage}&per_page=${PICTURES_PER_PAGE}&key=${API_KEY}`;

		return fetch(fullURL)
			.then(response => {
				this.currentPage += 1;
				return response.json();
			})
			.then(data => {
				this.totalHits = data.totalHits;
				this.alreadyDisplayed += data.hits.length;
				return data.hits;
			})
			.catch(error => {
				console.log(error);
			});
	}

	get query() {
		return this.searchQuery;
	}

	set query(newQuery) {
		this.searchQuery = newQuery;
		this.currentPage = 1;
		this.alreadyDisplayed = 0;
	}

}

export default ApiPictures;
