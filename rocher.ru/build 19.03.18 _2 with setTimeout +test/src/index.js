const waitKam = setInterval(() =>{
	if(Kameleoon !== undefined){
		clearInterval(waitKam)
		start()
	}
}, 200)
function start(){
	Kameleoon.API.runWhenElementPresent('.benefice', function(){
		document.querySelector('.benefice').style.display = 'none';
	});
	Kameleoon.API.runWhenElementPresent('.bv-write-review-container.bv-write-container', function(){
		document.querySelector('.bv-write-review-container.bv-write-container').setAttribute('style', 'display: none !important;');
	});
	// setTimeout(function() {
	//   Kameleoon.API.runWhenElementPresent('.mystkr.mystkr-reduction', function(){
	//   	if(document.querySelector('.barre-2digit-18px')) {
	//   		document.querySelector('.prix').insertBefore(document.querySelector('.barre-2digit-18px'), document.querySelector('.prix').children[0]);
	//   	}
	//   });
	// }, 1000);
	  Kameleoon.API.runWhenElementPresent('#priceDiscount', function(){
	  	console.log(document.getElementById('priceDiscount').innerHTML);
	  	console.log(document.getElementById('priceDiscount').children[0]);
	  	console.log(document.querySelector('#priceDiscount > .barre-2digit-18px'));
	  	if(document.querySelector('#priceDiscount > .barre-2digit-18px')) {
	  		document.querySelector('.prix').insertBefore(document.querySelector('.barre-2digit-18px'), document.querySelector('.prix').children[0]);
	  	}
	  });
	Kameleoon.API.runWhenElementPresent('.mention', function(){
		if(document.querySelector('.etoile-avis')) {
			document.querySelector('.etoile-avis').insertBefore(document.querySelector('.mention'), document.querySelector('.etoile-avis').children[0]);
		}
	});
}
