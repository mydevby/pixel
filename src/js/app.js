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

	//Page Modals
	
	if (document.querySelector('.modal__btn-nav-transactions') !== null) {
		document.querySelectorAll('.modal__btn-nav-transactions').forEach(modalBtnNavTransactions => {
			modalBtnNavTransactions.addEventListener('click', function(e) {
				document.querySelectorAll('.modal__btn-nav-transactions').forEach(modalBtnNavTransactionsOver => {
					modalBtnNavTransactionsOver.classList.add('button--hover');
					modalBtnNavTransactionsOver.classList.remove('button--disabled');
					modalBtnNavTransactionsOver.children[0].classList.remove('mask-bg--accent');
					modalBtnNavTransactionsOver.children[0].classList.add('mask-btn--border', 'mask-btn--border-custom');
				});
				this.classList.remove('button--hover');
				this.classList.add('button--disabled');
				this.children[0].classList.add('mask-bg--accent');
				this.children[0].classList.remove('mask-btn--border', 'mask-btn--border-custom');
			});
		});
	};

	if (document.querySelector('.modal__button--go-to-login') !== null) {
		document.querySelector('.modal__button--go-to-login').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--login').classList.add('modal__content--active');
		});
	};

	if (document.querySelector('.modal__button--go-to-registration') !== null) {
		document.querySelector('.modal__button--go-to-registration').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--registration').classList.add('modal__content--active');
		});
	};

	if (document.querySelector('.modal__nav-crypto-btn--crypto-go-to-deposit-fiat') !== null) {
		document.querySelector('.modal__nav-crypto-btn--crypto-go-to-deposit-fiat').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--deposit-fiat').classList.add('modal__content--active');
		});
	};

	//deposit-crypto modal
	if (document.querySelector('.modal__nav-btn--crypto-go-to-buy-crypto') !== null) {
		document.querySelector('.modal__nav-btn--crypto-go-to-buy-crypto').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--buy-crypto').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-btn--crypto-go-to-swap') !== null) {
		document.querySelector('.modal__nav-btn--crypto-go-to-swap').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--swap').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-btn--crypto-go-to-transfer') !== null) {
		document.querySelector('.modal__nav-btn--crypto-go-to-transfer').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--transfer').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-btn--crypto-go-to-withdraw') !== null) {
		document.querySelector('.modal__nav-btn--crypto-go-to-withdraw').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--withdraw').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-crypto-btn--crypto-go-to-deposit-nft') !== null) {
		document.querySelector('.modal__nav-crypto-btn--crypto-go-to-deposit-nft').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--deposit-nft').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-crypto-btn--fiat-go-to-deposit-crypto') !== null) {
		document.querySelector('.modal__nav-crypto-btn--fiat-go-to-deposit-crypto').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--deposit-crypto').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-crypto-btn--select') !== null) {
		let arrNavCryptoBtnSelect  = document.querySelectorAll('.modal__nav-crypto-btn--select');
		arrNavCryptoBtnSelect.forEach(navCryptoBtnSelect => {
			navCryptoBtnSelect.addEventListener('click', (e) => {
				arrNavCryptoBtnSelect.forEach(navCryptoBtnSelectOver => {
					navCryptoBtnSelectOver.classList.remove('btn--active');
				});
				navCryptoBtnSelect.classList.add('btn--active');
			});
		});
	};
	if (document.querySelector('.modal__nav-crypto-btn-select-money') !== null) {
		let modalNavCryptoBtnSelectMoney  = document.querySelector('.modal__nav-crypto-btn-select-money');
		modalNavCryptoBtnSelectMoney.addEventListener('click', (e) => {
			document.querySelectorAll('.modal__nav-crypto-btn-select-money-text').forEach(modalNavCryptoBtnSelectMoneyText =>{
				modalNavCryptoBtnSelectMoneyText.classList.toggle('visually-hidden');
			});
		});
	};
	//deposit-fiat modal
	if (document.querySelector('.modal__nav-btn--fiat-go-to-buy-crypto') !== null) {
		document.querySelector('.modal__nav-btn--fiat-go-to-buy-crypto').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--buy-crypto').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-btn--fiat-go-to-swap') !== null) {
		document.querySelector('.modal__nav-btn--fiat-go-to-swap').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--swap').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-btn--fiat-go-to-transfer') !== null) {
		document.querySelector('.modal__nav-btn--fiat-go-to-transfer').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--transfer').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-btn--fiat-go-to-withdraw') !== null) {
		document.querySelector('.modal__nav-btn--fiat-go-to-withdraw').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--withdraw').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-crypto-btn--fiat-go-to-deposit-nft') !== null) {
		document.querySelector('.modal__nav-crypto-btn--fiat-go-to-deposit-nft').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--deposit-nft').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-crypto-btn--nft-go-to-deposit-crypto') !== null) {
		document.querySelector('.modal__nav-crypto-btn--nft-go-to-deposit-crypto').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--deposit-crypto').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-fiat-btn-select-money') !== null) {
		let modalNavFiatBtnSelectMoney  = document.querySelector('.modal__nav-fiat-btn-select-money');
		modalNavFiatBtnSelectMoney.addEventListener('click', (e) => {
			document.querySelectorAll('.modal__nav-fiat-btn-select-money-text').forEach(modalNavFiatBtnSelectMoneyText =>{
				modalNavFiatBtnSelectMoneyText.classList.toggle('visually-hidden');
			});
		});
	};
	if (document.querySelector('.modal__fiat-btn') !== null) {
		let arrNavFiatBtnSelect  = document.querySelectorAll('.modal__fiat-btn');
		arrNavFiatBtnSelect.forEach(navFiatBtnSelect => {
			navFiatBtnSelect.addEventListener('click', (e) => {
				arrNavFiatBtnSelect.forEach(navFiatBtnSelectOver => {
					navFiatBtnSelectOver.classList.remove('modal__fiat-btn--active');
				});
				navFiatBtnSelect.classList.add('modal__fiat-btn--active');
			});
		});
	};
	//deposit-nft modal
	if (document.querySelector('.modal__nav-btn--nft-go-to-buy-crypto') !== null) {
		document.querySelector('.modal__nav-btn--nft-go-to-buy-crypto').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--buy-crypto').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-btn--nft-go-to-swap') !== null) {
		document.querySelector('.modal__nav-btn--nft-go-to-swap').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--swap').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-btn--nft-go-to-transfer') !== null) {
		document.querySelector('.modal__nav-btn--nft-go-to-transfer').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--transfer').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-btn--nft-go-to-withdraw') !== null) {
		document.querySelector('.modal__nav-btn--nft-go-to-withdraw').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--withdraw').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-nft-btn-select-money') !== null) {
		let modalNavNftBtnSelectMoney  = document.querySelector('.modal__nav-nft-btn-select-money');
		modalNavNftBtnSelectMoney.addEventListener('click', (e) => {
			document.querySelectorAll('.modal__nav-nft-btn-select-money-text').forEach(modalNavNftBtnSelectMoneyText =>{
				modalNavNftBtnSelectMoneyText.classList.toggle('visually-hidden');
			});
		});
	};

	if (document.querySelector('.modal__nav-crypto-btn--nft-go-to-deposit-fiat') !== null) {
		document.querySelector('.modal__nav-crypto-btn--nft-go-to-deposit-fiat').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--deposit-fiat').classList.add('modal__content--active');
		});
	};

	//Page Profile

	if (document.querySelector('.profile__swiper') !== null) {
		new Swiper('.profile__swiper', {
			slidesPerView: 1,
			effect: "fade",
			hashNavigation: {
				watchState: true,
			},
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

	if (document.getElementById('verification-step-1') !== null) {
		document.getElementById('verification-step-1').addEventListener('change', () => {
			document.querySelector('.profile__go-to-verification-step-2').classList.toggle('button--disabled');
		})
	};

	if (document.querySelector('.profile__go-to-verification-step-2') !== null) {
		let goToVerificationStep2  = document.querySelector('.profile__go-to-verification-step-2');
		goToVerificationStep2.addEventListener('click', function(e) {
			document.querySelector('.profile__info-content--verification-step-1').classList.add('visually-hidden');
			document.querySelector('.profile__info-content--verification-step-2').classList.remove('visually-hidden');
		});
	};

	if (document.querySelector('.profile__go-to-verification-step-3') !== null) {
		let goToVerificationStep3  = document.querySelector('.profile__go-to-verification-step-3');
		goToVerificationStep3.addEventListener('click', function(e) {
			document.querySelector('.profile__info-content--verification-step-2').classList.add('visually-hidden');
			document.querySelector('.profile__info-content--verification-step-3').classList.remove('visually-hidden');
		});
	};

	if (document.querySelector('.profile__go-to-verification-step-4') !== null) {
		let goToVerificationStep4  = document.querySelector('.profile__go-to-verification-step-4');
		goToVerificationStep4.addEventListener('click', function(e) {
			document.querySelector('.profile__info-content--verification-step-3').classList.add('visually-hidden');
			document.querySelector('.profile__info-content--verification-step-4').classList.remove('visually-hidden');
		});
	};

	if (document.querySelector('.profile__go-to-verification-step-5') !== null) {
		let goToVerificationStep5  = document.querySelector('.profile__go-to-verification-step-5');
		goToVerificationStep5.addEventListener('click', function(e) {
			document.querySelector('.profile__info-content--verification-step-4').classList.add('visually-hidden');
			document.querySelector('.profile__info-content--verification-step-5').classList.remove('visually-hidden');
		});
	};

	if (document.querySelector('.profile__go-to-2fa-step-2') !== null) {
		let goTo2FAStep2  = document.querySelector('.profile__go-to-2fa-step-2');
		goTo2FAStep2.addEventListener('click', function(e) {
			document.querySelector('.profile__info-content--2fa-step-1').classList.add('visually-hidden');
			document.querySelector('.profile__info-content--2fa-step-2').classList.remove('visually-hidden');
		});
	};

	if (document.querySelector('.profile__nav-link') !== null) {
		let hashProfile = window.location.hash;
		if (document.querySelector('.profile__nav-link[href="profile.html' + hashProfile + '"]') !== null) {
			document.querySelector('.profile__nav-link--active').classList.remove('profile__nav-link--active');
			document.querySelector('.profile__nav-link[href="profile.html' + hashProfile + '"]').classList.add('profile__nav-link--active');
		};
	};

	if (document.querySelector('.profile__notifications-btn') !== null) {
		let profileNotificationsButton  = document.querySelector('.profile__notifications-btn');
		profileNotificationsButton.addEventListener('click', function(e) {
			profileNotificationsButton.classList.toggle('profile__notifications-btn--active');
		});
	};


	//Page Slot

	if (document.querySelector('.slot-open__button-demo') !== null) {
		let slotOpenButtonDemo  = document.querySelector('.slot-open__button-demo');
		slotOpenButtonDemo.addEventListener('click', function(e) {
			slotOpenButtonDemo.classList.toggle('slot-open__button-demo--active');
		});
	};

	if (document.querySelector('.slot-open__button-favourite') !== null) {
		let slotOpenButtonFavourite  = document.querySelector('.slot-open__button-favourite');
		slotOpenButtonFavourite.addEventListener('click', function(e) {
			slotOpenButtonFavourite.classList.toggle('slot-open__button-favourite--active');
		});
	};

	//Index Page
	if (document.querySelector('.filters__select') !== null) {
		let filtersSelect  = document.querySelector('.filters__select');
		let filtersSelectList = document.querySelector('.filters__select-list');
		filtersSelect.addEventListener('click', function(e) {
			filtersSelect.classList.toggle('filters__select--active');
			filtersSelectList.classList.toggle('filters__select-list--hidden');
		});
	};

	//Page Slot Providers
	if (document.querySelector('.providers__select') !== null) {
		new Swiper('.providers__swiper', {
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
