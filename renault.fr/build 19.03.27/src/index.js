
// nouvelle twingo - without img (twingo)
// nouvelle renault clio -> redir -> ?

// variable code
const DB_OF_IMAGES = {
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
}
let changeSelector = () => {
  let selectElements = document.getElementsByClassName('selectKam');
  for(var i = 0; i < selectElements.length; i++) {
    if(selectElements[i].value) {
      let selElem = selectElements[i].parentNode.children[1];
      let fixMale = {Mr: "Monsieur", Mrs: "Madame"};
      selElem.classList.add('completeSelKam');
      selectElements[i].classList.remove('invalideFormKam');
      if(selectElements[i].value == 'Mr' || selectElements[i].value == 'Mrs') {
        selElem.innerText = fixMale[selectElements[i].value];
      } else {
        selElem.innerText = selectElements[i].value;
      }
    }
  }
}
let checkValidate = () => {
  let values = {
    selectMarkAutoKam: false,
    searchCiviliteKam: false,
    nomInputKam: false,
    prenomInputKam: false,
    ndeTelephoneInputKam: false,
    emailInputKam: false,
    codePostalInputKam: false,
    radioEmailKam: false,
    radioSmsKam: false
  }
  let checkInputs = (id) => {
    for(let i = 0; i < id.length; i++) {
      let spl = id[i].split(':');
      let regX = new RegExp(spl[1]);
      let spl0 = document.getElementById(spl[0]);
      if(spl0.value) {
        if(spl0.value.match(regX)) {
          values[spl[0]] = spl0.value;
          spl0.classList.add('valideInputKam');
          spl0.classList.remove('invalideFormKam');
        } else {
          spl0.classList.remove('valideInputKam');
          spl0.classList.add('invalideFormKam');
        }
      }
    }
  }
  let selectMarkAutoKam = document.getElementById('selectMarkAutoKam');
  if(selectMarkAutoKam.selectedIndex) {
    values.selectMarkAutoKam = selectMarkAutoKam[selectMarkAutoKam.selectedIndex].innerText;
  }
  let searchCiviliteKam = document.getElementById('searchCiviliteKam');
  if(searchCiviliteKam.selectedIndex) {
    searchCiviliteKam[searchCiviliteKam.selectedIndex].innerText == 'Monsieur' ? values.searchCiviliteKam = "Mr" : values.searchCiviliteKam = "Mrs";
  }
  checkInputs([
    'nomInputKam:^[a-zA-ZÀ-ÿ\\s\\’-]{2,255}$',
    'prenomInputKam:^[a-zA-ZÀ-ÿ\\s\\’-]{2,255}$',
    'ndeTelephoneInputKam:^((\\+33|0)[1-9])(([\\.\\s]?[0-9]{2}){4})$',
    'emailInputKam:^([a-zA-Z0-9_\\.\\-\\+]+)@([\\da-z\\.\\-]+)\\.([a-z\\.]{2,12})$',
    'codePostalInputKam:\\w'
  ]);

  if(document.getElementById('radioSmsYesKam').checked) {
    values.radioSmsKam = 1;
    document.getElementById('labelSmsYesKam').classList.remove('invalideFormKam');
    document.getElementById('labelSmsNoKam').classList.remove('invalideFormKam');
  } else if(document.getElementById('radioSmsNoKam').checked) {
    values.radioSmsKam = -1;
    document.getElementById('labelSmsYesKam').classList.remove('invalideFormKam');
    document.getElementById('labelSmsNoKam').classList.remove('invalideFormKam');
  } else {}
  if(document.getElementById('radioEmailYesKam').checked) {
    values.radioEmailKam = 1;
    document.getElementById('labelEmailYesKam').classList.remove('invalideFormKam');
    document.getElementById('labelEmailNoKam').classList.remove('invalideFormKam');
  } else if(document.getElementById('radioEmailNoKam').checked) {
    values.radioEmailKam = -1;
    document.getElementById('labelEmailYesKam').classList.remove('invalideFormKam');
    document.getElementById('labelEmailNoKam').classList.remove('invalideFormKam');
  } else {}
  return values;
}
let returnDataForm = () => {
  let dataForm = checkValidate();
  let returnData = true;
  for(let elem in dataForm) {
    if(!dataForm[elem]) {
      returnData = false;
      if(elem == 'radioEmailKam') {
        document.getElementById('labelEmailYesKam').classList.add('invalideFormKam');
        document.getElementById('labelEmailNoKam').classList.add('invalideFormKam');
      } else if(elem == 'radioSmsKam') {
        document.getElementById('labelSmsYesKam').classList.add('invalideFormKam');
        document.getElementById('labelSmsNoKam').classList.add('invalideFormKam');
      } else {
        document.getElementById(elem).classList.add('invalideFormKam');
      }
    }
  }
  if(returnData) {
    Kameleoon.Utils.createLocalData('validetedForm', JSON.stringify(dataForm), 365, '', 'COOKIE');
    // Kameleoon.API.processConversion(141112);
    location.href = 'https://www.renault.fr/contact/reserver-un-essai-rdv/confirmation-reserver-un-essai-rdv.html';
    hidePopIn()(popInElement);
  }
}
let hidePopIn = (obj) => {
  if(obj === undefined) {
    return (obj) => {
      document.body.removeChild(obj.obj);
    }
  } else {
    return () => {
      document.body.removeChild(obj.obj);
    }
  }
}
let showPopIn = (obj) => {
  document.body.insertAdjacentElement('afterBegin', obj.obj);
  document.getElementById('closedPopInKam').addEventListener('click', hidePopIn(obj));
  document.getElementById('popInElementKam').addEventListener('click', () => {
    changeSelector();
    checkValidate();
  });
  document.getElementById('buttonFormKam').addEventListener('click', returnDataForm);
}
let lastViewedCar = () => {
  if(window.location.pathname.split('/')[1] != 'vehicules') return;
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
  let imageLink = DB_OF_IMAGES[lastViewedCar.type][lastViewedCar.model];
  return imageLink;
}
let fixNouvelleClio = () => {
  let itemsCar = document.getElementsByClassName('vehicle-in-category-wrapper');
  for(let i = 0; i < itemsCar.length; i++) {
    if(itemsCar[i].parentNode.href == 'https://www.nouvelleclio.renault.fr/') {
      itemsCar[i].addEventListener('click', () => {
        let toJson = JSON.stringify({type: 'vehicules-particuliers', model: 'nouvelle-clio'});
        Kameleoon.Utils.createLocalData('lastViewedCar', toJson, 365, '', 'COOKIE');
      });
    }
  }
}
lastViewedCar();
fixNouvelleClio();

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
              <option selected="selected" disabled="disabled" value="">Sélectionnez *</option>
              <option value="ZOE">ZOE</option>
              <option value="TWINGO">TWINGO</option>
              <option value="CLIO">CLIO</option>
              <option value="CLIO Estate">CLIO Estate</option>
              <option value="CAPTUR">CAPTUR</option>
              <option value="MEGANE Berline">MEGANE Berline</option>
              <option value="MEGANE Estate">MEGANE Estate</option>
              <option value="SCENIC">SCENIC</option>
              <option value="Grand SCENIC">Grand SCENIC</option>
              <option value="KADJAR">KADJAR</option>
              <option value="TALISMAN">TALISMAN</option>
              <option value="TALISMAN Estate">TALISMAN Estate</option>
              <option value="Nouveau KOLEOS">Nouveau KOLEOS</option>
              <option value="ESPACE">ESPACE</option>
              <option value="ALASKAN">ALASKAN</option>
              <option value="KANGOO">KANGOO</option>
              <option value="TRAFIC Combi">TRAFIC Combi</option>
              <option value="TRAFIC SpaceClass">TRAFIC SpaceClass</option>
              <option value="Nouveau TRAFIC Escapade">Nouveau TRAFIC Escapade</option>
              <option value="TWIZY">TWIZY</option>
              <option value="TWIZY Cargo">TWIZY Cargo</option>
              <option value="Nouveau KANGOO ZE">Nouveau KANGOO ZE</option>
              <option value="MASTER ZE">MASTER ZE</option>
              <option value="CLIO Initiale Paris">CLIO Initiale Paris</option>
              <option value="CAPTUR Initiale Paris">CAPTUR Initiale Paris</option>
              <option value="SCENIC Initiale Paris">SCENIC Initiale Paris</option>
              <option value="Grand SCENIC Initiale Paris">Grand SCENIC Initiale Paris</option>
              <option value="TALISMAN Initiale Paris">TALISMAN Initiale Paris</option>
              <option value="TALISMAN Estate Initiale Paris">TALISMAN Estate Initiale Paris</option>
              <option value="KOLEOS Initiale Paris">KOLEOS Initiale Paris</option>
              <option value="ESPACE Initiale Paris">ESPACE Initiale Paris</option>
              <option value="TWINGO GT">TWINGO GT</option>
              <option value="CLIO RS">CLIO RS</option>
              <option value="MEGANE GT">MEGANE GT</option>
              <option value="MEGANE Estate GT">MEGANE Estate GT</option>
              <option value="Nouvelle MEGANE RS">Nouvelle MEGANE RS</option>
              <option value="KANGOO Express">KANGOO Express</option>
              <option value="TRAFIC">TRAFIC</option>
              <option value="MASTER Fourgon">MASTER Fourgon</option>
              <option value="MASTER Cabine Approfondie">MASTER Cabine Approfondie</option>
              <option value="MASTER Grand Volume">MASTER Grand Volume</option>
              <option value="MASTER Transport Ouvert">MASTER Transport Ouvert</option>
            </select>
            <div class="selectElementsKam">Sélectionnez *</div>
          </div>
        </div>
        <div class="popInContentRowKam bigMarginKam">
          <div class="selectDesignKam floatLeftKam">
            <select name="searchCiviliteKam" id="searchCiviliteKam" class="selectKam">
              <option selected="selected" disabled="disabled" value="">Selectionnez *</option>
              <option value="Mrs">Madame</option>
              <option value="Mr">Monsieur</option>
            </select>
            <div class="selectElementsKam">Selectionnez *</div>
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
          <input id="codePostalInputKam" type="text" class="inputThreeRowKam inputStyleKam" placeholder="Code postal ou Ville *">
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
            <div class="fixHoverEffectKam w60Kam">
              <label for="radioEmailYesKam">Oui</label>
              <label id="labelEmailYesKam" class="radioButtonKam radioYesKam" for="radioEmailYesKam"></label>
            </div>
            <div class="fixHoverEffectKam">
              <label for="radioEmailNoKam">Non</label>
              <label id="labelEmailNoKam" class="radioButtonKam radioNoKam" for="radioEmailNoKam"></label>
            </div>
          </div>
        </div>
        <div class="popInContentRowKam veryLowMarginKam">
          <div class="labelRadioKam">Par sms :</div>
          <div class='radioElementsKam'>
            <input type="radio" name="radioSmsKam" id="radioSmsYesKam">
            <input type="radio" name="radioSmsKam" id="radioSmsNoKam">
            <div class="fixHoverEffectKam w60Kam">
              <label for="radioSmsYesKam">Oui</label>
              <label id="labelSmsYesKam" class="radioButtonKam radioYesKam" for="radioSmsYesKam"></label>
            </div>
            <div class="fixHoverEffectKam">
              <label for="radioSmsNoKam">Non</label>
              <label id="labelSmsNoKam" class="radioButtonKam radioNoKam" for="radioSmsNoKam"></label>
            </div>
          </div>
        </div>
        <div class="popInContentRowKam">
          <a href="#">Mentions légales</a>
        </div>
        <div class="popInContentRowKam overflowOffKam">
          <div id="noteContentKam">* Champs obligatoires</div>
          <button id="buttonFormKam">Terminer ma demande</button>
        </div>
      </div>
    </div>
  `;
  return popInElement;
}
let popInElement = {obj: createNewElement()};

let contact = window.location.href.search('/contact') + 1;
if(!contact) {
  showPopIn(popInElement);
}

// Click_POP-IN Kameleoon.API.processConversion(141112)
// Click_ReverseCar Kameleoon.API.processConversion(141113)
