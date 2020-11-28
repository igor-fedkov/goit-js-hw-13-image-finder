const refs = {
	picturesListEl: document.querySelector('.gallery'),
	searchInput: document.querySelector('input[name="query"]'),
	btnLoadMore: document.querySelector('button[data-action="load-more"]'),
	cbInfiniteScroll: document.querySelector('#use-infinite-scroll'),
	elementForObserver: document.querySelector('.element-for-observer'),
};

export default refs;