"use strict";

var rtn = false;
function searchParentClass(elem, elemClass) {
  if(elem.parentNode.className == elemClass) {
    rtn = true;
    return true;
  } else {
    searchParentClass(elem.parentNode, elemClass);
  }
  if(rtn) return true;
}

document.addEventListener('click', function (e) {
  var oldSize = window.innerHeight;
  var changeTop = setInterval(function () {
    if (oldSize == window.innerHeight) return;
      // var elemScale = 1 - (820 / (window.innerHeight / 100) - 100) / 100
      var topMargin = window.innerHeight / 2 - 400;
      if(topMargin < 10) {
        topMargin = 10;
      }
      var elemScale = 1;
      if(topMargin == 10) {
        elemScale = 0.8;
        topMargin = window.innerHeight / 2 - 400;
        if(topMargin < 1) {
          topMargin = 1;
        }
      }
      document.querySelector('.fancybox-wrap.fancybox-desktop.fancybox-type-html.fancybox-opened').style.transform = 'scale(' + elemScale + ')';
      document.querySelector('.fancybox-wrap.fancybox-desktop.fancybox-type-html.fancybox-opened').style.top = topMargin + 'px';
  }, 200); // if(e.target.className == 'btnCTALarge btn-cart-46736' || e.path[2].className == 'btnCTALarge btn-cart-46736' && e.path[5].className == 'simple-buybox-wrp') {

  if (e.target.className == 'btnCTALarge btn-cart-46736' || e.target.parentNode.parentNode.className == 'btnCTALarge btn-cart-46736') {
    rtn = false;
    var trueButton = searchParentClass(e.target, 'simple-buybox-wrp');

    if (trueButton) {
      var thisButton = document.getElementsByClassName('btnCTALarge')[0];
      thisButton.setAttribute('onclick', '');
      document.body.appendChild(htmlCode);
      var leftButton = document.querySelector('#fancy-button-left-test'),
          rightButton = document.querySelector('#fancy-button-right-test');
      rightButton.addEventListener('click', function () {
        var formCart = document.getElementById('product_addtocart_form');
        var replaceId;
        var actionId = formCart.getAttribute('action');

        if (actionId.search('/product/46736') + 1) {
          replaceId = '46736';
        } else if (actionId.search('/product/66541') + 1) {
          replaceId = '66541';
        } else {
          replaceId = '66612';
        }

        formCart.setAttribute('action', formCart.getAttribute('action').replace('/product/' + replaceId, '/product/' + rightButton.getAttribute('data-value')));
        formCart[1].setAttribute('value', formCart[1].getAttribute('value').replace(replaceId, rightButton.getAttribute('data-value')));
        clearInterval(changeTop);
        document.body.removeChild(htmlCode);
        minicart.add();
      });
      leftButton.addEventListener('click', function () {
        var formCart = document.getElementById('product_addtocart_form');
        var replaceId;
        var actionId = formCart.getAttribute('action');

        if (actionId.search('/product/46736') + 1) {
          replaceId = '46736';
        } else if (actionId.search('/product/66541') + 1) {
          replaceId = '66541';
        } else {
          replaceId = '66612';
        }

        var formCart = document.getElementById('product_addtocart_form');
        formCart.setAttribute('action', formCart.getAttribute('action').replace('/product/' + replaceId, '/product/' + leftButton.getAttribute('data-value')));
        formCart[1].setAttribute('value', formCart[1].getAttribute('value').replace(replaceId, leftButton.getAttribute('data-value')));
        clearInterval(changeTop);
        document.body.removeChild(htmlCode);
        minicart.add();
      });
    }
  }

  if (e.target.className == 'fancybox-item fancybox-close fancy-test-close') {
    clearInterval(changeTop);
    document.body.removeChild(htmlCode);
  }
}, true);

var topMargin = window.innerHeight / 2 - 400;
if(topMargin < 10) {
  topMargin = 10;
}
var elemScale = 1;
if(topMargin == 10) {
  elemScale = 0.8;
  topMargin = window.innerHeight / 2 - 400;
  if(topMargin < -50) {
    topMargin = -50;
  }
}

window.htmlCode = document.createElement('div');
htmlCode.className = 'fancybox-overlay fancybox-overlay-fixed';
htmlCode.id = 'fancybox-overlay-test';
htmlCode.style.display = 'block';
htmlCode.style.width = 'auto';
htmlCode.style.height = 'auto';
htmlCode.style.overflow = 'scroll';
htmlCode.innerHTML = "\n  <div class=\"fancybox-wrap fancybox-desktop fancybox-type-html fancybox-opened\" tabindex=\"-1\" style=\"width: 910px; height: auto; position: relative; margin: auto; left: 50%; margin-left: -455px; top: " + topMargin + "px; opacity: 1; overflow: visible; transform: scale(" + elemScale + ")\">\n    <div class=\"fancybox-skin\" style=\"padding: 25px; width: auto; height: auto; border-radius: 5px;\">\n      <div class=\"fancybox-outer\">\n        <div class=\"fancybox-inner\" style=\"overflow: auto; width: 870px; height: 729px;\">\n          <p class=\"fancybox-title-test\">Bitte w\xE4hlen Sie aus, ob Sie nur die Erstlieferung oder die Kollektion mit monatlichen Folgelieferungen sammeln m\xF6chten:</p>\n          <div id=\"fancybox-wrapper-blocks-test\">\n            <div id='fancybox-left-block-test'>\n              <div class='fancy-title-block-test title-grey-test'>\n                Ich m\xF6chte nur die erste Ausgabe\n              </div>\n              <div class=\"fancy-img-height-test\">\n                <img src=\"https://i1.adis.ws/i/MDM/21723-001_1?$ps_product_detail_slider_img$&muenze_1=21723-001_1&muenze_2=21723-001_9&muenze_3=21723-001_3&muenze_5=21723-001_4&muenze_7=21723-001_5&muenze_9=21723-001_6&muenze_11=21723-001_7&muenze_13=21723-001_8&wa_1=21723-001_zub1&wa_2=21723-001_zub3\">\n              </div>\n              <div class=\"fancy-name-product-test\">\n                \u201EDouble Eagle\u201C 1/100-Unzen-Goldm\xFCnze\n              </div>\n              <div class=\"fancy-info-product-test\">\n                <div class=\"fancy-info-product-left-test\">\n                  <div class=\"fancy-have-product-test\">Sofort verf\xFCgbar</div>\n                  <div class=\"fancy-info-product-row1-test\">steuerfrei</div>\n                  <div class=\"fancy-info-product-row2-test\">zzgl. <a href=\"https://www.mdm.de/service/versand\">Versandkosten</a></div>\n                </div>\n                <div class=\"fancy-info-product-right-test\">\n                <!-- <div class=\"fancy-sail-product-test\">statt <span>99,95 \u20AC</span></div> -->\n                  <div class=\"fancy-info-price-test\">\n                    99,90 \u20AC\n                  </div>\n                </div>\n              </div>\n              <div id=\"fancy-button-left-test\" class=\"fancy-button-test fancy-button-grey-test\" data-value=\"66541\" data-key-value=\"Lf2E0jnTGbb6JJrm\">\n                In den Warenkorb\n              </div>\n              <div class=\"fancy-underbutton-info-test\">\n              Ich m\xF6chte nur die Erstlieferung erhalten, zum Preis von 99,90 \u20AC.\nIch verzichte auf die Vorteile von einem Abonnement.\n              </div>\n            </div>\n            <div id='fancybox-right-block-test'>\n              <div class='fancy-title-block-test title-blue-test'>\n                Ja, ich m\xF6chte die Kollektion sammeln!\n              </div>\n              <div class=\"fancy-img-height-test\">\n                <img class=\"fancy-width-100-test\" src=\"https://i1.adis.ws/i/MDM/?$tpl_mf_sammlung_folderabo_rund_neu$&$ps_product_detail_slider_img$&muenze_1=21723-001_1&muenze_2=21723-001_9&muenze_3=21723-001_3&muenze_5=21723-001_4&muenze_7=21723-001_5&muenze_9=21723-001_6&muenze_11=21723-001_7&muenze_13=21723-001_8&wa_1=21723-001_zub1&wa_2=21723-001_zub3\">\n              </div>\n              <div class=\"fancy-name-product-test\">\n                Die gr\xF6\xDFten 1/100-Unzen-Goldm\xFCnzen zum kleinen Preis \u2013 Startlieferung: \u201EDouble Eagle\u201C!\n              </div>\n              <div class=\"fancy-info-product-test\">\n                <div class=\"fancy-info-product-left-test\">\n                  <div class=\"fancy-have-product-test\">Sofort verf\xFCgbar</div>\n                  <div class=\"fancy-info-product-row1-test\">steuerfrei</div>\n                  <div class=\"fancy-info-product-row2-test\">zzgl. <a href=\"https://www.mdm.de/service/versand\">Versandkosten</a></div>\n                </div>\n                <div class=\"fancy-info-product-right-test\">\n                  <div class=\"fancy-sail-product-test\">statt <span>99,90 \u20AC</span></div>\n                  <div class=\"fancy-info-price-test\">\n                    49,90 \u20AC\n                  </div>\n                </div>\n              </div>\n              <div id=\"fancy-button-right-test\" class=\"fancy-button-test fancy-button-red-test\" data-value=\"66612\" data-key-value=\"Lf2E0jnTGbb6JJrm\">\n                Kollektion in den Warenkorb\n              </div>\n              <div class=\"fancy-underbutton-info-test\">\n              Ja, ich m\xF6chte die Kollektion sammeln.\nDie Erstlieferung erhalte ich dabei zum reduzierten Preis von nur 49,90 \u20AC, monatlich erhalte ich die Folgelieferungen zum g\xFCnstigen Sammlerpreis von aktuell nur 89,90 \u20AC alle vier Wochen unverbindlich f\xFCr 14 Tage zur Ansicht mit garantiertem R\xFCckgaberecht zugesendet.\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <a title=\"Close\" class=\"fancybox-item fancybox-close fancy-test-close\" href=\"javascript:;\"></a>\n    </div>\n  </div>\n";
