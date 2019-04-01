"use strict";

// nouvelle twingo - without img (twingo)
// nouvelle renault clio -> redir -> ?
var DB_OF_IMAGES = {
  'vehicules-electriques': {
    'zoe': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/electriques/zoe.jpg',
    'twizy': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/electriques/twizy.jpg',
    'twizy-cargo': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/electriques/twizycargo.jpg',
    'kangoo-ze': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/electriques/kangooZE.jpg',
    'master-ze': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/electriques/master.jpg'
  },
  'vehicules-particuliers': {
    'twingo': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/particuliers/twingo.jpg',
    'nouvelle-twingo': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/particuliers/twingo.jpg',
    'clio-berline': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/particuliers/clio.jpg',
    'clio-estate': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/particuliers/clioestate.jpg',
    'captur': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/particuliers/captur.jpg',
    'captur-ip': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/initiale/captur.jpg',
    'megane-berline': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/particuliers/meganeberline.jpg',
    'megane-estate': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/particuliers/meganeestate.jpg',
    'scenic': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/particuliers/scenic.jpg',
    'grand-scenic': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/particuliers/grandscenic.jpg',
    'nouveau-kadjar': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/particuliers/kadjar.jpg',
    'talisman': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/particuliers/talisman.jpg',
    'talisman-estate': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/particuliers/talismanestate.jpg',
    'koleos': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/particuliers/koleos.jpg',
    'espace': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/particuliers/espace.jpg',
    'alaskan': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/particuliers/alaskan.jpg',
    'kangoo': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/particuliers/kangoo.jpg',
    'trafic-combi': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/particuliers/trafic.jpg',
    'master': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/particuliers/master.jpg'
  },
  'vehicules-renault-sport': {
    'twingo-gt': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/sport/twingoGT.jpg',
    'megane-rs': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/sport/meganeRS.jpg'
  },
  'vehicules-initiale-paris': {
    'scenic-initiale-paris-0': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/initiale/scenic.jpg',
    'grand-scenic-initiale-paris-0': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/initiale/grandscenic.jpg',
    'talisman-initiale-paris': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/initiale/talisman.jpg',
    'talisman-estate-initiale-paris': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/initiale/talismanestate.jpg',
    'koleos-initiale-paris-0': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/initiale/koleos.jpg',
    'espace-initiale-paris': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/initiale/espace.jpg'
  },
  'vehicules-professionnels': {
    'trafic': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/utilitaires/trafic.jpg',
    'master-fourgon': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/utilitaires/masterfourgon.jpg',
    'master-cabine-approfondie': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/utilitaires/mastercabineapprofondie.jpg',
    'master-transport-ouvert': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/utilitaires/mastertransportouvert.jpg',
    'master-grand-volume': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/utilitaires/mastergrandvolume.jpg',
    'kangoo-express': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/utilitaires/kangoo.jpg'
  }
};

var hidePopIn = function hidePopIn(obj) {
  return function () {
    document.body.removeChild(obj.obj);
  };
};

var showPopIn = function showPopIn(obj) {
  document.body.insertAdjacentElement('afterBegin', obj.obj);
  document.getElementById('closedPopInKam').addEventListener('click', hidePopIn(obj));
};

var lastViewedCar = function lastViewedCar() {
  if (window.location.pathname == '') return;
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
        console.log("type: ".concat(splitHref[2], ", model: ").concat(elem));

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
  var type = lastViewedCar.type;
  var model = lastViewedCar.model;
  var imageLink = DB_OF_IMAGES[type][model];
  return imageLink;
};

lastViewedCar();

var createNewElement = function createNewElement() {
  var popInElement = document.createElement('div');
  popInElement.id = 'popInElementKam';
  popInElement.style.paddingTop = window.innerHeight / 2 - 475 + 'px';
  popInElement.innerHTML = "\n  <div id=\"wrapperElementContentKam\">\n      <div id=\"closedPopInKam\"></div>\n      <div id=\"popInHeaderImgKam\">\n        <img src=\"".concat(changeHeaderImage(), "\" alt=\"\">\n      </div>\n      <div id=\"popInContentKam\">\n        <div class=\"popInContentRowKam\">\n          <h3>Je souhaite r\xE9server un essai</h3>\n          <div class=\"selectDesignKam floatRightKam\">\n            <select name=\"selectMarkAutoKam\" id=\"selectMarkAutoKam\" class=\"selectKam\">\n              <option value=\"\">MEGANE Estate</option>\n              <option value=\"\">MEGANE Estate 2</option>\n              <option value=\"\">MEGANE Estate 3</option>\n            </select>\n            <div class=\"selectElementsKam\"></div>\n          </div>\n        </div>\n        <div class=\"popInContentRowKam bigMarginKam\">\n          <div class=\"selectDesignKam floatLeftKam\">\n            <select name=\"searchCiviliteKam\" id=\"searchCiviliteKam\" class=\"selectKam\">\n              <option value=\"\">Civilit\xE9 *</option>\n              <option value=\"\">Civilit\xE9 * 2</option>\n              <option value=\"\">Civilit\xE9 * 3</option>\n            </select>\n            <div class=\"selectElementsKam\"></div>\n          </div>\n          <input id=\"prenomInputKam\" type=\"text\" class=\"inputFirstRowKam inputStyleKam\" placeholder=\"Pr\xE9nom *\">\n          <div class=\"fixSpace22pxKam\"></div>\n          <input id=\"nomInputKam\" type=\"text\" class=\"inputFirstRowKam inputStyleKam\" placeholder=\"Nom *\">\n        </div>\n        <div class=\"popInContentRowKam lowMarginKam\">\n          <input id=\"emailInputKam\" type=\"text\" class=\"inputTwoRowKam inputStyleKam\" placeholder=\"E-mail *\">\n          <div class=\"fixSpace22pxKam\"></div>\n          <input id=\"ndeTelephoneInputKam\" type=\"text\" class=\"inputTwoRowKam inputStyleKam\" placeholder=\"N\xB0 de t\xE9l\xE9phone\">\n        </div>\n        <div class=\"popInContentRowKam\">\n          <h4>Je choisis ma concession</h4>\n        </div>\n        <div class=\"popInContentRowKam\">\n          <input type=\"text\" class=\"inputThreeRowKam inputStyleKam\" placeholder=\"Code postal ou Ville *\">\n        </div>\n        <div class=\"popInContentRowKam\">\n          <p>Je consens \xE0 l\u2019utilisation de mes donn\xE9es personnelles pour recevoir des offres personnalis\xE9es de la part de Renault SAS et des\n  membres de son r\xE9seau commercial.</p>\n        </div>\n        <div class=\"popInContentRowKam\">\n          <div class=\"labelRadioKam\">Par e-mail :</div>\n          <div class='radioElementsKam'>\n            <input type=\"radio\" name=\"radioEmailKam\" id=\"radioEmailYesKam\">\n            <input type=\"radio\" name=\"radioEmailKam\" id=\"radioEmailNoKam\">\n            <label id=\"labelEmailYesKam\" class=\"radioButtonKam radioYesKam\" for=\"radioEmailYesKam\"></label>\n            <label for=\"radioEmailYesKam\">Oui</label>\n            <label id=\"labelEmailNoKam\" class=\"radioButtonKam radioNoKam\" for=\"radioEmailNoKam\"></label>\n            <label for=\"radioEmailNoKam\">Non</label>\n          </div>\n        </div>\n        <div class=\"popInContentRowKam veryLowMarginKam\">\n          <div class=\"labelRadioKam\">Par sms :</div>\n          <div class='radioElementsKam'>\n            <input type=\"radio\" name=\"radioSmsKam\" id=\"radioSmsYesKam\">\n            <input type=\"radio\" name=\"radioSmsKam\" id=\"radioSmsNoKam\">\n            <label id=\"labelSmsYesKam\" class=\"radioButtonKam radioYesKam\" for=\"radioSmsYesKam\"></label>\n            <label for=\"radioSmsYesKam\">Oui</label>\n            <label id=\"labelSmsNoKam\" class=\"radioButtonKam radioNoKam\" for=\"radioSmsNoKam\"></label>\n            <label for=\"radioSmsNoKam\">Non</label>\n          </div>\n        </div>\n        <div class=\"popInContentRowKam\">\n          <a href=\"#\">Mentions l\xE9gales</a>\n        </div>\n        <div class=\"popInContentRowKam overflowOffKam\">\n          <div id=\"noteContentKam\">* Champs obligatoires</div>\n          <button>Terminer ma demande</button>\n        </div>\n      </div>\n    </div>\n  ");
  return popInElement;
};

var popInElement = {
  obj: createNewElement()
};
var popInElementCopy = {
  obj: createNewElement()
};

if (true) {
  showPopIn(popInElement);
}
