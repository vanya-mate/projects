//var code
Kameleoon.API.runWhenElementPresent('.spotlight-box .container-description', (e) => {
  for(let i = 0; i < e.length; i++) {
    let childrenElements = e[i].innerHTML;
    e[i].innerHTML = `
      <div class="fixCenterCam">
        ${childrenElements}
      </div>
    `;
  }
});
Kameleoon.API.runWhenElementPresent('a.spotlight-box[data-bt-value="Découvrez l\'offre"]', (e) => {
  e[0].addEventListener('click', () => {
    Kameleoon.API.processConversion(141373);
  });
});
Kameleoon.API.runWhenElementPresent('a.spotlight-box[data-bt-value="Yaris très française"]', (e) => {
  e[0].addEventListener('click', () => {
    Kameleoon.API.processConversion(141373);
  });
});
Kameleoon.API.runWhenElementPresent('a.spotlight-box[data-bt-value="Estimez la valeur de votre véhicule"]', (e) => {
  e[0].addEventListener('click', () => {
    Kameleoon.API.processConversion(141373);
  });
});
Kameleoon.API.runWhenElementPresent('a.spotlight-box[data-bt-value="Les Journées Plus Utilitaires"]', (e) => {
  e[0].addEventListener('click', () => {
    Kameleoon.API.processConversion(141373);
  });
});

// spec code
Kameleoon.API.runWhenElementPresent('a.spotlight-box[data-bt-value="Découvrez l\'offre"]', (e) => {
  e[0].addEventListener('click', () => {
    Kameleoon.API.processConversion(141374);
  });
});
Kameleoon.API.runWhenElementPresent('a.spotlight-box[data-bt-value="Yaris très française"]', (e) => {
  e[0].addEventListener('click', () => {
    Kameleoon.API.processConversion(141376);
  });
});
Kameleoon.API.runWhenElementPresent('a.spotlight-box[data-bt-value="Estimez la valeur de votre véhicule"]', (e) => {
  e[0].addEventListener('click', () => {
    Kameleoon.API.processConversion(141377);
  });
});
Kameleoon.API.runWhenElementPresent('a.spotlight-box[data-bt-value="Les Journées Plus Utilitaires"]', (e) => {
  e[0].addEventListener('click', () => {
    Kameleoon.API.processConversion(141378);
  });
});
Kameleoon.API.runWhenElementPresent('.spotlight-box img', (e) => {
  for(let i = 0; i < e.length; i++) {
    e[i].addEventListener('click', () => {
      Kameleoon.API.processConversion(141373);
    })
  }
});
