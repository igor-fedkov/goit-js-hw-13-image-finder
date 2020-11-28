import refs from './refs';
import ApiPictures from './apiService';
import picturesListTpl from '../templates/pictures-list-item.hbs';
import { createInfoNotify, createErrorNotify } from './notifys';
import * as basicLightbox from 'basiclightbox';

const debounce = require('lodash.debounce');

refs.searchInput.addEventListener('input', onInputSearchQuery);
refs.btnLoadMore.addEventListener('click', onBtnLoadMore);
refs.picturesListEl.addEventListener('click', onShowBigImage);
refs.cbInfiniteScroll.addEventListener('input', onInfiniteScrollUse);

let allPictures = [];

const picturesApiService = new ApiPictures();
refs.btnLoadMore.disabled = true;

function onInputSearchQuery(event) {
	event.preventDefault();
	
	if (refs.searchInput.value.trim().length > 0) {
		onInputDebounce(refs.searchInput.value);
		refs.btnLoadMore.disabled = true;
	}
};

const onInputDebounce = debounce(query => {
	
	picturesApiService.query = query;		
	picturesApiService.getPictures()
		.then(hits => {
			if (picturesApiService.totalHits > 0)
			{
				createListPictures(hits);
				if (hits.length < picturesApiService.totalHits) {
					refs.btnLoadMore.disabled = false;
				}
				createInfoNotify(`First ${picturesApiService.alreadyDisplayed} from ${picturesApiService.totalHits}`);
				allPictures = [];
				allPictures = [...allPictures, ...hits];
				return;
			}

			createErrorNotify('Nothing found. Try changing your request.');
		});
}, 500);

const addToPicturesList = hits => {
	const markup = picturesListTpl(hits);
	refs.picturesListEl.insertAdjacentHTML('beforeend', markup);
	allPictures = [...allPictures, ...hits];
};

const createListPictures = hits => {
	refs.picturesListEl.innerHTML = '';
	addToPicturesList(hits);
};

function onBtnLoadMore() {
	picturesApiService.getPictures()
		.then(hits => {
			addToPicturesList(hits);
			createInfoNotify(`Shown ${picturesApiService.alreadyDisplayed} from ${picturesApiService.totalHits}`);
			if (picturesApiService.alreadyDisplayed === picturesApiService.totalHits) {
				refs.btnLoadMore.disabled = true;
			}
		});
	
	setTimeout(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }, 1000);
}

function onShowBigImage(event) {	

	if (event.target.nodeName !== 'IMG')	{
		return;
	}

	event.preventDefault();
	const picture = allPictures.find(picture => picture.previewURL === event.target.src);
	basicLightbox.create(`<img width="1400" height="900" src="${picture.largeImageURL}">`).show();
}

function onInfiniteScrollUse(event) {
	if (refs.cbInfiniteScroll.checked) {
		refs.btnLoadMore.style.visibility = 'hidden';
		observer.observe(refs.elementForObserver);
	}
	else {
		refs.btnLoadMore.style.visibility = 'visible';
		observer.unobserve(refs.elementForObserver);
	}
}

const observer = new IntersectionObserver(entries => { 
	
	entries.forEach(entry => {
		if (entry.isIntersecting &&
				picturesApiService.alreadyDisplayed < picturesApiService.totalHits &&
				picturesApiService.searchQuery !== '')
		{
			picturesApiService.getPictures()
			.then(hits => {
				addToPicturesList(hits);
			});
		}
	});	
});
