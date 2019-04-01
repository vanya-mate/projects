// nouvelle twingo - without img (twingo)
// nouvelle renault clio -> redir -> ?

const DB_OF_IMAGES = {
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
}
let changeSelector = () => {
  var selectElements = document.getElementsByClassName('selectKam');
  for(var i = 0; i < selectElements.length; i++) {
    if(!selectElements[i].selectedOptions[0].disabled && !selectElements[i].parentNode.children[1].className.match('completeSelKam')) {
      selectElements[i].parentNode.children[1].className += ' completeSelKam';
      selectElements[i].parentNode.children[1].innerText = selectElements[i].selectedOptions[0].innerText;
    } else {
      selectElements[i].parentNode.children[1].innerText = selectElements[i].selectedOptions[0].innerText;
    }
  }
}
let hidePopIn = (obj) => {
  return () => {
    document.body.removeChild(obj.obj);
  }
}
let showPopIn = (obj) => {
  document.body.insertAdjacentElement('afterBegin', obj.obj);
  document.getElementById('closedPopInKam').addEventListener('click', hidePopIn(obj));
  document.getElementById('popInElementKam').addEventListener('click', changeSelector);
}
let lastViewedCar = () => {
  if(window.location.pathname == '') return;
  let splitHref = window.location.pathname.split('/');
  let types = 'vehicules-electriques vehicules-particuliers vehicules-renault-sport vehicules-initiale-paris vehicules-professionnels';
  let models = 'zoe twingo nouvelle-twingo clio-berline clio-estate captur megane-berline megane-estate scenic grand-scenic nouveau-kadjar talisman talisman-estate koleos espace alaskan kangoo trafic-combi master twizy kangoo-ze master-ze renault-ze scenic-initiale-paris-0 grand-scenic-initiale-paris-0 talisman-initiale-paris talisman-estate-initiale-paris koleos-initiale-paris-0 espace-initiale-paris twingo-gt megane-rs kangoo-express trafic master-fourgon master-cabine-approfondie master-transport-ouvert master-grand-volume';

  if(splitHref[1] == 'kangoo.html') {

    let toJson = JSON.stringify({type: 'vehicules-particuliers', model: 'kangoo'});
    Kameleoon.Utils.createLocalData('lastViewedCar', toJson, 365, '', 'COOKIE');

  } else if(types.match(splitHref[2])) {

    let modelsSplit = models.split(' ');
    modelsSplit.forEach((elem) => {
      if(elem === splitHref[3].split('.html')[0]) {
        console.log(`type: ${splitHref[2]}, model: ${elem}`);
        let toJson = JSON.stringify({type: splitHref[2], model: elem});
        if(elem === 'twizy' && splitHref[4]) {
          toJson = JSON.stringify({type: splitHref[2], model: 'twizy-cargo'});
        }
        if(elem === 'captur' && window.location.hash == '#initiale-paris') {
          toJson = JSON.stringify({type: splitHref[2], model: 'captur-ip'});
        }
        Kameleoon.Utils.createLocalData('lastViewedCar', toJson, 365, '', 'COOKIE');
      }
    });

  } else {}
}
let changeHeaderImage = () => {
  let lastViewedCar = JSON.parse(Kameleoon.Utils.readLocalData('lastViewedCar', 'COOKIE'));
  let type = lastViewedCar.type;
  let model = lastViewedCar.model;
  let imageLink = DB_OF_IMAGES[type][model];
  return imageLink;
}
lastViewedCar();

let createNewElement = () => {
  const popInElement = document.createElement('div');
  popInElement.id = 'popInElementKam';
  popInElement.style.paddingTop = window.innerHeight/2 - 475 + 'px';
  popInElement.innerHTML = `
  <div id="wrapperElementContentKam">
      <div id="closedPopInKam"></div>
      <div id="popInHeaderImgKam">
        <img src="${changeHeaderImage()}" alt="">
      </div>
      <div id="popInContentKam">
        <div class="popInContentRowKam">
          <h3>Je souhaite réserver un essai</h3>
          <div class="selectDesignKam floatRightKam">
            <select name="selectMarkAutoKam" id="selectMarkAutoKam" class="selectKam">
              <option value="" selected="selected" disabled="disabled">MEGANE Estate</option>
              <option value="">MEGANE Estate 2</option>
              <option value="">MEGANE Estate 3</option>
            </select>
            <div class="selectElementsKam">MEGANE Estate</div>
          </div>
        </div>
        <div class="popInContentRowKam bigMarginKam">
          <div class="selectDesignKam floatLeftKam">
            <select name="searchCiviliteKam" id="searchCiviliteKam" class="selectKam">
              <option value="" selected="selected" disabled="disabled">Civilité *</option>
              <option value="">Civilité * 2</option>
              <option value="">Civilité * 3</option>
            </select>
            <div class="selectElementsKam">Civilité *</div>
          </div>
          <input id="prenomInputKam" type="text" class="inputFirstRowKam inputStyleKam" placeholder="Prénom *">
          <div class="fixSpace22pxKam"></div>
          <input id="nomInputKam" type="text" class="inputFirstRowKam inputStyleKam" placeholder="Nom *">
        </div>
        <div class="popInContentRowKam lowMarginKam">
          <input id="emailInputKam" type="text" class="inputTwoRowKam inputStyleKam" placeholder="E-mail *">
          <div class="fixSpace22pxKam"></div>
          <input id="ndeTelephoneInputKam" type="text" class="inputTwoRowKam inputStyleKam" placeholder="N° de téléphone">
        </div>
        <div class="popInContentRowKam">
          <h4>Je choisis ma concession</h4>
        </div>
        <div class="popInContentRowKam">
          <input type="text" class="inputThreeRowKam inputStyleKam" placeholder="Code postal ou Ville *">
        </div>
        <div class="popInContentRowKam">
          <p>Je consens à l’utilisation de mes données personnelles pour recevoir des offres personnalisées de la part de Renault SAS et des
  membres de son réseau commercial.</p>
        </div>
        <div class="popInContentRowKam">
          <div class="labelRadioKam">Par e-mail :</div>
          <div class='radioElementsKam'>
            <input type="radio" name="radioEmailKam" id="radioEmailYesKam">
            <input type="radio" name="radioEmailKam" id="radioEmailNoKam">
            <label id="labelEmailYesKam" class="radioButtonKam radioYesKam" for="radioEmailYesKam"></label>
            <label for="radioEmailYesKam">Oui</label>
            <label id="labelEmailNoKam" class="radioButtonKam radioNoKam" for="radioEmailNoKam"></label>
            <label for="radioEmailNoKam">Non</label>
          </div>
        </div>
        <div class="popInContentRowKam veryLowMarginKam">
          <div class="labelRadioKam">Par sms :</div>
          <div class='radioElementsKam'>
            <input type="radio" name="radioSmsKam" id="radioSmsYesKam">
            <input type="radio" name="radioSmsKam" id="radioSmsNoKam">
            <label id="labelSmsYesKam" class="radioButtonKam radioYesKam" for="radioSmsYesKam"></label>
            <label for="radioSmsYesKam">Oui</label>
            <label id="labelSmsNoKam" class="radioButtonKam radioNoKam" for="radioSmsNoKam"></label>
            <label for="radioSmsNoKam">Non</label>
          </div>
        </div>
        <div class="popInContentRowKam">
          <a href="#">Mentions légales</a>
        </div>
        <div class="popInContentRowKam overflowOffKam">
          <div id="noteContentKam">* Champs obligatoires</div>
          <button>Terminer ma demande</button>
        </div>
      </div>
    </div>
  `;
  return popInElement;
}
let popInElement = {obj: createNewElement()};
if(true) {
  showPopIn(popInElement);
}
