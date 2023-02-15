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

};
