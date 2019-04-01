"use strict";

console.log('injector ready'); // var target = document.querySelector('body');
// var config = {
// 	childList: true,
// 	subtree: true
// };
// var stopObserv = false;
// var changeElem = {
// 	underImg: true,
// 	oldPrice: true,
// 	codeProduct: true,
// 	reviewElem: true
// }
// var observer = new MutationObserver(function(mutations) {
// 	mutations.forEach(function(mutation) {
// 		// delete string under image
// 		if(document.querySelector('.benefice') && changeElem.underImg) {
// 			document.querySelector('.benefice').style.display = 'none';
// 			changeElem.underImg = false;
// 		}
// 		// delete string review
// 		if(document.querySelector('.bv-write-review-container.bv-write-container') && changeElem.reviewElem) {
// 			document.querySelector('.bv-write-review-container.bv-write-container').setAttribute('style', 'display: none !important;');
// 			changeElem.reviewElem = false;
// 		}
// 		// change place of old price
// 		if(document.querySelector('.prix') && document.querySelector('.barre-2digit-18px') && changeElem.oldPrice) {
// 			document.querySelector('.prix').insertBefore(document.querySelector('.barre-2digit-18px'), document.querySelector('.prix').children[0]);
// 			changeElem.oldPrice = false;
// 		}
// 		// change place of code product
// 		if(document.querySelector('.mention') && changeElem.codeProduct) {
// 			document.querySelector('.etoile-avis').insertBefore(document.querySelector('.mention'), document.querySelector('.etoile-avis').children[0]);
// 			changeElem.codeProduct = false;
// 		}
// 	});
// });
// observer.observe(target, config);
// window.addEventListener('load', function() {
// 			document.querySelector('.benefice').style.display = 'none';
// 			document.querySelector('.bv-write-review-container.bv-write-container').setAttribute('style', 'display: none !important;');
// 			document.querySelector('.prix').insertBefore(document.querySelector('.barre-2digit-18px'), document.querySelector('.prix').children[0]);
// 			document.querySelector('.etoile-avis').insertBefore(document.querySelector('.mention'), document.querySelector('.etoile-avis').children[0]);
// });
//
// Kameleoon.API.runWhenElementPresent('.benefice', function(){
// 	document.querySelector('.benefice').style.display = 'none';
// });
// Kameleoon.API.runWhenElementPresent('.bv-write-review-container.bv-write-container', function(){
// 	document.querySelector('.bv-write-review-container.bv-write-container').setAttribute('style', 'display: none !important;');
// });
// Kameleoon.API.runWhenElementPresent('.prix', function(){
// 	document.querySelector('.prix').insertBefore(document.querySelector('.barre-2digit-18px'), document.querySelector('.prix').children[0]);
// });
// Kameleoon.API.runWhenElementPresent('.mention', function(){
// 	document.querySelector('.etoile-avis').insertBefore(document.querySelector('.mention'), document.querySelector('.etoile-avis').children[0]);
// });