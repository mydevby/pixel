window.onload = function() {
	if (document.querySelector('.header__user-about') !== null) {
		let headerUserAbout  = document.querySelector('.header__user-about');
		let headerUserInformation = document.querySelector('.header__user-information');
		headerUserAbout.addEventListener('click', function(e) {
			headerUserAbout.classList.toggle('header__user-about--active');
			headerUserInformation.classList.toggle('header__user-information--open');
		});
	};

	if (document.querySelector('.filters__btn-providers') !== null) {
		let filtersBtnProviders  = document.querySelector('.filters__btn-providers');
		let headerListProviders = document.querySelector('.filters__list-providers');
		filtersBtnProviders.addEventListener('click', function(e) {
			filtersBtnProviders.classList.toggle('filters__btn-providers--active');
			headerListProviders.classList.toggle('filters__list-providers--open');
		});
	};

	if (document.querySelector('.modals__btn') !== null) {
		let arrModalsBtn  = document.querySelectorAll('.modals__btn');
		arrModalsBtn.forEach(modalBtn => {
			modalBtn.addEventListener('click', function(e) {
				let modal  = document.querySelector('.modal');
				let className = modalBtn.dataset.modalContentClass;
				let modalContent = document.querySelector('.' + className);
				modal.classList.add('modal--open');
				modalContent.classList.add('modal__content--active');
			});
		});
	};

	if (document.querySelector('.modal') !== null) {
		let modal  = document.querySelector('.modal');
		let modalWindow  = document.querySelector('.modal__window');
		let arrModalContent  = document.querySelectorAll('.modal__content');
		let arrModalClaseBtns = document.querySelectorAll('.modal__close-modal');
		modal.addEventListener('click', function(e) {
			modal.classList.remove('modal--open');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
		});
		modalWindow.addEventListener('click', function(e) {
			e.stopPropagation();
		});
		arrModalClaseBtns.forEach(modalClaseBtn => {
			modalClaseBtn.addEventListener('click', function(e) {
				modal.classList.remove('modal--open');
				arrModalContent.forEach(modalContent => {
					modalContent.classList.remove('modal__content--active');
				});
			});
		});
	};


	if (document.querySelector('.js-select-providers') !== null) {
		let selectProviders  = document.querySelector('.js-select-providers');
		let selectListProviders = document.querySelector('.js-select-list-providers');
		selectProviders.addEventListener('click', function(e) {
			selectProviders.classList.toggle('select--active');
			selectListProviders.classList.toggle('select__list--hidden');
		});
	};

	if (document.querySelector('.profile__nav-link') !== null) {
		let arrNavLinks  = document.querySelectorAll('.profile__nav-link');
		arrNavLinks.forEach(navLink => {
			navLink.addEventListener('click', function(e) {
				document.querySelector('.profile__nav-link--active').classList.remove('profile__nav-link--active');
				this.classList.add('profile__nav-link--active');		
			});
		});
	};

	//Page Slot Providers
	if (document.querySelector('.providers__select') !== null) {
		new Swiper(".providers__swiper", {
			slidesPerView: 1,
			effect: "fade",
			hashNavigation: {
				watchState: true,
			},
		});
	};

	if (document.querySelector('.providers__select') !== null) {
		let providersSelect  = document.querySelector('.providers__select');
		let providersSelectList = document.querySelector('.providers__select-list');
		providersSelect.addEventListener('click', function(e) {
			providersSelect.classList.toggle('providers__select--active');
			providersSelectList.classList.toggle('providers__select-list--hidden');
		});
	};

	if (document.querySelector('.providers__select-item') !== null) {
		let selectItems  = document.querySelectorAll('.providers__select-item');
		let providersSelectText  = document.querySelector('.providers__select-text');
		selectItems.forEach(selectItem => {
			selectItem.addEventListener('click', function(e) {
				providersSelectText.textContent = this.dataset.providerName;
			});
		});
	}

	//Page Documents

	if (document.querySelector('.documents__nav-link') !== null && document.querySelector('.documents__swiper') !== null) {
		let arrNavDocumentLinks  = document.querySelectorAll('.documents__nav-link');
		let hashDocument = window.location.hash;
		if (document.querySelector('.documents__nav-link[href="documents.html' + hashDocument + '"]') !== null) {
			document.querySelector('.documents__nav-link--active').classList.remove('documents__nav-link--active');
			document.querySelector('.documents__nav-link[href="documents.html' + hashDocument + '"]').classList.add('documents__nav-link--active');
		};
		const SWIPERDOCUMENTS = new Swiper(".documents__swiper", {
			slidesPerView: 1,
			effect: "fade",
			hashNavigation: {
				watchState: true,
			},
		});
		arrNavDocumentLinks.forEach(navDocumentLink => {
			navDocumentLink.addEventListener('click', function(e) {
				//e.preventDefault();
				let documentIndex = this.dataset.indexDocument;
				console.log(documentIndex);
				SWIPERDOCUMENTS.slideTo(parseInt(documentIndex), 0, true);
				document.querySelector('.documents__nav-link--active').classList.remove('documents__nav-link--active');
				this.classList.add('documents__nav-link--active');		
			});
		});
	};


	//Page Guides

	if (document.querySelector('.guides__nav-link') !== null && document.querySelector('.guides__swiper') !== null) {
		let arrNavGuideLinks  = document.querySelectorAll('.guides__nav-link');
		let hashGuide = window.location.hash;
		if (document.querySelector('.guides__nav-link[href="guides.html' + hashGuide + '"]') !== null) {
			document.querySelector('.guides__nav-link--active').classList.remove('guides__nav-link--active');
			document.querySelector('.guides__nav-link[href="guides.html' + hashGuide + '"]').classList.add('guides__nav-link--active');
		};
		const SWIPEGUIDES = new Swiper(".guides__swiper", {
			slidesPerView: 1,
			effect: "fade",
			hashNavigation: {
				watchState: true,
			},
		});
		arrNavGuideLinks.forEach(navGuideLink => {
			navGuideLink.addEventListener('click', function(e) {
				let guideIndex = this.dataset.indexGuide;
				SWIPEGUIDES.slideTo(parseInt(guideIndex), 0, true);
				document.querySelector('.guides__nav-link--active').classList.remove('guides__nav-link--active');
				this.classList.add('guides__nav-link--active');		
			});
		});
	};


	// Audio
	const audioPlayer = document.querySelector(".js-audio-player");
	const audio = new Audio('files/audio/vegas-live.mp3');

	audio.addEventListener( "loadeddata", () => {
		audio.volume = 0.75;
		audio.loop = true;
	}, false );

	const lasVegasBtn = audioPlayer.querySelector(".js-toggle-las-vegas-btn");
	lasVegasBtn.addEventListener( "click", () => {
		if (audio.paused) {
			lasVegasBtn.classList.remove("play");
			lasVegasBtn.classList.add("pause");
			audio.play();
		} else {
			lasVegasBtn.classList.remove("pause");
			lasVegasBtn.classList.add("play");
			audio.pause();
		}
	}, false );

	//Copy
	new ClipboardJS('.js-btn-copy');

	//Slot Favourite
	if (document.querySelector('.js-slot-favourite-load-more') !== null)  {
		let favouriteLoadMore  = document.querySelector('.js-slot-favourite-load-more');
		let arrSlots  = document.querySelectorAll('.slot');
		favouriteLoadMore.addEventListener('click', function(e) {
			arrSlots.forEach(slot => {
				slot.classList.remove('slot--visually-hidden');
			});
			favouriteLoadMore.classList.add('visually-hidden');
		});
	};

	if (document.querySelector('.slot__btn-favourites') !== null)  {
		let arrSlotBtnFavourites = document.querySelectorAll('.slot__btn-favourites');
		arrSlotBtnFavourites.forEach(slotBtnFavourites => {
			slotBtnFavourites.addEventListener('click', function(e) {
				this.classList.toggle('slot__btn-favourites--active');
			});
		});
	};


	//FAQ
	if (document.querySelector('.js-faq-item') !== null) {
		let faqItems  = document.querySelectorAll('.js-faq-item');
		faqItems.forEach(faqItem => {
			faqItem.addEventListener('click', function(e) {
				if (faqItem.classList.contains('faq__item--open')) {
					faqItem.classList.remove('faq__item--open');
				} else {
					faqItem.classList.add('faq__item--open');
				}
			});
		});
	};


	// Bonus timer
	if (document.querySelector('.bonuses__timer') !== null ) {
		function getTimeRemaining(endtime) {
			const total = Date.parse(endtime) - Date.parse(new Date());
			const seconds = Math.floor((total / 1000) % 60);
			const minutes = Math.floor((total / 1000 / 60) % 60);
			const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
			const days = Math.floor(total / (1000 * 60 * 60 * 24));
			
			return {
			  total,
			  days,
			  hours,
			  minutes,
			  seconds
			};
		  }
		  
		  function initializeClock(endtime) {
			const hoursDiv = document.querySelector('.js-bonuses-time-hours');
			const minutesDiv = document.querySelector('.js-bonuses-time-minutes');
			const secondsDiv = document.querySelector('.js-bonuses-time-seconds');
		  
			function updateClock() {
			  const t = getTimeRemaining(endtime);
		  
			  hoursDiv.innerHTML = ('0' + t.hours).slice(-2);
			  minutesDiv.innerHTML = ('0' + t.minutes).slice(-2);
			  secondsDiv.innerHTML = ('0' + t.seconds).slice(-2);
		  
			  if (t.total <= 0) {
				clearInterval(timeinterval);
			  }
			}
		  
			updateClock();
			const timeinterval = setInterval(updateClock, 1000);
		  }
		  
		  const deadline = new Date(Date.parse(new Date()) + 23 * 59 * 59 * 1000);
		  initializeClock(deadline);
	}

};
