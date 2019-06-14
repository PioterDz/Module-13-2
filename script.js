'use strict';
(function(){ 

	
	var modalLinks = document.querySelectorAll('.show-modal');
	var closeButtons = document.querySelectorAll('.close');
	var modals = document.querySelectorAll('.modal');
	var modalOverlay = document.querySelector('#modal-overlay');
	
	modalOverlay.addEventListener('click', hideModal);

	var showModal = function(event) {
		event.preventDefault();
		var id = event.target.getAttribute('href');
		document.querySelector(id).classList.toggle('show');	
		modalOverlay.classList.add('show');
	}

	var hideModal = function(event){
		event.preventDefault();
		modalOverlay.classList.remove('show');
		for(var i = 0; i < modals.length; i++) {
			modals[i].classList.remove('show');
		}
	};
	
	

	for(var i = 0; i < modalLinks.length; i++){
		modalLinks[i].addEventListener('click', showModal);
	}
	
	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal);
	}
	
	for(var i = 0; i < modals.length; i++){
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	}
	
})(); 