"use strict";

//var code
Kameleoon.API.runWhenElementPresent('a.spotlight-box[data-bt-value="Découvrez l\'offre"]', function (e) {
  e[0].addEventListener('click', function () {
    Kameleoon.API.processConversion(141373);
  });
});
Kameleoon.API.runWhenElementPresent('a.spotlight-box[data-bt-value="Yaris très française"]', function (e) {
  e[0].addEventListener('click', function () {
    Kameleoon.API.processConversion(141373);
  });
});
Kameleoon.API.runWhenElementPresent('a.spotlight-box[data-bt-value="Estimez la valeur de votre véhicule"]', function (e) {
  e[0].addEventListener('click', function () {
    Kameleoon.API.processConversion(141373);
  });
});
Kameleoon.API.runWhenElementPresent('a.spotlight-box[data-bt-value="Les Journées Plus Utilitaires"]', function (e) {
  e[0].addEventListener('click', function () {
    Kameleoon.API.processConversion(141373);
  });
}); // spec code

Kameleoon.API.runWhenElementPresent('a.spotlight-box[data-bt-value="Découvrez l\'offre"]', function (e) {
  e[0].addEventListener('click', function () {
    Kameleoon.API.processConversion(141374);
  });
});
Kameleoon.API.runWhenElementPresent('a.spotlight-box[data-bt-value="Yaris très française"]', function (e) {
  e[0].addEventListener('click', function () {
    Kameleoon.API.processConversion(141376);
  });
});
Kameleoon.API.runWhenElementPresent('a.spotlight-box[data-bt-value="Estimez la valeur de votre véhicule"]', function (e) {
  e[0].addEventListener('click', function () {
    Kameleoon.API.processConversion(141377);
  });
});
Kameleoon.API.runWhenElementPresent('a.spotlight-box[data-bt-value="Les Journées Plus Utilitaires"]', function (e) {
  e[0].addEventListener('click', function () {
    Kameleoon.API.processConversion(141378);
  });
});
Kameleoon.API.runWhenElementPresent('.spotlight-box img', function (e) {
  for (var i = 0; i < e.length; i++) {
    e[i].addEventListener('click', function () {
      Kameleoon.API.processConversion(141373);
    });
  }
});