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
		let modal  = document.querySelector('.modal');
		arrModalsBtn.forEach(modalBtn => {
			modalBtn.addEventListener('click', function(e) {
				let name = modalBtn.dataset.modalName;
				console.log(name);
				modal.classList.add('modal--open');
			});
		});
	};

	if (document.querySelector('.modal') !== null) {
		let modal  = document.querySelector('.modal');
		modal.addEventListener('click', function(e) {
			modal.classList.remove('modal--open');
		});
	}
};
