if(Kameleoon.Utils.readLocalData('oldGuest', 'COOKIE') != 1) {
  Kameleoon.Utils.createLocalData('oldGuest', 0, 1/24/60, '', 'COOKIE');
}
if(document.referrer.search('://otus.ru') == '-1' && Kameleoon.Utils.readLocalData('oldGuest', 'COOKIE') != 1 || Kameleoon.Utils.readLocalData('deepView', 'COOKIE') != window.location.href) {
  Kameleoon.Utils.createLocalData('deepView', window.location.href, 1, '', 'COOKIE');
  if(document.referrer.search('://otus.ru') == '-1') {
    Kameleoon.Utils.createLocalData('oldGuest', 1, 1/24/60, '', 'COOKIE');
  } else {
    Kameleoon.Utils.createLocalData('oldGuest', 0, 1/24/60, '', 'COOKIE');
  }
  Kameleoon.API.processConversion(138827);
}
document.addEventListener('click', function(e) {
  for(var i = 0; i < e.path.length; i++) {
    if(e.path[i].className == 'lessons__item lessons__item_hovered') {
      Kameleoon.API.processConversion(138833);
      if(window.location.href == 'https://otus.ru/categories/programming/') {
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
