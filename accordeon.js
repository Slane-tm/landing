let titles = document.querySelectorAll('.accordeon-item-title');
for(title of titles){
	title.addEventListener('click', function(e) {
		let wrapperBlock = e.target.closest('.accordeon-item')
	wrapperBlock.classList.toggle("hide")
	});	
}