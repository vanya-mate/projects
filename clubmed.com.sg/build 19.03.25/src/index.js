// varriaion code

Kameleoon.API.runWhenElementPresent('.Line.Line-BookingEngine', (e) => {
  let beforeElement = document.querySelector('.Line.Line-ProductIntro');
  beforeElement.insertAdjacentElement('beforeBegin', e[0]);
});

// spec code

Kameleoon.API.runWhenElementPresent('.BookingForm.BookingForm--bookingEngine', function (e) {
  e[0].addEventListener(Kameleoon.Internals.runtime.mouseDownEvent, function(e){
    if (!Kameleoon.Internals.runtime.touchMoveEvent) {
      Kameleoon.API.processConversion(141287);
    }
  });
});
