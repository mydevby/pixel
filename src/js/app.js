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

};
