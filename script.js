// Code goes here

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

(function () {
    'use strict';

    var dialog = document.querySelector('#facebook-dialog');

    dialogPolyfill.registerDialog(dialog);
    var dialogButton = document.querySelector('#facebookbtn');
    dialogButton.addEventListener('click', function () {
        dialog.showModal();
    });
    dialog.querySelector('.notatall').addEventListener('click', function () {
        dialog.close();
    });

    dialog.querySelector('.no').addEventListener('click', function () {
        window.location = "https://www.facebook.com/Fahrschule-Hagt-Michels-1455042041455155/?ref=page_internal";
        dialog.close();
    });

    dialog.querySelector('.yes').addEventListener('click', function () {
        window.location = "fb://page/1455042041455155/";
        dialog.close();
    });

}());


(function () {
    'use strict';

    var dialog = document.querySelector('#archive-dialog');

    dialogPolyfill.registerDialog(dialog);
    var dialogButton = document.querySelector('#bottomright-button');
    dialogButton.addEventListener('click', function () {
        disableScroll();
        dialog.showModal();
    });
    dialog.querySelector('.close').addEventListener('click', function () {
        enableScroll();
        dialog.close();
    });

    dialog.querySelector('.2017').addEventListener('click', function () {
        
        dialog.close();
    });

}());

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}

function expandCard() {
  if ($(this).height() > 220 ) {
    $(this).children('.mdl-card__supporting-text').animate({
      maxHeight: '75px'
     }, 500);
  } else {
    $(this).children('.mdl-card__supporting-text').animate({
      maxHeight: '1000px'
    }, 500);
  }
}
