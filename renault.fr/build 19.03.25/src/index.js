
// nouvelle twingo - without img (twingo)
// nouvelle renault clio -> redir -> ?

// variable code
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
    'nouvelle-twingo': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/particuliers/twingo.jpg', // missing image / need change image
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
    'nouvelle-clio': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/particuliers/clio.jpg' // missing image / need change image
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
    'kangoo-express': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/utilitaires/kangoo.jpg',
    'master': 'https://first-online-chat.000webhostapp.com/kameleoonImages/visuels-kameleoon/particuliers/master.jpg'
  }
}
let changeSelector = () => {
  let selectElements = document.getElementsByClassName('selectKam');
  for(var i = 0; i < selectElements.length; i++) {
    if(!selectElements[i].selectedOptions[0].disabled) {
      let selElem = selectElements[i].parentNode.children[1];
      selElem.classList.add('completeSelKam');
      selElem.innerText = selectElements[i].selectedOptions[0].innerText;
      selectElements[i].classList.remove('invalideFormKam');
    } else {
      selectElements[i].parentNode.children[1].innerText = selectElements[i].selectedOptions[0].innerText;
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
    for(var i = 0; i < id.length; i++) {
      let spl = id[i].split(':');
      let regX = new RegExp(spl[1]);
      if(document.getElementById(spl[0]).value) {
        if(document.getElementById(spl[0]).value.match(regX)) {
          values[spl[0]] = document.getElementById(spl[0]).value;
          document.getElementById(spl[0]).classList.add('valideInputKam');
          document.getElementById(spl[0]).classList.remove('invalideFormKam');
        } else {
          document.getElementById(spl[0]).classList.remove('valideInputKam');
          document.getElementById(spl[0]).classList.add('invalideFormKam');
        }
      }
    }
  }
  if(document.getElementById('selectMarkAutoKam').selectedIndex) {
    values.selectMarkAutoKam = document.getElementById('selectMarkAutoKam')[document.getElementById('selectMarkAutoKam').selectedIndex].innerText;
  }
  if(document.getElementById('searchCiviliteKam').selectedIndex) {
    let civiliteKam = document.getElementById('searchCiviliteKam');
    civiliteKam[civiliteKam.selectedIndex].innerText == 'Monsieur' ? values.searchCiviliteKam = "Mr" : values.searchCiviliteKam = "Mrs";
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
    Kameleoon.API.processConversion(141112);
    location.href = 'https://www.renault.fr/contact/reserver-un-essai-rdv/confirmation-reserver-un-essai-rdv.html';
    hidePopIn()(popInElement);
  }
} // GOAL: Kameleoon.API.processConversion(141112)
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
  document.getElementById('popInElementKam').addEventListener('click', changeSelector);
  document.getElementById('popInElementKam').addEventListener('click', checkValidate);
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
if(!contact) { // true -> conditions of occurrence POP-IN
  fixNouvelleClio();
  showPopIn(popInElement);
}

// spec code
// Click_POP-IN Kameleoon.API.processConversion(141112)
// Click_ReverseCar Kameleoon.API.processConversion(141113)
Kameleoon.API.runWhenElementPresent('.submit-form .submit-form-button', () => {
  document.querySelector('.submit-form .submit-form-button').addEventListener('click', () => {
    Kameleoon.Utils.createLocalData('buttonValideTrue', 1, 365, '', 'COOKIE');
  });
});


// global code
let insertUserData = () => {
  let userData = JSON.parse(Kameleoon.Utils.readLocalData('validetedForm', 'COOKIE'));

  let modeleArea = document.getElementById('dropdown_ab6d');
  modeleArea.setAttribute('aria-invalid', 'false');
  modeleArea.parentNode.children[1].innerText = userData.selectMarkAutoKam;
  modeleArea.parentNode.parentNode.classList.add('complete');
  modeleArea.value = userData.selectMarkAutoKam;

  let civiliteArea = document.getElementById('dropdown_0');
  civiliteArea.setAttribute('aria-invalid', 'false');
  civiliteArea.parentNode.parentNode.classList.add('complete');
  civiliteArea.value = userData.searchCiviliteKam;
  if(userData.searchCiviliteKam == 'Mrs') {
    civiliteArea.parentNode.children[1].innerText = 'Madame';
  } else if(userData.searchCiviliteKam == 'Mr') {
    civiliteArea.parentNode.children[1].innerText = 'Monsieur';
  } else {}

  let nomArea = document.getElementById('textfield');
  nomArea.setAttribute('aria-invalid', 'false');
  nomArea.value = userData.nomInputKam;
  nomArea.parentNode.parentNode.classList.add('complete');

  let prenomArea = document.getElementById('textfield_0');
  prenomArea.setAttribute('aria-invalid', 'false');
  prenomArea.value = userData.prenomInputKam;
  prenomArea.parentNode.parentNode.classList.add('complete');

  let emailArea = document.getElementById('textfield_2');
  emailArea.setAttribute('aria-invalid', 'false');
  emailArea.value = userData.emailInputKam;
  emailArea.parentNode.parentNode.classList.add('complete');

  let telephoneArea = document.getElementById('textfield_a17');
  telephoneArea.setAttribute('aria-invalid', 'false');
  telephoneArea.value = userData.ndeTelephoneInputKam;
  telephoneArea.parentNode.parentNode.classList.add('complete');

  let parEmailArea = document.getElementById('dropdown_63b');
  parEmailArea.setAttribute('aria-invalid', 'false');
  userData.radioEmailKam == 1 ? parEmailArea.parentNode.children[1].innerText = "Oui" : parEmailArea.parentNode.children[1].innerText = "Non";
  userData.radioEmailKam == 1 ? parEmailArea.value = 'Y' : parEmailArea.value = "N";
  parEmailArea.parentNode.parentNode.classList.add('complete');

  let parSmsArea = document.getElementById('dropdown_90bf');
  parSmsArea.setAttribute('aria-invalid', 'false');
  userData.radioEmailKam == 1 ? parSmsArea.parentNode.children[1].innerText = "Oui" : parSmsArea.parentNode.children[1].innerText = "Non";
  userData.radioSmsKam == 1 ? parSmsArea.value = "Y" : parSmsArea.value = "N";
  parSmsArea.parentNode.parentNode.classList.add('complete');

  let codeArea = document.getElementById('Location-3');
  codeArea.setAttribute('aria-invalid', 'false');
  codeArea.value = userData.codePostalInputKam;
}

if(
  window.location.href == 'https://www.renault.fr/contact/reserver-un-essai-rdv.html' &&
  Kameleoon.Utils.readLocalData('validetedForm', 'COOKIE')
) {
  insertUserData();
}
