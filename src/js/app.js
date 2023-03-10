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
	if (document.querySelector('.select--icon-bayk') !== null) {
		let arrselectIconBayk  = document.querySelectorAll('.select--icon-bayk');
		arrselectIconBayk.forEach(selectIconBayk => {
			selectIconBayk.addEventListener('click', (e) => {
				console.log('asdasdsad');
				document.querySelectorAll('.modal__super-select-list').forEach(modalSuperSelectList =>{
					modalSuperSelectList.classList.toggle('visually-hidden');
				});
			});
		});
	};
	//buy cripto modal
	if (document.querySelector('.modal__nav-btn--buy-cripto-go-to-deposit') !== null) {
		document.querySelector('.modal__nav-btn--buy-cripto-go-to-deposit').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--deposit-crypto').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-btn--buy-cripto-go-to-swap') !== null) {
		document.querySelector('.modal__nav-btn--buy-cripto-go-to-swap').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--swap').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-btn--buy-cripto-go-to-transfer') !== null) {
		document.querySelector('.modal__nav-btn--buy-cripto-go-to-transfer').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--transfer').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-btn--buy-cripto-go-to-withdraw') !== null) {
		document.querySelector('.modal__nav-btn--buy-cripto-go-to-withdraw').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--withdraw').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-crypto-btn-select-money-buy-cripto-1') !== null) {
		let modalNavCryptoBtnSelectMoneyBuyCripto1  = document.querySelector('.modal__nav-crypto-btn-select-money-buy-cripto-1');
		modalNavCryptoBtnSelectMoneyBuyCripto1.addEventListener('click', (e) => {
			document.querySelectorAll('.modal__nav-crypto-btn-select-money-buy-cripto-1-text').forEach(modalNavCryptoBtnSelectMoneyBuyCripto1Text =>{
				modalNavCryptoBtnSelectMoneyBuyCripto1Text.classList.toggle('visually-hidden');
			});
		});
	};
	if (document.querySelector('.modal__nav-crypto-btn-select-money-buy-cripto-2') !== null) {
		let modalNavCryptoBtnSelectMoneyBuyCripto2  = document.querySelector('.modal__nav-crypto-btn-select-money-buy-cripto-2');
		modalNavCryptoBtnSelectMoneyBuyCripto2.addEventListener('click', (e) => {
			document.querySelectorAll('.modal__nav-crypto-btn-select-money-buy-cripto-2-text').forEach(modalNavCryptoBtnSelectMoneyBuyCripto2Text =>{
				modalNavCryptoBtnSelectMoneyBuyCripto2Text.classList.toggle('visually-hidden');
			});
		});
	};
	if (document.querySelector('.modal__nav-crypto-btn-buy-crypto-btn-1') !== null) {
		document.querySelector('.modal__nav-crypto-btn-buy-crypto-btn-1').addEventListener('click', () => {
			document.querySelector('.modal__nav-crypto-btn-buy-crypto-btn-1').classList.remove('mask-btn--border');
			document.querySelector('.modal__nav-crypto-btn-buy-crypto-btn-1').classList.add('btn--active');
			document.querySelector('.modal__nav-crypto-btn-buy-crypto-btn-2').classList.add('mask-btn--border');
			document.querySelector('.modal__nav-crypto-btn-buy-crypto-btn-2').classList.remove('btn--active');
		});
	};
	if (document.querySelector('.modal__nav-crypto-btn-buy-crypto-btn-2') !== null) {
		document.querySelector('.modal__nav-crypto-btn-buy-crypto-btn-2').addEventListener('click', () => {
			document.querySelector('.modal__nav-crypto-btn-buy-crypto-btn-2').classList.remove('mask-btn--border');
			document.querySelector('.modal__nav-crypto-btn-buy-crypto-btn-2').classList.add('btn--active');
			document.querySelector('.modal__nav-crypto-btn-buy-crypto-btn-1').classList.add('mask-btn--border');
			document.querySelector('.modal__nav-crypto-btn-buy-crypto-btn-1').classList.remove('btn--active');
		});
	};
	//swap modal
	if (document.querySelector('.modal__nav-btn--swap-go-to-deposit') !== null) {
		document.querySelector('.modal__nav-btn--swap-go-to-deposit').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--deposit-crypto').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-btn--swap-go-to-buy-crypto') !== null) {
		document.querySelector('.modal__nav-btn--swap-go-to-buy-crypto').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--buy-crypto').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-btn--swap-go-to-transfer') !== null) {
		document.querySelector('.modal__nav-btn--swap-go-to-transfer').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--transfer').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-btn--swap-go-to-withdraw') !== null) {
		document.querySelector('.modal__nav-btn--swap-go-to-withdraw').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--withdraw').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-crypto-btn-select-money-swap-1') !== null) {
		let modalNavCryptoBtnSelectMoneySwap1  = document.querySelector('.modal__nav-crypto-btn-select-money-swap-1');
		modalNavCryptoBtnSelectMoneySwap1.addEventListener('click', (e) => {
			document.querySelectorAll('.modal__nav-crypto-btn-select-money-swap-1-text').forEach(modalNavCryptoBtnSelectMoneySwap1Text =>{
				modalNavCryptoBtnSelectMoneySwap1Text.classList.toggle('visually-hidden');
			});
		});
	};
	if (document.querySelector('.modal__nav-crypto-btn-select-money-swap-2') !== null) {
		let modalNavCryptoBtnSelectMoneySwap2  = document.querySelector('.modal__nav-crypto-btn-select-money-swap-2');
		modalNavCryptoBtnSelectMoneySwap2.addEventListener('click', (e) => {
			document.querySelectorAll('.modal__nav-crypto-btn-select-money-swap-2-text').forEach(modalNavCryptoBtnSelectMoneySwap2Text =>{
				modalNavCryptoBtnSelectMoneySwap2Text.classList.toggle('visually-hidden');
			});
		});
	};
	//transfer modal
	if (document.querySelector('.modal__nav-btn--transfer-go-to-deposit') !== null) {
		document.querySelector('.modal__nav-btn--transfer-go-to-deposit').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--deposit-crypto').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-btn--transfer-go-to-buy-crypto') !== null) {
		document.querySelector('.modal__nav-btn--transfer-go-to-buy-crypto').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--buy-crypto').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-btn--transfer-go-to-swap') !== null) {
		document.querySelector('.modal__nav-btn--transfer-go-to-swap').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--swap').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-btn--transfer-go-to-withdraw') !== null) {
		document.querySelector('.modal__nav-btn--transfer-go-to-withdraw').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--withdraw').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-crypto-btn-select-money-transfer-1') !== null) {
		let modalNavCryptoBtnSelectMoneyTransfer1  = document.querySelector('.modal__nav-crypto-btn-select-money-transfer-1');
		modalNavCryptoBtnSelectMoneyTransfer1.addEventListener('click', (e) => {
			document.querySelectorAll('.modal__nav-crypto-btn-select-money-transfer-1-text').forEach(modalNavCryptoBtnSelectMoneyTransfer1Text =>{
				modalNavCryptoBtnSelectMoneyTransfer1Text.classList.toggle('visually-hidden');
			});
		});
	};
	if (document.querySelector('.modal__nav-crypto-btn-select-money-transfer-2') !== null) {
		let modalNavCryptoBtnSelectMoneyTransfer2  = document.querySelector('.modal__nav-crypto-btn-select-money-transfer-2');
		modalNavCryptoBtnSelectMoneyTransfer2.addEventListener('click', (e) => {
			document.querySelectorAll('.modal__nav-crypto-btn-select-money-transfer-2-text').forEach(modalNavCryptoBtnSelectMoneyTransfer2Text =>{
				modalNavCryptoBtnSelectMoneyTransfer2Text.classList.toggle('visually-hidden');
			});
		});
	};
	//withdraw modal
	if (document.querySelector('.modal__nav-btn--withdraw-go-to-deposit') !== null) {
		document.querySelector('.modal__nav-btn--withdraw-go-to-deposit').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--deposit-crypto').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-btn--withdraw-go-to-buy-crypto') !== null) {
		document.querySelector('.modal__nav-btn--withdraw-go-to-buy-crypto').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--buy-crypto').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-btn--withdraw-go-to-swap') !== null) {
		document.querySelector('.modal__nav-btn--withdraw-go-to-swap').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--swap').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-btn--withdraw-go-to-transfer') !== null) {
		document.querySelector('.modal__nav-btn--withdraw-go-to-transfer').addEventListener('click', () => {
			let arrModalContent  = document.querySelectorAll('.modal__content');
			arrModalContent.forEach(modalContent => {
				modalContent.classList.remove('modal__content--active');
			});
			document.querySelector('.modal__content--transfer').classList.add('modal__content--active');
		});
	};
	if (document.querySelector('.modal__nav-crypto-btn-select-money-without') !== null) {
		let modalNavCryptoBtnSelectMoneyWithout  = document.querySelector('.modal__nav-crypto-btn-select-money-without');
		modalNavCryptoBtnSelectMoneyWithout.addEventListener('click', (e) => {
			document.querySelectorAll('.modal__nav-crypto-btn-select-money-without-text').forEach(modalNavCryptoBtnSelectMoneyWithoutText =>{
				modalNavCryptoBtnSelectMoneyWithoutText.classList.toggle('visually-hidden');
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
	if (document.querySelector('.modal__nav-crypto-btn-withdraw-btn-1') !== null) {
		document.querySelector('.modal__nav-crypto-btn-withdraw-btn-1').addEventListener('click', () => {
			document.querySelector('.modal__nav-crypto-btn-withdraw-btn-1').classList.remove('mask-btn--border');
			document.querySelector('.modal__nav-crypto-btn-withdraw-btn-1').classList.add('btn--active');
			document.querySelector('.modal__nav-crypto-btn-withdraw-btn-2').classList.add('mask-btn--border');
			document.querySelector('.modal__nav-crypto-btn-withdraw-btn-2').classList.remove('btn--active');
		});
	};
	if (document.querySelector('.modal__nav-crypto-btn-withdraw-btn-2') !== null) {
		document.querySelector('.modal__nav-crypto-btn-withdraw-btn-2').addEventListener('click', () => {
			document.querySelector('.modal__nav-crypto-btn-withdraw-btn-2').classList.remove('mask-btn--border');
			document.querySelector('.modal__nav-crypto-btn-withdraw-btn-2').classList.add('btn--active');
			document.querySelector('.modal__nav-crypto-btn-withdraw-btn-1').classList.add('mask-btn--border');
			document.querySelector('.modal__nav-crypto-btn-withdraw-btn-1').classList.remove('btn--active');
		});
	};


	//button-select
	if (document.querySelector('.button--select-1') !== null) {
		let buttonSelect1  = document.querySelector('.button--select-1');
		let buttonSelectList1  = document.querySelector('.button--select-list-1');
		let buttonSelectContentItem11  = document.querySelector('.button--select-content-item-1-1');
		let buttonSelectContentItem12  = document.querySelector('.button--select-content-item-1-2');
		buttonSelect1.addEventListener('click', (e) => {
			buttonSelectList1.classList.toggle('visually-hidden');
		});
		buttonSelectList1.addEventListener('click', (e) => {
			e.stopPropagation();
		});
		buttonSelectContentItem11.addEventListener('click', (e) => {
			let content = e.target.innerHTML;
			let buttonSelectContent = document.querySelector('.button--select-content-1').innerHTML;
			document.querySelector('.button--select-content-1').innerHTML = content;
			e.target.innerHTML = buttonSelectContent;
			buttonSelectList1.classList.toggle('visually-hidden');
		});
		buttonSelectContentItem12.addEventListener('click', (e) => {
			let content = e.target.innerHTML;
			let buttonSelectContent = document.querySelector('.button--select-content-1').innerHTML;
			document.querySelector('.button--select-content-1').innerHTML = content;
			e.target.innerHTML = buttonSelectContent;
			buttonSelectList1.classList.toggle('visually-hidden');
		});
	};

	if (document.querySelector('.button--select-2') !== null) {
		let buttonSelect2  = document.querySelector('.button--select-2');
		let buttonSelectList2  = document.querySelector('.button--select-list-2');
		let buttonSelectContentItem21  = document.querySelector('.button--select-content-item-2-1');
		let buttonSelectContentItem22  = document.querySelector('.button--select-content-item-2-2');
		buttonSelect2.addEventListener('click', (e) => {
			buttonSelectList2.classList.toggle('visually-hidden');
		});
		buttonSelectList2.addEventListener('click', (e) => {
			e.stopPropagation();
		});
		buttonSelectContentItem21.addEventListener('click', (e) => {
			let content = e.target.innerHTML;
			let buttonSelectContent = document.querySelector('.button--select-content-2').innerHTML;
			document.querySelector('.button--select-content-2').innerHTML = content;
			e.target.innerHTML = buttonSelectContent;
			buttonSelectList2.classList.toggle('visually-hidden');
		});
		buttonSelectContentItem22.addEventListener('click', (e) => {
			let content = e.target.innerHTML;
			let buttonSelectContent = document.querySelector('.button--select-content-2').innerHTML;
			document.querySelector('.button--select-content-2').innerHTML = content;
			e.target.innerHTML = buttonSelectContent;
			buttonSelectList2.classList.toggle('visually-hidden');
		});
	};

	if (document.querySelector('.button--select-3') !== null) {
		let buttonSelect3  = document.querySelector('.button--select-3');
		let buttonSelectList3  = document.querySelector('.button--select-list-3');
		let buttonSelectContentItem31  = document.querySelector('.button--select-content-item-3-1');
		buttonSelect3.addEventListener('click', (e) => {
			buttonSelectList3.classList.toggle('visually-hidden');
			document.querySelector('.button--select-list-4').classList.add('visually-hidden');
		});
		buttonSelectList3.addEventListener('click', (e) => {
			e.stopPropagation();
		});
		buttonSelectContentItem31.addEventListener('click', (e) => {
			let content = e.target.innerHTML;
			let buttonSelectContent = document.querySelector('.button--select-content-3').innerHTML;
			document.querySelector('.button--select-content-3').innerHTML = content;
			e.target.innerHTML = buttonSelectContent;
			buttonSelectList3.classList.toggle('visually-hidden');
		});
	};

	if (document.querySelector('.button--select-4') !== null) {
		let buttonSelect4  = document.querySelector('.button--select-4');
		let buttonSelectList4  = document.querySelector('.button--select-list-4');
		let buttonSelectContentItem41  = document.querySelector('.button--select-content-item-4-1');
		let buttonSelectContentItem42  = document.querySelector('.button--select-content-item-4-2');
		buttonSelect4.addEventListener('click', (e) => {
			buttonSelectList4.classList.toggle('visually-hidden');
			document.querySelector('.button--select-list-3').classList.add('visually-hidden');
		});
		buttonSelectList4.addEventListener('click', (e) => {
			e.stopPropagation();
		});
		buttonSelectContentItem41.addEventListener('click', (e) => {
			let content = e.target.innerHTML;
			let buttonSelectContent = document.querySelector('.button--select-content-4').innerHTML;
			document.querySelector('.button--select-content-4').innerHTML = content;
			e.target.innerHTML = buttonSelectContent;
			buttonSelectList4.classList.toggle('visually-hidden');
		});
		buttonSelectContentItem42.addEventListener('click', (e) => {
			let content = e.target.innerHTML;
			let buttonSelectContent = document.querySelector('.button--select-content-4').innerHTML;
			document.querySelector('.button--select-content-4').innerHTML = content;
			e.target.innerHTML = buttonSelectContent;
			buttonSelectList4.classList.toggle('visually-hidden');
		});
	};

	if (document.querySelector('.button--select-5') !== null) {
		let buttonSelect5  = document.querySelector('.button--select-5');
		let buttonSelectList5  = document.querySelector('.button--select-list-5');
		let buttonSelectContentItem51  = document.querySelector('.button--select-content-item-5-1');
		buttonSelect5.addEventListener('click', (e) => {
			buttonSelectList5.classList.toggle('visually-hidden');
			document.querySelector('.button--select-list-6').classList.add('visually-hidden');
		});
		buttonSelectList5.addEventListener('click', (e) => {
			e.stopPropagation();
		});
		buttonSelectContentItem51.addEventListener('click', (e) => {
			let content = e.target.innerHTML;
			let buttonSelectContent = document.querySelector('.button--select-content-5').innerHTML;
			document.querySelector('.button--select-content-5').innerHTML = content;
			e.target.innerHTML = buttonSelectContent;
			buttonSelectList5.classList.toggle('visually-hidden');
		});
	};

	if (document.querySelector('.button--select-6') !== null) {
		let buttonSelect6  = document.querySelector('.button--select-6');
		let buttonSelectList6  = document.querySelector('.button--select-list-6');
		let buttonSelectContentItem61  = document.querySelector('.button--select-content-item-6-1');
		let buttonSelectContentItem62  = document.querySelector('.button--select-content-item-6-2');
		buttonSelect6.addEventListener('click', (e) => {
			buttonSelectList6.classList.toggle('visually-hidden');
			document.querySelector('.button--select-list-5').classList.add('visually-hidden');
		});
		buttonSelectList6.addEventListener('click', (e) => {
			e.stopPropagation();
		});
		buttonSelectContentItem61.addEventListener('click', (e) => {
			let content = e.target.innerHTML;
			let buttonSelectContent = document.querySelector('.button--select-content-6').innerHTML;
			document.querySelector('.button--select-content-6').innerHTML = content;
			e.target.innerHTML = buttonSelectContent;
			buttonSelectList6.classList.toggle('visually-hidden');
		});
		buttonSelectContentItem62.addEventListener('click', (e) => {
			let content = e.target.innerHTML;
			let buttonSelectContent = document.querySelector('.button--select-content-6').innerHTML;
			document.querySelector('.button--select-content-6').innerHTML = content;
			e.target.innerHTML = buttonSelectContent;
			buttonSelectList6.classList.toggle('visually-hidden');
		});
	};

	if (document.querySelector('.button--select-7') !== null) {
		let buttonSelect7  = document.querySelector('.button--select-7');
		let buttonSelectList7  = document.querySelector('.button--select-list-7');
		let buttonSelectContentItem71  = document.querySelector('.button--select-content-item-7-1');
		let buttonSelectContentItem72  = document.querySelector('.button--select-content-item-7-2');
		buttonSelect7.addEventListener('click', (e) => {
			buttonSelectList7.classList.toggle('visually-hidden');
			document.querySelector('.button--select-list-8').classList.add('visually-hidden');
		});
		buttonSelectList7.addEventListener('click', (e) => {
			e.stopPropagation();
		});
		buttonSelectContentItem71.addEventListener('click', (e) => {
			let content = e.target.innerHTML;
			let buttonSelectContent = document.querySelector('.button--select-content-7').innerHTML;
			document.querySelector('.button--select-content-7').innerHTML = content;
			e.target.innerHTML = buttonSelectContent;
			buttonSelectList7.classList.add('visually-hidden');
		});
		buttonSelectContentItem72.addEventListener('click', (e) => {
			let content = e.target.innerHTML;
			let buttonSelectContent = document.querySelector('.button--select-content-7').innerHTML;
			document.querySelector('.button--select-content-7').innerHTML = content;
			e.target.innerHTML = buttonSelectContent;
			buttonSelectList7.classList.add('visually-hidden');
		});
	};

	if (document.querySelector('.button--select-8') !== null) {
		let buttonSelect8  = document.querySelector('.button--select-8');
		let buttonSelectList8  = document.querySelector('.button--select-list-8');
		let buttonSelectContentItem81  = document.querySelector('.button--select-content-item-8-1');
		let buttonSelectContentItem82  = document.querySelector('.button--select-content-item-8-2');
		buttonSelect8.addEventListener('click', (e) => {
			buttonSelectList8.classList.toggle('visually-hidden');
			document.querySelector('.button--select-list-7').classList.add('visually-hidden');
		});
		buttonSelectList8.addEventListener('click', (e) => {
			e.stopPropagation();
		});
		buttonSelectContentItem81.addEventListener('click', (e) => {
			let content = e.target.innerHTML;
			let buttonSelectContent = document.querySelector('.button--select-content-8').innerHTML;
			document.querySelector('.button--select-content-8').innerHTML = content;
			e.target.innerHTML = buttonSelectContent;
			buttonSelectList8.classList.toggle('visually-hidden');
		});
		buttonSelectContentItem82.addEventListener('click', (e) => {
			let content = e.target.innerHTML;
			let buttonSelectContent = document.querySelector('.button--select-content-8').innerHTML;
			document.querySelector('.button--select-content-8').innerHTML = content;
			e.target.innerHTML = buttonSelectContent;
			buttonSelectList8.classList.remove('visually-hidden');
		});
	};

	if (document.querySelector('.button--select-9') !== null) {
		let buttonSelect9  = document.querySelector('.button--select-9');
		let buttonSelectList9  = document.querySelector('.button--select-list-9');
		let buttonSelectContentItem91  = document.querySelector('.button--select-content-item-9-1');
		let buttonSelectContentItem92  = document.querySelector('.button--select-content-item-9-2');
		buttonSelect9.addEventListener('click', (e) => {
			buttonSelectList9.classList.toggle('visually-hidden');
		});
		buttonSelectList9.addEventListener('click', (e) => {
			e.stopPropagation();
		});
		buttonSelectContentItem91.addEventListener('click', (e) => {
			let content = e.target.innerHTML;
			let buttonSelectContent = document.querySelector('.button--select-content-9').innerHTML;
			document.querySelector('.button--select-content-9').innerHTML = content;
			e.target.innerHTML = buttonSelectContent;
			buttonSelectList9.classList.toggle('visually-hidden');
		});
		buttonSelectContentItem92.addEventListener('click', (e) => {
			let content = e.target.innerHTML;
			let buttonSelectContent = document.querySelector('.button--select-content-9').innerHTML;
			document.querySelector('.button--select-content-9').innerHTML = content;
			e.target.innerHTML = buttonSelectContent;
			buttonSelectList9.classList.toggle('visually-hidden');
		});
	};


	if (document.querySelector('.menu__settings-item--mob-menu') !== null) {
		let menuMobMenuBtn = document.querySelector('.menu__settings-item--mob-menu');
		let menuMobMenu = document.querySelector('.menu__mob-menu');
		menuMobMenuBtn.addEventListener('click', (e) => {
			menuMobMenu.classList.toggle('visually-hidden');
		});
	};

	//Page Profile

	if (document.querySelector('.profile__swiper') !== null) {
		new Swiper('.profile__swiper', {
			slidesPerView: 1,
			effect: "fade",
			allowTouchMove: false,
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

	if (document.querySelector('.profile__notifications-btn') !== null) {
		let profileNotificationsButton  = document.querySelector('.profile__notifications-btn');
		profileNotificationsButton.addEventListener('click', function(e) {
			profileNotificationsButton.classList.toggle('profile__notifications-btn--active');
		});
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

	if (document.querySelector('.logos__swiper') !== null) {
		new Swiper('.logos__swiper', {
			slidesPerView: 11,
			loop: true,
			autoplay: {
				delay: 3000,
			},
			breakpoints: {
				0: {
					slidesPerView: 2,
				},
				481: {
				  slidesPerView: 4,
				},
				769: {
				  slidesPerView: 7,
				},
				1025: {
				  slidesPerView: 11,
				},
			  },
		});
	};

	if (document.querySelector('.filters__select') !== null) {
		let filtersSelect  = document.querySelector('.filters__select');
		let slotsProvidersList = document.querySelector('.slots__providers');
		filtersSelect.addEventListener('click', function(e) {
			slotsProvidersList.classList.toggle('visually-hidden');
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
		let providersProvidersList = document.querySelector('.providers__providers');
		providersSelect.addEventListener('click', function(e) {
			providersProvidersList.classList.toggle('visually-hidden');
		});
	};

	if (document.querySelector('.providers__providers-link') !== null) {
		let arrProvidersLinks  = document.querySelectorAll('.providers__providers-link');
		let providersProvidersList = document.querySelector('.providers__providers');
		arrProvidersLinks.forEach(providersLink => {
			providersLink.addEventListener('click', function(e) {
				providersProvidersList.classList.toggle('visually-hidden');
			});
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
	};

	if (document.querySelector('.modal__select-nft') !== null) {
		let selectNft  = document.querySelector('.modal__select-nft');
		let superSelectList  = document.querySelector('.modal__super-select-list');
		selectNft.addEventListener('click', function(e) {
			superSelectList.classList.toggle('visually-hidden');
		});
	};

	if (document.querySelector('.modal__select-nft-content--select') !== null) {
		let selectNftContentSelect  = document.querySelector('.modal__select-nft-content--select');
		let superSelectList  = document.querySelector('.modal__super-select-list');
		selectNftContentSelect.addEventListener('click', function(e) {
			superSelectList.classList.toggle('visually-hidden');
		});
	};

	if (document.querySelector('.modal__select-nft-content-item') !== null) {
		let arrSelectNftContentItems  = document.querySelectorAll('.modal__select-nft-content-item');
		let superSelectList  = document.querySelector('.modal__super-select-list');
		let inputNftSystem = document.querySelector('.nft_system');
		arrSelectNftContentItems.forEach(selectNftContentItem => {
			selectNftContentItem.addEventListener('click', function(e) {
				let arrSelectNftContentItemsMore  = document.querySelectorAll('.modal__select-nft-content-item');
				arrSelectNftContentItemsMore.forEach(selectNftContentItemMore => {
					selectNftContentItemMore.classList.remove('modal__select-nft-content-item--active');
				});
				let content = this.innerHTML;
				let nftSystem = this.dataset.nftSystem;
				document.querySelector('.modal__select-nft-content--select').innerHTML = content;
				document.querySelector('.modal__select-nft-content--select-main').innerHTML = content;
				superSelectList.classList.toggle('visually-hidden');
				this.classList.add('modal__select-nft-content-item--active');
				inputNftSystem.value = nftSystem;
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
			allowTouchMove: false,
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
			allowTouchMove: false,
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
				e.stopPropagation();
				this.classList.toggle('slot__btn-favourites--active');
			});
		});
	};

	if (document.querySelector('.slot-open__button-more') !== null)  {
		let slotBtnMore = document.querySelector('.slot-open__button-more');
		slotBtnMore.addEventListener('click', function(e) {
			this.classList.add('visually-hidden');
			document.querySelector('.slot-open__info-text').style.maxHeight = 'none';
			document.querySelector('.slot-open__info-text').style.marginBottom = '1.25rem';
		});
	};

	if (document.querySelector('.modal__input-btn--password') !== null)  {
		let btnTypePassword = document.querySelector('.modal__input-btn--password');
		btnTypePassword.addEventListener('click', function(e) {
			let inputPasswordType = this.previousSibling.previousSibling.type;
			if (inputPasswordType == 'password') {
				this.previousSibling.previousSibling.type = 'text';
			} else {
				this.previousSibling.previousSibling.type = 'password';
			}
		});
	};

	if (document.querySelector('.checkbox__input--radio') !== null) {
		let arrCheckboxInputRadio = document.querySelectorAll('.checkbox__input--radio');
		arrCheckboxInputRadio.forEach(checkboxInputRadio => {
			checkboxInputRadio.addEventListener('change', function(e) {
				let arrCheckboxInputRadioMore = document.querySelectorAll('.checkbox__input--radio');
				arrCheckboxInputRadioMore.forEach(checkboxInputRadioMore => {
					checkboxInputRadioMore.checked = false;
				});
				this.checked = true;
			});
		});
	}


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
