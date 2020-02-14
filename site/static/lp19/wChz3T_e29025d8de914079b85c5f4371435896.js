"use strict"
window.onload = function () {
    var uuid = 'e29025d8de914079b85c5f4371435896';
    var html = '<div class=ccl-element-mobile-split-bar><div class=ccl-split-bar-item onclick=ccliface.openManual()> LIVE CHAT </div></div><div class="ccl-slider-v2  ccl-position-bottom-right"><div class=ccl-slider-bubble><div class="ccl-slider-bubble-icon ccl-slider-bubble-chat-icon" onclick=ccliface.openManual();></div></div><div class=ccl-slider-popup><button class=ccl-close-button><div id=ccl-slider-no></div></button><div class="ccl-message-bubble ccl-slider-yes"><div class=ccl-message-l><div class=ccl-img-container><div class=ccl-img></div></div></div><div class=ccl-message-r><div class=ccl-messages-container></div></div></div></div></div>';
    var cssUrl = 'https://d2lsj0jdjmerrs.cloudfront.net/integrations/wChz3T_e29025d8de914079b85c5f4371435896.css';

    var link = document.createElement("link");
    link.href = cssUrl;
    link.type = "text/css";
    link.rel = "stylesheet";
    link.onload = function () {
        onStylesLoaded();
    };
    document.getElementsByTagName("head")[0].appendChild(link);

    function onStylesLoaded() {
        document.body.appendChild(createElementFromHTML(html));
        
        (function() {
})();(function() {
    var delayToShowWindow = 6 * 1000;
    var messagesBox = document.querySelector('.ccl-messages-container');
    var spanishSiteUref = 'Bxj0Md';

    var popupWasAlreadyOpened = false;

    createMessage("<strong>We Are Available!</strong>");
    createMessage("Click Here To Start A Live Chat");
    var textLine3 = "<a class='spanish-ccl-link'>Click aquí </a>para chat en español";
    if (textLine3) {
        createMessage(textLine3);
    }

    function showPopup() {
        if (popupWasAlreadyOpened) {
            return;
        }

        var el = document.querySelector(".ccl-slider-v2");
        el.classList.add('ccl-show');
        setExpireTime();
    }

    function createMessage(content) {
        var htmlString = '<div class="ccl-slider-window-message">' + content + '</div>';
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        
        var newMessage =  div.firstChild; 
        messagesBox.appendChild(newMessage);
    }

    function setExpireTime() {
        // set expire time
        var expireTime = new Date();
        expireTime.setHours( expireTime.getHours() + 24 );
        localStorage.setItem('ccl-expire-time-slider', expireTime);
    }
    
    function hidePopup() {
        document.querySelector(".ccl-slider-v2").classList.remove('ccl-show');
        setTimeout(function() {
            var popup = document.querySelector(".ccl-slider-popup");
            if (popup) {
                popup.remove();
            }
        }, 350);
    }

    window.ccliface.hidePopup = function () {
        document.querySelector(".ccl-slider-v2").classList.remove('ccl-show');
        setTimeout(function() {
            var popup = document.querySelector(".ccl-slider-popup");
            if (popup) {
                popup.remove();
            }
        }, 350);
    }

    function openSpanishSite (e) {
        e.stopPropagation();
        var url = 'https://platform.clientchatlive.com/w/chat/#/chat/' + spanishSiteUref +'/register';
        window.open(url, '', 'width=475,height=600,toolbar=0,menubar=0,location=0,status=0,scrollbars=1,menubar=0,toolbar=0,resizable=1,left=50,top=50');
        document.querySelector(".ccl-slider-v2").classList.toggle('ccl-show');
    } 
    
    window.open = function (open) {
        return function (url, name, features) {
            window.ccliface.hidePopup();
            var windowSize = {
               width: 450,
               height: 603
            };
            var windowLocation = {
              left:  (screen.width - windowSize.width - 50),
              top:  (screen.height - windowSize.height - 220)
            };
            // set name if missing here
            name = name || "default_window_name";
            features = features.replace(',left=50,top=50', '');
            features = features + ",left=" + windowLocation.left + ",top=" + windowLocation.top;
            popupWasAlreadyOpened = true;
            return open.call(window, url, name, features );
        };
    }(window.open);
    
    var spanishLink = document.querySelector('.spanish-ccl-link');
    if (spanishLink) {
        spanishLink.addEventListener('click', openSpanishSite);
    }

    document.querySelector('.ccl-slider-yes').addEventListener('click', function () { window.ccliface.openManual(); });
    document.querySelector('.ccl-close-button').addEventListener('click', hidePopup);

    // window.setTimeout(showPopup, delayToShowWindow);

    // Show the window after the delay
    setTimeout(function() {
        var cclExpireTimeStr =localStorage.getItem('ccl-expire-time-slider');
        if (cclExpireTimeStr) {
            var cclExpireTime = new Date(localStorage.getItem('ccl-expire-time-slider'));
            if (cclExpireTime  <= new Date()) {
                 showPopup();
            } else {
                console.log('ccl window was alread opened');
            }
        }
        else {
            showPopup();
        }
    }, delayToShowWindow);

})();
    }

    function createElementFromHTML(htmlString) {
        var div = document.createElement('div');
        div.classList.add('ccl-elements-container');
        div.innerHTML = htmlString.trim();
        return div; 
      }
}