// const typeWriter = function(txtElement, words, wait = 3000){
// 	this.txtElement = txtElement;
// 	this.words = words;
// 	this.txt = '';
// 	this.wordIndex = 0;
// 	this.wait = parseInt(wait, 10);
// 	this.type();
// 	this.isDeleting = false;
// }

// //type method
// typeWriter.prototype.type = function() {
// 	// Current index of word
// 	const current = this.wordIndex % this.words.length;
	
// 	const fullTxt = this.words[current];
// 	// console.log(fullTxt);
	
// 	if(this.isDeleting) {
// 		//remive char
// 		this.text = fullTxt.substring(0, this.txt.lenght - 1);

// 	} else{
// 		//add char
// 		this.text = fullTxt.substring(0, this.txt.lenght + 1);
// 	}
// 	this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
// 	setTimeout(() => this.type(), 500)


// }

// //Init on Dom Load
// document.addEventListener('DOMContentLoaded', init);

// //init App
// function init() {
// 	const txtElement = document.querySelector('.txt-type');
// 	const words = JSON.parse(txtElement.getAttribute('data-words'));
// 	const wait = txtElement.getAttribute('data-wait');

// 	//init typewriter
// 	new typeWriter(txtElement, words, wait);
// }

