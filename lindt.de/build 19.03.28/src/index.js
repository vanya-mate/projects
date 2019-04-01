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
let oneShow = false;
let show = (obj) => {
  if(!oneShow) {
    oneShow = true;
    obj.querySelector('.closedElementKam').addEventListener('click', () => {
      hide(obj)();
      Kameleoon.API.processConversion(141474);
    });
    obj.querySelector('button').addEventListener('click', () => {
      hide(obj)();
      Kameleoon.API.processConversion(141473);
    });
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
}


// global
if(location.href.match('/shop/epages/Lindt.sf')) {
  Kameleoon.API.runWhenConditionTrue(() => {
    if(document.querySelector('.info span h1').innerText == 'IHRE BESTELLUNG' && document.querySelectorAll('.navbar-progress li').length == 8) {
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
    if(
      document.querySelector('#BasketAddressFormContainer button .SelectedItem').innerText == 'Bezahlen' ||
      document.querySelector('#BasketAddressFormContainer .btn.btn-default.pull-right').innerText == 'Bezahlen' ||
      document.querySelector('#BasketAddressFormContainer .ep-js.btn.btn-default.pull-right.ep-uiInput.ep-uiInput-button').innerText == 'Bezahlen' ||
      document.querySelector('#BasketAddressFormContainer .SubmitButton.DoOrder.ep-js.ep-uiInput-big.ep-uiInput.ep-uiInput-button.btn.btn-default.pull-right').innerText == 'Zahlungspflichtig bestellen'
    ) {
      return true;
    }
  }, () => {
    document.querySelector('#BasketAddressFormContainer button .SelectedItem').addEventListener('click', () => {
      Kameleoon.Utils.createLocalData('historyPages', 2, 1/24, '', 'COOKIE');
      Kameleoon.API.processConversion(141475);
    });
  });
}

// let orderPage = () => {
//   let infoh1 = false;
//   if(document.querySelector('.info span h1')) {
//     infoh1 = document.querySelector('.info span h1').innerText;
//   }
//   if(infoh1 == 'IHRE BESTELLUNG') {
//     let historyPages = Kameleoon.Utils.readLocalData('historyPages', 'COOKIE') ? parseInt(Kameleoon.Utils.readLocalData('historyPages', 'COOKIE')) : 2;
//     if(document.querySelectorAll('.navbar-progress li')[historyPages].className == 'current') {
//       Kameleoon.Utils.createLocalData('historyPages', historyPages += 1, 365, '', 'COOKIE');
//       Kameleoon.API.processConversion(141475);
//     }
//   }
// }

// document.querySelector('#BasketAddressFormContainer button .SelectedItem').innerText == 'Bezahlen'
