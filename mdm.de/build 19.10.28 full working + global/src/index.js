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
document.addEventListener('click', function(e){
  var oldSize = window.innerHeight;
  var changeTop = setInterval(function() {
    if(oldSize == window.innerHeight) return;
    var top = window.innerHeight / 2 - 400;
    if(top < 30) {
      top = 30;
    }
    document.querySelector('.fancybox-wrap.fancybox-desktop.fancybox-type-html.fancybox-opened').style.top = top + 'px';
  }, 200);
    // if(e.target.className == 'btnCTALarge btn-cart-46736' || e.path[2].className == 'btnCTALarge btn-cart-46736' && e.path[5].className == 'simple-buybox-wrp') {
  if(e.target.className == 'btnCTALarge btn-cart-46736' || e.target.parentNode.parentNode.className == 'btnCTALarge btn-cart-46736') {
    rtn = false;
    var trueButton = searchParentClass(e.target, 'simple-buybox-wrp');
    if(trueButton) {
      var thisButton = document.getElementsByClassName('btnCTALarge')[0];
      thisButton.setAttribute('onclick', '');
      document.body.appendChild(htmlCode);
      var leftButton = document.querySelector('#fancy-button-left-test'),
          rightButton = document.querySelector('#fancy-button-right-test');
      rightButton.addEventListener('click', function() {
        var formCart = document.getElementById('product_addtocart_form');
        var replaceId;
        var actionId = formCart.getAttribute('action');
        if(actionId.search('/product/46736') + 1) {
          replaceId = '46736';
        } else if(actionId.search('/product/66541') + 1) {
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
      leftButton.addEventListener('click', function() {
        var formCart = document.getElementById('product_addtocart_form');
        var replaceId;
        var actionId = formCart.getAttribute('action');
        if(actionId.search('/product/46736') + 1) {
          replaceId = '46736';
        } else if(actionId.search('/product/66541') + 1) {
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
  if(e.target.className =='fancybox-item fancybox-close fancy-test-close') {
    clearInterval(changeTop);
    document.body.removeChild(htmlCode);
  }
}, true);

// spec code

document.addEventListener('click', function (e) {
  if (e.target.className == 'btnCTALarge btn-cart-46736' || e.target.parentNode.parentNode.className == 'btnCTALarge btn-cart-46736') {
    rtn = false;
    var trueButton = searchParentClass(e.target, 'simple-buybox-wrp');
    if (trueButton) {
      var target = document.querySelector('body'); // .fancybox-overlay.fancybox-overlay-fixed
      var config = {
        childList: true
      };
      var stopObserv = false;
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          var ajaxFrame = document.querySelector('.ajax-frame h2');
          if (ajaxFrame && ajaxFrame.textContent.trim() === 'Dieser Artikel wurde dem Warenkorb hinzugefügt:') {
            var formCart = document.getElementById('product_addtocart_form');
            if (formCart[1].getAttribute('value') == '46736') {
              if (!stopObserv) {
                console.log('goal 46736');
                Kameleoon.API.processConversion(139995);
                stopObserv = true;
                observer.disconnect();
              }
            } else if (formCart[1].getAttribute('value') == '66541') {
              if (!stopObserv) {
                console.log('goal 66541');
                Kameleoon.API.processConversion(139995);
                stopObserv = true;
                observer.disconnect();
              }
            } else {
              if (!stopObserv) {
                console.log('goal 66612');
                Kameleoon.API.processConversion(139995);
                stopObserv = true;
                observer.disconnect();
              }
            }
          }
        });
      });
      observer.observe(target, config);
    }
  }
}); // end spec code

var top = window.innerHeight / 2 - 400;
if(top < 30) {
  top = 30;
}


window.htmlCode = document.createElement('div');
htmlCode.className = 'fancybox-overlay fancybox-overlay-fixed';
htmlCode.id = 'fancybox-overlay-test';
htmlCode.style.display = 'block';
htmlCode.style.width = 'auto';
htmlCode.style.height = 'auto';
htmlCode.style.overflow = 'scroll';
htmlCode.innerHTML = `
  <div class="fancybox-wrap fancybox-desktop fancybox-type-html fancybox-opened" tabindex="-1" style="width: 910px; height: auto; position: relative; margin: auto; left: 50%; margin-left: -455px; top: ${top}px; opacity: 1; overflow: visible;">
    <div class="fancybox-skin" style="padding: 25px; width: auto; height: auto; border-radius: 5px;">
      <div class="fancybox-outer">
        <div class="fancybox-inner" style="overflow: auto; width: 870px; height: 729px;">
          <p class="fancybox-title-test">Bitte wählen Sie aus, ob Sie nur die Erstlieferung oder die Kollektion mit monatlichen Folgelieferungen sammeln möchten:</p>
          <div id="fancybox-wrapper-blocks-test">
            <div id='fancybox-left-block-test'>
              <div class='fancy-title-block-test title-grey-test'>
                Ich möchte nur die erste Ausgabe
              </div>
              <div class="fancy-img-height-test">
                <img src="https://i1.adis.ws/i/MDM/21723-001_1?$ps_product_detail_slider_img$&muenze_1=21723-001_1&muenze_2=21723-001_9&muenze_3=21723-001_3&muenze_5=21723-001_4&muenze_7=21723-001_5&muenze_9=21723-001_6&muenze_11=21723-001_7&muenze_13=21723-001_8&wa_1=21723-001_zub1&wa_2=21723-001_zub3">
              </div>
              <div class="fancy-name-product-test">
                „Double Eagle“ 1/100-Unzen-Goldmünze
              </div>
              <div class="fancy-info-product-test">
                <div class="fancy-info-product-left-test">
                  <div class="fancy-have-product-test">Sofort verfügbar</div>
                  <div class="fancy-info-product-row1-test">steuerfrei</div>
                  <div class="fancy-info-product-row2-test">zzgl. <a href="https://www.mdm.de/service/versand">Versandkosten</a></div>
                </div>
                <div class="fancy-info-product-right-test">
                <!-- <div class="fancy-sail-product-test">statt <span>99,95 €</span></div> -->
                  <div class="fancy-info-price-test">
                    99,90 €
                  </div>
                </div>
              </div>
              <div id="fancy-button-left-test" class="fancy-button-test fancy-button-grey-test" data-value="66541" data-key-value="Lf2E0jnTGbb6JJrm">
                In den Warenkorb
              </div>
              <div class="fancy-underbutton-info-test">
              Ich möchte nur die Erstlieferung erhalten, zum Preis von 99,90 €.
Ich verzichte auf die Vorteile von einem Abonnement.
              </div>
            </div>
            <div id='fancybox-right-block-test'>
              <div class='fancy-title-block-test title-blue-test'>
                Ja, ich möchte die Kollektion sammeln!
              </div>
              <div class="fancy-img-height-test">
                <img class="fancy-width-100-test" src="https://i1.adis.ws/i/MDM/?$tpl_mf_sammlung_folderabo_rund_neu$&$ps_product_detail_slider_img$&muenze_1=21723-001_1&muenze_2=21723-001_9&muenze_3=21723-001_3&muenze_5=21723-001_4&muenze_7=21723-001_5&muenze_9=21723-001_6&muenze_11=21723-001_7&muenze_13=21723-001_8&wa_1=21723-001_zub1&wa_2=21723-001_zub3">
              </div>
              <div class="fancy-name-product-test">
                Die größten 1/100-Unzen-Goldmünzen zum kleinen Preis – Startlieferung: „Double Eagle“!
              </div>
              <div class="fancy-info-product-test">
                <div class="fancy-info-product-left-test">
                  <div class="fancy-have-product-test">Sofort verfügbar</div>
                  <div class="fancy-info-product-row1-test">steuerfrei</div>
                  <div class="fancy-info-product-row2-test">zzgl. <a href="https://www.mdm.de/service/versand">Versandkosten</a></div>
                </div>
                <div class="fancy-info-product-right-test">
                  <div class="fancy-sail-product-test">statt <span>99,90 €</span></div>
                  <div class="fancy-info-price-test">
                    49,90 €
                  </div>
                </div>
              </div>
              <div id="fancy-button-right-test" class="fancy-button-test fancy-button-red-test" data-value="66612" data-key-value="Lf2E0jnTGbb6JJrm">
                Kollektion in den Warenkorb
              </div>
              <div class="fancy-underbutton-info-test">
              Ja, ich möchte die Kollektion sammeln.
Die Erstlieferung erhalte ich dabei zum reduzierten Preis von nur 49,90 €, monatlich erhalte ich die Folgelieferungen zum günstigen Sammlerpreis von aktuell nur 89,90 € alle vier Wochen unverbindlich für 14 Tage zur Ansicht mit garantiertem Rückgaberecht zugesendet.
              </div>
            </div>
          </div>
        </div>
      </div>
      <a title="Close" class="fancybox-item fancybox-close fancy-test-close" href="javascript:;"></a>
    </div>
  </div>
`;

// GLOBAL CODE // need add runWhenConditionTrue() for datalayer

if (location.href.match('/success/')) {
	Kameleoon.API.runWhenConditionTrue(function () {
	  return window.dataLayer !== null;
	}, function () {
	  var oneDisplayProductAdd = false;
		if (dataLayer[0].product) {
		  for (var i = 0; i < dataLayer[0].product.length; i++) {
		  	var product = dataLayer[0].product[i].id;

		    if (product == '66612' || product == '21723/009' || product == '46736' || product == '21723/001') {
		      Kameleoon.API.processConversion(140001); //  ( order col )
		      oneDisplayProductAdd = true;
		    }

        if (product == '66541' || product == '1388140139') {
		      Kameleoon.API.processConversion(140002); // ( order one )
		      oneDisplayProductAdd = true;
		    }

		  }
	  }
	  if (oneDisplayProductAdd) {
	    Kameleoon.API.processConversion(140000); //  ( order some )
	  }
	});
}

// 21723/001
//{name: "Die größten 1/100-Unzen-Goldmünzen zum kleinen Preis – Startlieferung: „Double Eagle“!", id: "21723/009", price: 49.9,
// {name: "Große 1/100 Unzen Goldmünze &quot;Double Eagle&quot;", id: "1388140139", price: 99.9,
