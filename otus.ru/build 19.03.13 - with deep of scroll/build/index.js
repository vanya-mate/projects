"use strict";

// Kameleoon.API.processConversion(139598) - programming
// Kameleoon.API.processConversion(139599) - operations
// Kameleoon.API.processConversion(139600) - inf sec
// Kameleoon.API.processConversion(139601) - market busin
// Kameleoon.API.processConversion(139602) - data science
window.addEventListener('load', function () {
  // console.log(Kameleoon.API.currentVisit.conversions);
  // console.log(JSON.parse(sessionStorage.getItem('infoAboutPages')));
  // console.log(window.innerHeight);
  // console.log(window.scrollY);
  // console.log(document.body.getBoundingClientRect().height);
  var maxScroll = 0,
      procentOfViewPage = getProcentOfPage(window.innerHeight, window.scrollY, document.body.getBoundingClientRect().height);
  var infoAboutPages = {
    programming: [],
    operations: [],
    informationSecurity: [],
    marketingBusiness: [],
    dataScience: [] // console.log(procentOfViewPage);

  };

  if (sessionStorage.getItem('infoAboutPages') == undefined) {
    sessionStorage.setItem('infoAboutPages', JSON.stringify(infoAboutPages));
  }

  if (window.location.href == 'https://otus.ru/categories/programming/') {
    var data = JSON.parse(sessionStorage.getItem('infoAboutPages'));
    data.programming.push(procentOfViewPage);
    sessionStorage.removeItem('infoAboutPages');
    sessionStorage.setItem('infoAboutPages', JSON.stringify(data));
  } else if (window.location.href == 'https://otus.ru/categories/operations/') {
    var data = JSON.parse(sessionStorage.getItem('infoAboutPages'));
    data.operations.push(procentOfViewPage);
    sessionStorage.removeItem('infoAboutPages');
    sessionStorage.setItem('infoAboutPages', JSON.stringify(data));
  } else if (window.location.href == 'https://otus.ru/categories/information-security/') {
    var data = JSON.parse(sessionStorage.getItem('infoAboutPages'));
    data.informationSecurity.push(procentOfViewPage);
    sessionStorage.removeItem('infoAboutPages');
    sessionStorage.setItem('infoAboutPages', JSON.stringify(data));
  } else if (window.location.href == 'https://otus.ru/categories/marketing-business/') {
    var data = JSON.parse(sessionStorage.getItem('infoAboutPages'));
    data.marketingBusiness.push(procentOfViewPage);
    sessionStorage.removeItem('infoAboutPages');
    sessionStorage.setItem('infoAboutPages', JSON.stringify(data));
  } else if (window.location.href == 'https://otus.ru/categories/data-science/') {
    var data = JSON.parse(sessionStorage.getItem('infoAboutPages'));
    data.dataScience.push(procentOfViewPage);
    sessionStorage.removeItem('infoAboutPages');
    sessionStorage.setItem('infoAboutPages', JSON.stringify(data));
  } else {}

  function getProcentOfPage(inHei, scrollY, bodyHei) {
    return (inHei + scrollY) / (bodyHei / 100);
  }

  function sendData() {
    var data = JSON.parse(sessionStorage.getItem('infoAboutPages')),
        temp = 0,
        round = 10; // console.log('send data');

    if (data.programming.length > 0) {
      for (var i = 0; i < data.programming.length; i++) {
        temp += data.programming[i];
      }

      temp /= data.programming.length;
      Kameleoon.API.processConversion(139598, Math.round(temp * round) / round);
      temp = 0;
    }

    if (data.operations.length > 0) {
      for (var i = 0; i < data.operations.length; i++) {
        temp += data.operations[i];
      }

      temp /= data.operations.length;
      Kameleoon.API.processConversion(139599, Math.round(temp * round) / round);
      temp = 0;
    }

    if (data.informationSecurity.length > 0) {
      for (var i = 0; i < data.informationSecurity.length; i++) {
        temp += data.informationSecurity[i];
      }

      temp /= data.informationSecurity.length;
      Kameleoon.API.processConversion(139600, Math.round(temp * round) / round);
      temp = 0;
    }

    if (data.marketingBusiness.length > 0) {
      for (var i = 0; i < data.marketingBusiness.length; i++) {
        temp += data.marketingBusiness[i];
      }

      temp /= data.marketingBusiness.length;
      Kameleoon.API.processConversion(139601, Math.round(temp * round) / round);
      temp = 0;
    }

    if (data.dataScience.length > 0) {
      for (var i = 0; i < data.dataScience.length; i++) {
        temp += data.dataScience[i];
      }

      temp /= data.dataScience.length;
      Kameleoon.API.processConversion(139602, Math.round(temp * round) / round);
      temp = 0;
    }
  }

  document.addEventListener('scroll', function (e) {
    if (maxScroll < window.scrollY) {
      maxScroll = window.scrollY;
    }

    if (procentOfViewPage < getProcentOfPage(window.innerHeight, window.scrollY, document.body.getBoundingClientRect().height)) {
      procentOfViewPage = getProcentOfPage(window.innerHeight, window.scrollY, document.body.getBoundingClientRect().height);
      console.log(procentOfViewPage);
    }
  });
  document.addEventListener('click', function (e) {
    if (e.target.localName = 'a') {
      window.removeEventListener('beforeunload', sendData);

      if (window.location.href == 'https://otus.ru/categories/programming/') {
        var data = JSON.parse(sessionStorage.getItem('infoAboutPages'));
        data.programming.pop();
        data.programming.push(procentOfViewPage);
        sessionStorage.removeItem('infoAboutPages');
        sessionStorage.setItem('infoAboutPages', JSON.stringify(data));
      } else if (window.location.href == 'https://otus.ru/categories/operations/') {
        var data = JSON.parse(sessionStorage.getItem('infoAboutPages'));
        data.operations.pop();
        data.operations.push(procentOfViewPage);
        sessionStorage.removeItem('infoAboutPages');
        sessionStorage.setItem('infoAboutPages', JSON.stringify(data));
      } else if (window.location.href == 'https://otus.ru/categories/information-security/') {
        var data = JSON.parse(sessionStorage.getItem('infoAboutPages'));
        data.informationSecurity.pop();
        data.informationSecurity.push(procentOfViewPage);
        sessionStorage.removeItem('infoAboutPages');
        sessionStorage.setItem('infoAboutPages', JSON.stringify(data));
      } else if (window.location.href == 'https://otus.ru/categories/marketing-business/') {
        var data = JSON.parse(sessionStorage.getItem('infoAboutPages'));
        data.marketingBusiness.pop();
        data.marketingBusiness.push(procentOfViewPage);
        sessionStorage.removeItem('infoAboutPages');
        sessionStorage.setItem('infoAboutPages', JSON.stringify(data));
      } else if (window.location.href == 'https://otus.ru/categories/data-science/') {
        var data = JSON.parse(sessionStorage.getItem('infoAboutPages'));
        data.dataScience.pop();
        data.dataScience.push(procentOfViewPage);
        sessionStorage.removeItem('infoAboutPages');
        sessionStorage.setItem('infoAboutPages', JSON.stringify(data));
      } else {}
    }
  });
  window.addEventListener('beforeunload', sendData);
});
document.addEventListener('click', function (e) {
  for (var i = 0; i < e.path.length; i++) {
    if (e.path[i].className == 'lessons__item lessons__item_hovered') {
      Kameleoon.API.processConversion(138833);

      if (window.location.href == 'https://otus.ru/categories/programming/') {
        Kameleoon.API.processConversion(130353);
      } else if (window.location.href == 'https://otus.ru/categories/operations/') {
        Kameleoon.API.processConversion(130352);
      } else if (window.location.href == 'https://otus.ru/categories/information-security/') {
        Kameleoon.API.processConversion(130354);
      } else if (window.location.href == 'https://otus.ru/categories/marketing-business/') {
        Kameleoon.API.processConversion(130351);
      } else if (window.location.href == 'https://otus.ru/categories/data-science/') {
        Kameleoon.API.processConversion(130355);
      } else {}
    }
  }
});