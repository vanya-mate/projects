"use strict";

// nouvelle twingo - without img (twingo)
// nouvelle renault clio -> redir -> ?
// variable code
var DB_OF_IMAGES = {
  'vehicules-electriques': {
    'zoe': 'https://storage.kameleoon.eu/renault/electriques/zoe.jpg',
    'twizy': 'https://storage.kameleoon.eu/renault/electriques/twizy.jpg',
    'twizy-cargo': 'https://storage.kameleoon.eu/renault/electriques/twizycargo.jpg',
    'kangoo-ze': 'https://storage.kameleoon.eu/renault/electriques/kangooZE.jpg',
    'master-ze': 'https://storage.kameleoon.eu/renault/electriques/master.jpg'
  },
  'vehicules-particuliers': {
    'twingo': 'https://storage.kameleoon.eu/renault/particuliers/twingo.jpg',
    'nouvelle-twingo': 'https://storage.kameleoon.eu/renault/particuliers/nouvelletwingo.jpg',
    'clio-berline': 'https://storage.kameleoon.eu/renault/particuliers/clio.jpg',
    'clio-estate': 'https://storage.kameleoon.eu/renault/particuliers/clioestate.jpg',
    'captur': 'https://storage.kameleoon.eu/renault/particuliers/captur.jpg',
    'captur-ip': 'https://storage.kameleoon.eu/renault/initiale/captur.jpg',
    'megane-berline': 'https://storage.kameleoon.eu/renault/particuliers/meganeberline.jpg',
    'megane-estate': 'https://storage.kameleoon.eu/renault/particuliers/meganeestate.jpg',
    'scenic': 'https://storage.kameleoon.eu/renault/particuliers/scenic.jpg',
    'grand-scenic': 'https://storage.kameleoon.eu/renault/particuliers/grandscenic.jpg',
    'nouveau-kadjar': 'https://storage.kameleoon.eu/renault/particuliers/kadjar.jpg',
    'talisman': 'https://storage.kameleoon.eu/renault/particuliers/talisman.jpg',
    'talisman-estate': 'https://storage.kameleoon.eu/renault/particuliers/talismanestate.jpg',
    'koleos': 'https://storage.kameleoon.eu/renault/particuliers/koleos.jpg',
    'espace': 'https://storage.kameleoon.eu/renault/particuliers/espace.jpg',
    'alaskan': 'https://storage.kameleoon.eu/renault/particuliers/alaskan.jpg',
    'kangoo': 'https://storage.kameleoon.eu/renault/particuliers/kangoo.jpg',
    'trafic-combi': 'https://storage.kameleoon.eu/renault/particuliers/trafic.jpg',
    'nouvelle-clio': 'https://storage.kameleoon.eu/renault/particuliers/nouvelleclio.jpg'
  },
  'vehicules-renault-sport': {
    'twingo-gt': 'https://storage.kameleoon.eu/renault/sport/twingoGT.jpg',
    'megane-rs': 'https://storage.kameleoon.eu/renault/sport/meganeRS.jpg'
  },
  'vehicules-initiale-paris': {
    'scenic-initiale-paris-0': 'https://storage.kameleoon.eu/renault/initiale/scenic.jpg',
    'grand-scenic-initiale-paris-0': 'https://storage.kameleoon.eu/renault/initiale/grandscenic.jpg',
    'talisman-initiale-paris': 'https://storage.kameleoon.eu/renault/initiale/talisman.jpg',
    'talisman-estate-initiale-paris': 'https://storage.kameleoon.eu/renault/initiale/talismanestate.jpg',
    'koleos-initiale-paris-0': 'https://storage.kameleoon.eu/renault/initiale/koleos.jpg',
    'espace-initiale-paris': 'https://storage.kameleoon.eu/renault/initiale/espace.jpg'
  },
  'vehicules-professionnels': {
    'trafic': 'https://storage.kameleoon.eu/renault/utilitaires/trafic.jpg',
    'master-fourgon': 'https://storage.kameleoon.eu/renault/utilitaires/masterfourgon.jpg',
    'master-cabine-approfondie': 'https://storage.kameleoon.eu/renault/utilitaires/mastercabineapprofondie.jpg',
    'master-transport-ouvert': 'https://storage.kameleoon.eu/renault/utilitaires/mastertransportouvert.jpg',
    'master-grand-volume': 'https://storage.kameleoon.eu/renault/utilitaires/mastergrandvolume.jpg',
    'kangoo-express': 'https://storage.kameleoon.eu/renault/utilitaires/kangoo.jpg',
    'master': 'https://storage.kameleoon.eu/renault/particuliers/master.jpg'
  }
};

var changeSelector = function changeSelector() {
  var selectElements = document.getElementsByClassName('selectKam');

  for (var i = 0; i < selectElements.length; i++) {
    if (selectElements[i].value) {
      var selElem = selectElements[i].parentNode.children[1];
      var fixMale = {
        Mr: "Monsieur",
        Mrs: "Madame"
      };
      selElem.classList.add('completeSelKam');
      selectElements[i].classList.remove('invalideFormKam');

      if (selectElements[i].value == 'Mr' || selectElements[i].value == 'Mrs') {
        selElem.innerText = fixMale[selectElements[i].value];
      } else {
        selElem.innerText = selectElements[i].value;
      }
    }
  }
};

var checkValidate = function checkValidate() {
  var values = {
    selectMarkAutoKam: false,
    searchCiviliteKam: false,
    nomInputKam: false,
    prenomInputKam: false,
    ndeTelephoneInputKam: false,
    emailInputKam: false,
    codePostalInputKam: false,
    radioEmailKam: false,
    radioSmsKam: false
  };

  var checkInputs = function checkInputs(id) {
    for (var i = 0; i < id.length; i++) {
      var spl = id[i].split(':');
      var regX = new RegExp(spl[1]);
      var spl0 = document.getElementById(spl[0]);

      if (spl0.value) {
        if (spl0.value.match(regX)) {
          values[spl[0]] = spl0.value;
          spl0.classList.add('valideInputKam');
          spl0.classList.remove('invalideFormKam');
        } else {
          spl0.classList.remove('valideInputKam');
          spl0.classList.add('invalideFormKam');
        }
      }
    }
  };

  var selectMarkAutoKam = document.getElementById('selectMarkAutoKam');

  if (selectMarkAutoKam.selectedIndex) {
    values.selectMarkAutoKam = selectMarkAutoKam[selectMarkAutoKam.selectedIndex].innerText;
  }

  var searchCiviliteKam = document.getElementById('searchCiviliteKam');

  if (searchCiviliteKam.selectedIndex) {
    searchCiviliteKam[searchCiviliteKam.selectedIndex].innerText == 'Monsieur' ? values.searchCiviliteKam = "Mr" : values.searchCiviliteKam = "Mrs";
  }

  checkInputs(['nomInputKam:^[a-zA-ZÀ-ÿ\\s\\’-]{2,255}$', 'prenomInputKam:^[a-zA-ZÀ-ÿ\\s\\’-]{2,255}$', 'ndeTelephoneInputKam:^((\\+33|0)[1-9])(([\\.\\s]?[0-9]{2}){4})$', 'emailInputKam:^([a-zA-Z0-9_\\.\\-\\+]+)@([\\da-z\\.\\-]+)\\.([a-z\\.]{2,12})$', 'codePostalInputKam:\\w']);

  if (document.getElementById('radioSmsYesKam').checked) {
    values.radioSmsKam = 1;
    document.getElementById('labelSmsYesKam').classList.remove('invalideFormKam');
    document.getElementById('labelSmsNoKam').classList.remove('invalideFormKam');
  } else if (document.getElementById('radioSmsNoKam').checked) {
    values.radioSmsKam = -1;
    document.getElementById('labelSmsYesKam').classList.remove('invalideFormKam');
    document.getElementById('labelSmsNoKam').classList.remove('invalideFormKam');
  } else {}

  if (document.getElementById('radioEmailYesKam').checked) {
    values.radioEmailKam = 1;
    document.getElementById('labelEmailYesKam').classList.remove('invalideFormKam');
    document.getElementById('labelEmailNoKam').classList.remove('invalideFormKam');
  } else if (document.getElementById('radioEmailNoKam').checked) {
    values.radioEmailKam = -1;
    document.getElementById('labelEmailYesKam').classList.remove('invalideFormKam');
    document.getElementById('labelEmailNoKam').classList.remove('invalideFormKam');
  } else {}

  return values;
};

var returnDataForm = function returnDataForm() {
  var dataForm = checkValidate();
  var returnData = true;

  for (var elem in dataForm) {
    if (!dataForm[elem]) {
      returnData = false;

      if (elem == 'radioEmailKam') {
        document.getElementById('labelEmailYesKam').classList.add('invalideFormKam');
        document.getElementById('labelEmailNoKam').classList.add('invalideFormKam');
      } else if (elem == 'radioSmsKam') {
        document.getElementById('labelSmsYesKam').classList.add('invalideFormKam');
        document.getElementById('labelSmsNoKam').classList.add('invalideFormKam');
      } else {
        document.getElementById(elem).classList.add('invalideFormKam');
      }
    }
  }

  if (returnData) {
    Kameleoon.Utils.createLocalData('validetedForm', JSON.stringify(dataForm), 365, '', 'COOKIE'); // Kameleoon.API.processConversion(141112);

    location.href = 'https://www.renault.fr/contact/reserver-un-essai-rdv/confirmation-reserver-un-essai-rdv.html';
    hidePopIn()(popInElement);
  }
}; // let sendDataForm = () => {
//   var data = JSON.stringify({
//     "leadInfo": {
//       "leadCountry": "France",                  // France
//       "leadProvider": "KAMELEOON",              // Kameleoon
//       "leadFormName": "KAMELEOON-ESSAI",        // Name of exp
//       "platformBrand": "RENAULT",               // Renault
//       "typeOfInterest": "VN",                   // Vn
//       "subTypeOfInterest": "TestDrive Request", // "TestDrive Request"
//       "origin": "Commercial links",             // cookie ren on renault.fr
//       "context": "gamme-renault-vp",            /////////// Waiting confirmation of this value
//       "device": "desktop",                      // user desktop on ren cookie or kameleoon.api
//       "campaign": "test-kameleoon",             // cookie ren campain
//       "leadSource": "INTERNET",
//       "leadSubmissionId": "KAMELEOON-0000000001", // auto-increment KAMELEOON-XXXXXXXXXX (single and start at 3)
//       "leadSubmissionTimestamp": "2018-12-17T14:21:41" // London time at clic
//     },
//     "client": {
//       "title": "Mr.", //Name
//       "firstName": "Quentin",
//       "lastName": "DELIANCOURT",
//       "companyName": "",
//       "companyRegistrationId": "",
//       "email": "quentin.deliancourt-renexter@renault.com",
//       "fixedPhone": "",
//       "mobilePhone": "0664161577",
//       "emailMarketingOptin": "Y",
//       "smsMarketingOptin": "Y",
//       "streetName": "12 allГ€e des cormorans",
//       "zipcode": "44100",
//       "city": "NANTES",
//       "clientRequestDescription": ""
//     },
//     "vehicle": {
//       "brandOfInterest": "RENAULT",
//       "modelOfInterest": "ESPACE",
//       "modelKey": "XFC1MOVPSP5"
//     },
//     "dealer": {
//       "dealerOfInterest": "25003181"
//     }
//   });
//
//   var xhr = new XMLHttpRequest();
//   xhr.withCredentials = true;
//
//   xhr.addEventListener("readystatechange", function () {
//     if (this.readyState === 4) {
//       console.log(this.responseText);
//     }
//   });
//
//   xhr.open("POST", "https://api-wired-valid-1-euw1.wrd-aws.com/commerce/v1/leads");
//   xhr.setRequestHeader("apikey", "RrZaCIJl1xINexBqadvYKAUizO00DFMy");
//   xhr.setRequestHeader("Content-Type", "application/json");
//
//   xhr.send(data);
// }
// sendDataForm();


var hidePopIn = function hidePopIn(obj) {
  if (obj === undefined) {
    return function (obj) {
      document.body.removeChild(obj.obj);
    };
  } else {
    return function () {
      document.body.removeChild(obj.obj);
    };
  }
};

var showPopIn = function showPopIn(obj) {
  document.body.insertAdjacentElement('afterBegin', obj.obj);
  document.getElementById('closedPopInKam').addEventListener('click', hidePopIn(obj));
  document.getElementById('popInElementKam').addEventListener('click', function () {
    changeSelector();
    checkValidate();
  });
  document.getElementById('buttonFormKam').addEventListener('click', returnDataForm);
};

var lastViewedCar = function lastViewedCar() {
  if (window.location.pathname.split('/')[1] != 'vehicules') return;
  var splitHref = window.location.pathname.split('/');
  var types = 'vehicules-electriques vehicules-particuliers vehicules-renault-sport vehicules-initiale-paris vehicules-professionnels';
  var models = 'zoe twingo nouvelle-twingo clio-berline clio-estate captur megane-berline megane-estate scenic grand-scenic nouveau-kadjar talisman talisman-estate koleos espace alaskan kangoo trafic-combi master twizy kangoo-ze master-ze renault-ze scenic-initiale-paris-0 grand-scenic-initiale-paris-0 talisman-initiale-paris talisman-estate-initiale-paris koleos-initiale-paris-0 espace-initiale-paris twingo-gt megane-rs kangoo-express trafic master-fourgon master-cabine-approfondie master-transport-ouvert master-grand-volume';

  if (splitHref[1] == 'kangoo.html') {
    var toJson = JSON.stringify({
      type: 'vehicules-particuliers',
      model: 'kangoo'
    });
    Kameleoon.Utils.createLocalData('lastViewedCar', toJson, 365, '', 'COOKIE');
  } else if (types.match(splitHref[2])) {
    var modelsSplit = models.split(' ');
    modelsSplit.forEach(function (elem) {
      if (elem === splitHref[3].split('.html')[0]) {
        var _toJson = JSON.stringify({
          type: splitHref[2],
          model: elem
        });

        if (elem === 'twizy' && splitHref[4]) {
          _toJson = JSON.stringify({
            type: splitHref[2],
            model: 'twizy-cargo'
          });
        }

        if (elem === 'captur' && window.location.hash == '#initiale-paris') {
          _toJson = JSON.stringify({
            type: splitHref[2],
            model: 'captur-ip'
          });
        }

        Kameleoon.Utils.createLocalData('lastViewedCar', _toJson, 365, '', 'COOKIE');
      }
    });
  } else {}
};

var changeHeaderImage = function changeHeaderImage() {
  var lastViewedCar = JSON.parse(Kameleoon.Utils.readLocalData('lastViewedCar', 'COOKIE'));
  var imageLink = DB_OF_IMAGES[lastViewedCar.type][lastViewedCar.model];
  return imageLink;
};

var fixNouvelleClio = function fixNouvelleClio() {
  var itemsCar = document.getElementsByClassName('vehicle-in-category-wrapper');

  for (var i = 0; i < itemsCar.length; i++) {
    if (itemsCar[i].parentNode.href == 'https://www.nouvelleclio.renault.fr/') {
      itemsCar[i].addEventListener('click', function () {
        var toJson = JSON.stringify({
          type: 'vehicules-particuliers',
          model: 'nouvelle-clio'
        });
        Kameleoon.Utils.createLocalData('lastViewedCar', toJson, 365, '', 'COOKIE');
      });
    }
  }
};

lastViewedCar();
fixNouvelleClio();

var createNewElement = function createNewElement() {
  var popInElement = document.createElement('div');
  popInElement.id = 'popInElementKam';
  popInElement.style.paddingTop = window.innerHeight / 2 - 475 + 'px';
  popInElement.innerHTML = "\n  <div id=\"wrapperElementContentKam\">\n      <div id=\"closedPopInKam\"></div>\n      <div id=\"popInHeaderImgKam\">\n        <img src=\"".concat(changeHeaderImage(), "\" alt=\"\">\n      </div>\n      <div id=\"popInContentKam\">\n        <div class=\"popInContentRowKam\">\n          <h3>Je souhaite r\xE9server un essai</h3>\n          <div class=\"selectDesignKam floatRightKam\">\n            <select name=\"selectMarkAutoKam\" id=\"selectMarkAutoKam\" class=\"selectKam\">\n              <option selected=\"selected\" disabled=\"disabled\" value=\"\">S\xE9lectionnez *</option>\n              <option value=\"ZOE\">ZOE</option>\n              <option value=\"TWINGO\">TWINGO</option>\n              <option value=\"CLIO\">CLIO</option>\n              <option value=\"CLIO Estate\">CLIO Estate</option>\n              <option value=\"CAPTUR\">CAPTUR</option>\n              <option value=\"MEGANE Berline\">MEGANE Berline</option>\n              <option value=\"MEGANE Estate\">MEGANE Estate</option>\n              <option value=\"SCENIC\">SCENIC</option>\n              <option value=\"Grand SCENIC\">Grand SCENIC</option>\n              <option value=\"KADJAR\">KADJAR</option>\n              <option value=\"TALISMAN\">TALISMAN</option>\n              <option value=\"TALISMAN Estate\">TALISMAN Estate</option>\n              <option value=\"Nouveau KOLEOS\">Nouveau KOLEOS</option>\n              <option value=\"ESPACE\">ESPACE</option>\n              <option value=\"ALASKAN\">ALASKAN</option>\n              <option value=\"KANGOO\">KANGOO</option>\n              <option value=\"TRAFIC Combi\">TRAFIC Combi</option>\n              <option value=\"TRAFIC SpaceClass\">TRAFIC SpaceClass</option>\n              <option value=\"Nouveau TRAFIC Escapade\">Nouveau TRAFIC Escapade</option>\n              <option value=\"TWIZY\">TWIZY</option>\n              <option value=\"TWIZY Cargo\">TWIZY Cargo</option>\n              <option value=\"Nouveau KANGOO ZE\">Nouveau KANGOO ZE</option>\n              <option value=\"MASTER ZE\">MASTER ZE</option>\n              <option value=\"CLIO Initiale Paris\">CLIO Initiale Paris</option>\n              <option value=\"CAPTUR Initiale Paris\">CAPTUR Initiale Paris</option>\n              <option value=\"SCENIC Initiale Paris\">SCENIC Initiale Paris</option>\n              <option value=\"Grand SCENIC Initiale Paris\">Grand SCENIC Initiale Paris</option>\n              <option value=\"TALISMAN Initiale Paris\">TALISMAN Initiale Paris</option>\n              <option value=\"TALISMAN Estate Initiale Paris\">TALISMAN Estate Initiale Paris</option>\n              <option value=\"KOLEOS Initiale Paris\">KOLEOS Initiale Paris</option>\n              <option value=\"ESPACE Initiale Paris\">ESPACE Initiale Paris</option>\n              <option value=\"TWINGO GT\">TWINGO GT</option>\n              <option value=\"CLIO RS\">CLIO RS</option>\n              <option value=\"MEGANE GT\">MEGANE GT</option>\n              <option value=\"MEGANE Estate GT\">MEGANE Estate GT</option>\n              <option value=\"Nouvelle MEGANE RS\">Nouvelle MEGANE RS</option>\n              <option value=\"KANGOO Express\">KANGOO Express</option>\n              <option value=\"TRAFIC\">TRAFIC</option>\n              <option value=\"MASTER Fourgon\">MASTER Fourgon</option>\n              <option value=\"MASTER Cabine Approfondie\">MASTER Cabine Approfondie</option>\n              <option value=\"MASTER Grand Volume\">MASTER Grand Volume</option>\n              <option value=\"MASTER Transport Ouvert\">MASTER Transport Ouvert</option>\n            </select>\n            <div class=\"selectElementsKam\">S\xE9lectionnez *</div>\n          </div>\n        </div>\n        <div class=\"popInContentRowKam bigMarginKam\">\n          <div class=\"selectDesignKam floatLeftKam\">\n            <select name=\"searchCiviliteKam\" id=\"searchCiviliteKam\" class=\"selectKam\">\n              <option selected=\"selected\" disabled=\"disabled\" value=\"\">Selectionnez *</option>\n              <option value=\"Mrs\">Madame</option>\n              <option value=\"Mr\">Monsieur</option>\n            </select>\n            <div class=\"selectElementsKam\">Selectionnez *</div>\n          </div>\n          <input id=\"prenomInputKam\" type=\"text\" class=\"inputFirstRowKam inputStyleKam\" placeholder=\"Pr\xE9nom *\">\n          <div class=\"fixSpace22pxKam\"></div>\n          <input id=\"nomInputKam\" type=\"text\" class=\"inputFirstRowKam inputStyleKam\" placeholder=\"Nom *\">\n        </div>\n        <div class=\"popInContentRowKam lowMarginKam\">\n          <input id=\"emailInputKam\" type=\"text\" class=\"inputTwoRowKam inputStyleKam\" placeholder=\"E-mail *\">\n          <div class=\"fixSpace22pxKam\"></div>\n          <input id=\"ndeTelephoneInputKam\" type=\"text\" class=\"inputTwoRowKam inputStyleKam\" placeholder=\"N\xB0 de t\xE9l\xE9phone\">\n        </div>\n        <div class=\"popInContentRowKam\">\n          <h4>Je choisis ma concession</h4>\n        </div>\n        <div class=\"popInContentRowKam\">\n          <input id=\"codePostalInputKam\" type=\"text\" class=\"inputThreeRowKam inputStyleKam\" placeholder=\"Code postal ou Ville *\">\n        </div>\n        <div class=\"popInContentRowKam\">\n          <p>Je consens \xE0 l\u2019utilisation de mes donn\xE9es personnelles pour recevoir des offres personnalis\xE9es de la part de Renault SAS et des\n  membres de son r\xE9seau commercial.</p>\n        </div>\n        <div class=\"popInContentRowKam\">\n          <div class=\"labelRadioKam\">Par e-mail :</div>\n          <div class='radioElementsKam'>\n            <input type=\"radio\" name=\"radioEmailKam\" id=\"radioEmailYesKam\">\n            <input type=\"radio\" name=\"radioEmailKam\" id=\"radioEmailNoKam\">\n            <div class=\"fixHoverEffectKam w60Kam\">\n              <label for=\"radioEmailYesKam\">Oui</label>\n              <label id=\"labelEmailYesKam\" class=\"radioButtonKam radioYesKam\" for=\"radioEmailYesKam\"></label>\n            </div>\n            <div class=\"fixHoverEffectKam\">\n              <label for=\"radioEmailNoKam\">Non</label>\n              <label id=\"labelEmailNoKam\" class=\"radioButtonKam radioNoKam\" for=\"radioEmailNoKam\"></label>\n            </div>\n          </div>\n        </div>\n        <div class=\"popInContentRowKam veryLowMarginKam\">\n          <div class=\"labelRadioKam\">Par sms :</div>\n          <div class='radioElementsKam'>\n            <input type=\"radio\" name=\"radioSmsKam\" id=\"radioSmsYesKam\">\n            <input type=\"radio\" name=\"radioSmsKam\" id=\"radioSmsNoKam\">\n            <div class=\"fixHoverEffectKam w60Kam\">\n              <label for=\"radioSmsYesKam\">Oui</label>\n              <label id=\"labelSmsYesKam\" class=\"radioButtonKam radioYesKam\" for=\"radioSmsYesKam\"></label>\n            </div>\n            <div class=\"fixHoverEffectKam\">\n              <label for=\"radioSmsNoKam\">Non</label>\n              <label id=\"labelSmsNoKam\" class=\"radioButtonKam radioNoKam\" for=\"radioSmsNoKam\"></label>\n            </div>\n          </div>\n        </div>\n        <div class=\"popInContentRowKam\">\n          <a href=\"#\">Mentions l\xE9gales</a>\n        </div>\n        <div class=\"popInContentRowKam overflowOffKam\">\n          <div id=\"noteContentKam\">* Champs obligatoires</div>\n          <button id=\"buttonFormKam\">Terminer ma demande</button>\n        </div>\n      </div>\n    </div>\n  ");
  return popInElement;
};

var popInElement = {
  obj: createNewElement()
};
var contact = window.location.href.search('/contact') + 1;

if (!contact) {
  showPopIn(popInElement);
} // Click_POP-IN Kameleoon.API.processConversion(141112)
// Click_ReverseCar Kameleoon.API.processConversion(141113)