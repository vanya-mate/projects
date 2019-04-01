"use strict";

var createPopIn = function createPopIn() {
  var popinElement = document.createElement('div');
  popinElement.id = 'popinElementKam';
  popinElement.innerHTML = "\n    <div class=\"closedElementKam\"></div>\n    <h1>P\xFCnktlich zu Ostern</h1>\n    <p>Bestellen Sie jetzt, damit Sie Ihren Liebsten p\xFCnktlich zum Osterfest eine Freude bereiten k\xF6nnen!</p>\n    <button>Fortfahren</button>\n  ";
  return popinElement;
};

var createPopInBackground = function createPopInBackground() {
  var createPopInBackground = document.createElement('div');
  createPopInBackground.id = 'popinElementBackKam';
  return createPopInBackground;
};

var popInBackground = createPopInBackground();
var oneShow = false;

var show = function show(obj) {
  if (!oneShow) {
    if (obj.querySelector('.closedElementKam') && obj.querySelector('button')) {
      obj.querySelector('.closedElementKam').addEventListener('click', function () {
        hide(obj)();
        hide(popInBackground)();
        Kameleoon.API.processConversion(141474);
      });
      obj.querySelector('button').addEventListener('click', function () {
        hide(obj)();
        hide(popInBackground)();
        Kameleoon.API.processConversion(141473);
      });
    }

    return function () {
      document.body.insertAdjacentElement('afterBegin', obj);
    };
  }
};

var hide = function hide(obj) {
  return function () {
    document.body.removeChild(obj);
  };
};

if (Kameleoon.Utils.readLocalData('onlyOneShow', 'COOKIE') != '1') {
  Kameleoon.Utils.createLocalData('onlyOneShow', '1', 1, '', 'COOKIE');
  show(createPopIn())();
  show(popInBackground)();
  oneShow = true;
} // global


if (location.href.match('/shop/epages/Lindt.sf')) {
  Kameleoon.API.runWhenConditionTrue(function () {
    if (document.querySelector('.info span h1') && document.querySelector('.info span h1').innerText == 'IHRE BESTELLUNG' && document.querySelectorAll('.navbar-progress li').length >= 6) {
      return true;
    }
  }, function () {
    var historyPages = Kameleoon.Utils.readLocalData('historyPages', 'COOKIE') ? parseInt(Kameleoon.Utils.readLocalData('historyPages', 'COOKIE')) : 2;

    if (document.querySelectorAll('.navbar-progress li')[historyPages].className == 'current') {
      Kameleoon.Utils.createLocalData('historyPages', historyPages += 1, 1 / 24, '', 'COOKIE');
      Kameleoon.API.processConversion(141475);
    }
  });
  Kameleoon.API.runWhenConditionTrue(function () {
    if (document.querySelector('.CustomerOrder .navbar-progress-confirmation') && document.querySelector('.CustomerOrder .navbar-progress-confirmation').innerText == 'Vielen Dank für Ihre Bestellung.' && window.ia_v !== null) {
      return true;
    }
  }, function () {
    Kameleoon.Utils.createLocalData('historyPages', 2, 1 / 24, '', 'COOKIE');
    Kameleoon.API.processConversion(141475);
    Kameleoon.API.processConversion(141566, ia_v);
  });
} // document.querySelector('#BasketAddressFormContainer button .SelectedItem').innerText == 'Bezahlen' ||
// document.querySelector('#BasketAddressFormContainer .btn.btn-default.pull-right').innerText == 'Bezahlen' ||
// document.querySelector('#BasketAddressFormContainer .ep-js.btn.btn-default.pull-right.ep-uiInput.ep-uiInput-button').innerText == 'Bezahlen' ||
// document.querySelector('#BasketAddressFormContainer .SubmitButton.DoOrder.ep-js.ep-uiInput-big.ep-uiInput.ep-uiInput-button.btn.btn-default.pull-right').innerText == 'Zahlungspflichtig bestellen'