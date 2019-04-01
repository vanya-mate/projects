Kameleoon.API.runWhenElementPresent('.benefice', function () {
  document.querySelector('.benefice').style.display = 'none';
});
Kameleoon.API.runWhenElementPresent('.bv-write-review-container.bv-write-container', function () {
  document.querySelector('.bv-write-review-container.bv-write-container').setAttribute('style', 'display: none !important;');
});
Kameleoon.API.runWhenConditionTrue(function () {
  if (document.querySelector('.prix .quantite') && document.querySelector('.prix .quantite').textContent.length > 2) {
    return true;
  }
}, function () {
  Kameleoon.API.runWhenElementPresent('.prix .barre-2digit-18px', function () {
    console.log($(document.querySelector('.barre-2digit-18px')));
    document.querySelector('.prix').insertAdjacentElement('afterbegin', document.querySelector('.prix .barre-2digit-18px'));
  }, false, 500);
});
Kameleoon.API.runWhenElementPresent('.mention', function () {
  if (document.querySelector('.etoile-avis')) {
    document.querySelector('.etoile-avis').insertAdjacentElement('afterbegin', document.querySelector('.mention'));
  }
});
