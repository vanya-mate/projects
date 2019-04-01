"use strict";

var createPopIn = function createPopIn() {
  var popinElement = document.createElement('div');
  popinElement.id = 'popinElementKam';
  popinElement.innerHTML = "\n    <div class=\"closedElementKam\"></div>\n    <h1>P\xFCnktlich zu Ostern</h1>\n    <p>Bestellen Sie jetzt, damit Sie Ihren Liebsten p\xFCnktlich zum Osterfest eine Freude bereiten k\xF6nnen!</p>\n    <button>Fortfahren</button>\n  ";
  return popinElement;
};

var oneShow = false;

var show = function show(obj) {
  console.log('show element');

  if (!oneShow) {
    oneShow = true;
    obj.querySelector('.closedElementKam').addEventListener('click', function () {
      console.log('goal 2: closed click');
      hide(obj)();
    });
    obj.querySelector('button').addEventListener('click', function () {
      console.log('goal 1: button click');
      hide(obj)(); // Kameleoon.API.processConversion(141473);
    });
    return function () {
      document.body.insertAdjacentElement('afterBegin', obj);
    };
  }
};

var hide = function hide(obj) {
  return function () {
    // Kameleoon.API.processConversion(141474);
    document.body.removeChild(obj);
  };
};

var orderPage = function orderPage() {
  var infoh1 = false;

  if (document.querySelector('.info span h1')) {
    infoh1 = document.querySelector('.info span h1').innerText;
  }

  if (infoh1 == 'IHRE BESTELLUNG') {
    var historyPages = Kameleoon.Utils.readLocalData('historyPages', 'COOKIE') ? parseInt(Kameleoon.Utils.readLocalData('historyPages', 'COOKIE')) : 2;

    if (document.querySelectorAll('.navbar-progress li')[historyPages].className == 'current') {
      console.log('history set');
      console.log('goal 3');
      Kameleoon.Utils.createLocalData('historyPages', historyPages += 1, 365, '', 'COOKIE');
    }
  }
};

if (!window.kameleoonInjector) {
  window.kameleoonInjector = true;
  var headNode = document.getElementsByTagName("head")[0];
  var node = document.createElement("script");
  node.setAttribute("type", "text/javascript");
  node.setAttribute("charset", "utf-8");
  node.innerHTML = "window.Kameleoon = undefined;";
  headNode.appendChild(node);
  node = document.createElement("script");
  node.setAttribute("type", "text/javascript");
  node.setAttribute("charset", "utf-8");
  node.setAttribute("src", "//static.kameleoon.com/css/customers/xcsgifsqr5/0/kameleoon.js");
  headNode.appendChild(node);
}

window.addEventListener('load', function () {
  show(createPopIn())();
  orderPage();
});