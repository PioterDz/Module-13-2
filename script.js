'use strict';
(function(){ 

	var modalOneClick = document.querySelector('#modal-one-click');
	var modalOneSelector = document.querySelector('#modal-one');

	modalOneClick.addEventListener('click', showModal);

	var showModal = function(event){
		event.preventDefault();
		for(var i = 0; i < modalLinks.length; i++){
			modalLinks[i].addEventListener('click', hideModal);
		}
		modalOneSelector.classList.add('show');
		document.querySelector('#modal-overlay').classList.add('show');
		console.log('click modal one');
	};
	

	
	var modalLinks = document.querySelectorAll('.show-modal');
	
	for(var i = 0; i < modalLinks.length; i++){
		modalLinks[i].addEventListener('click', showModal);
	}



	var hideModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.remove('show');
	};
	
	var closeButtons = document.querySelectorAll('.modal .close');
	
	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal);
	}
	

	
	document.querySelector('#modal-overlay').addEventListener('click', hideModal);
	

	
	var modals = document.querySelectorAll('.modal');
	
	for(var i = 0; i < modals.length; i++){
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	}
	
	
})(); 