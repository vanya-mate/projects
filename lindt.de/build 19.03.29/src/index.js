let createPopIn = () => {
  let popinElement = document.createElement('div');
  popinElement.id = 'popinElementKam';
  popinElement.innerHTML = `
    <div class="closedElementKam"></div>
    <h1>Pünktlich zu Ostern</h1>
    <p>Bestellen Sie jetzt, damit Sie Ihren Liebsten pünktlich zum Osterfest eine Freude bereiten können!</p>
    <button>Fortfahren</button>
  `;
  return popinElement;
}
let createPopInBackground = () => {
  let createPopInBackground = document.createElement('div');
  createPopInBackground.id = 'popinElementBackKam';
  return createPopInBackground;
}
let popInBackground = createPopInBackground();
let oneShow = false;
let show = (obj) => {
  if(!oneShow) {
    if(obj.querySelector('.closedElementKam') && obj.querySelector('button')) {
      obj.querySelector('.closedElementKam').addEventListener('click', () => {
        hide(obj)();
        hide(popInBackground)();
        Kameleoon.API.processConversion(141474);
      });
      obj.querySelector('button').addEventListener('click', () => {
        hide(obj)();
        hide(popInBackground)();
        Kameleoon.API.processConversion(141473);
      });
    }
    return () => {
      document.body.insertAdjacentElement('afterBegin', obj);
    }
  }
}
let hide = (obj) => {
  return () => {
    document.body.removeChild(obj);
  }
}
if(Kameleoon.Utils.readLocalData('onlyOneShow', 'COOKIE') != '1') {
  Kameleoon.Utils.createLocalData('onlyOneShow', '1', 1, '', 'COOKIE');
  show(createPopIn())();
  show(popInBackground)();
  oneShow = true;
}


// global
if(location.href.match('/shop/epages/Lindt.sf')) {
  Kameleoon.API.runWhenConditionTrue(() => {
    if(document.querySelector('.info span h1') && document.querySelector('.info span h1').innerText == 'IHRE BESTELLUNG' && document.querySelectorAll('.navbar-progress li').length >= 6) {
      return true;
    }
  }, () => {
    let historyPages = Kameleoon.Utils.readLocalData('historyPages', 'COOKIE') ? parseInt(Kameleoon.Utils.readLocalData('historyPages', 'COOKIE')) : 2;
    if(document.querySelectorAll('.navbar-progress li')[historyPages].className == 'current') {
      Kameleoon.Utils.createLocalData('historyPages', historyPages += 1, 1/24, '', 'COOKIE');
      Kameleoon.API.processConversion(141475);
    }
  });
  Kameleoon.API.runWhenConditionTrue(() => {
    if(document.querySelector('.CustomerOrder .navbar-progress-confirmation') && document.querySelector('.CustomerOrder .navbar-progress-confirmation').innerText == 'Vielen Dank für Ihre Bestellung.' && window.ia_v !== null) {
      return true;
    }
  }, () => {
    Kameleoon.Utils.createLocalData('historyPages', 2, 1/24, '', 'COOKIE');
    Kameleoon.API.processConversion(141475);
    Kameleoon.API.processConversion(141566, ia_v);
  });
}
