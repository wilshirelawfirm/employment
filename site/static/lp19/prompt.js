
/*
 * WARNING: Do not attempt to save and/or cache this file. It should always be 
 * served by the platform.
 * 
 * Generated: 2019-11-25T19:28:54Z
 * Active: True
 * Version: v8
 */

(function() {
	if(typeof window.cclconfig === 'undefined') {
		window.cclconfig = {
			'environment': null,
			'site': null,
			'data': {
				'prompt': null,
				'slider': null,
				'inline': null,
				'sms': null
			},
			'html': {
				'prompt': null,
				'slider': null
			}
		};
	};
	
	if(typeof window.ccliface === 'undefined') {
		window.ccliface = {};
	};
	
	if(typeof window.cclhook === 'undefined') {
		window.cclhook = {};
	};
	
	// START: Generated Code

        // 2019-11-25T19:28:54Z
        // Client Active: True
        // Integration Version: v8
        window.cclconfig.platformHost = "https://platform.clientchatlive.com";
        window.cclconfig.environment = "production";
        window.cclconfig.environment = "production";
        window.cclconfig.site = "wChz3T";
        window.cclconfig.data.prompt = {"repeat": false, "remember": true, "show": true, "remember_duration": 28800, "image": "https://platform.clientchatlive.com/chat/integration/wChz3T/asset/prompt.jpg", "delay": 10000, "location": "https://platform.clientchatlive.com/w/chat/#/chat/wChz3T/register"};
        window.cclconfig.data.slider = {"repeat": true, "remember": false, "show": true, "image": "https://platform.clientchatlive.com/chat/integration/wChz3T/asset/slider.png", "delay": 0, "location": "https://platform.clientchatlive.com/w/chat/#/chat/wChz3T/register"};
        window.cclconfig.data.inline = {"repeat": true, "remember": false, "show": true, "image": "https://platform.clientchatlive.com/chat/integration/wChz3T/asset/inline.png", "delay": 0, "location": "https://platform.clientchatlive.com/w/chat/#/chat/wChz3T/register"};
        window.cclconfig.data.sms = {"repeat": true, "remember": false, "show": false, "track": null, "image": "https://platform.clientchatlive.com/chat/integration/wChz3T/asset/sms.png", "delay": 0, "location": null};
        window.cclconfig.html.prompt = "<div id=\"bb2c488a8a75_wrap\">\n    <div id=\"bb2c488a8a75_overlay\">\n        &nbsp;\n    </div>\n    <div id=\"bb2c488a8a75_offset\">\n        <div id=\"bb2c488a8a75_modal\">\n            <img src=\"#\" id=\"bb2c488a8a75_header\"/>\n            <p class=\"bb2c488a8a75_p\">\n                Would you like to speak to a live person?\n                <br />\n            </p>\n            \n            <div class=\"bb2c488a8a75_buttons\">\n                <div id=\"bb2c488a8a75_yes\">Yes</div>\n                <div id=\"bb2c488a8a75_no\">No</div>\n                <div class=\"bb2c488a8a75_clear\"></div>\n            </div>\n            \n            <br />\n            \n            <div id=\"bb2c488a8a75_credit\">\n                Powered by <a href=\"http://clientchatlive.com\" target=\"_blank\">ClientChatLive</a>\n            </div>\n        </div>\n    </div>\n</div>";
        window.cclconfig.html.slider = "<div></div>";
        window.cclconfig.css = ["https://platform.clientchatlive.com/chat/integration/wChz3T/asset/integration.css"];
        window.cclconfig.js = [];
        window.cclconfig.integrations = {"ga": {"tid": "UA-44727235-1"}};
        window.cclconfig.elementsScriptUrl = 'https://d2lsj0jdjmerrs.cloudfront.net/integrations/wChz3T_e29025d8de914079b85c5f4371435896.js';
        window.cclconfig.useIframes = false;
        window.cclconfig.isActive = true;
        
	// END: Generated Code
}());

(function() {
	// Check if site is enabled
	if (window.cclconfig.isActive == false) {
		return;
	}

	// 
	// START: Legacy Cookie Code
	//
	
	var cookie = {
		get: function(k) {
			var name = k + "=";
			var all = document.cookie.split(';');
			for(var i=0; i<all.length; i++) {
				var c = all[i];
				while (c.charAt(0)==' ') c = c.substring(1);
				if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
			}
			return null;
		},
		set: function(k, v, duration) {
			if(typeof duration === 'undefined' || !duration) {
				duration = 90 * 24 * 3600;
			}
			
			duration *= 1000;
						
			var exp = new Date(new Date().getTime() + duration);
						
			var cookie = encodeURIComponent(k) + '=' + encodeURIComponent(v) + ';expires=' + exp.toGMTString() + ';path=/';
			document.cookie = cookie;
		}
	};
	
	// 
	// END: Legacy Cookie Code
	//
	
	//
	function getParameterByName(name, url) {
		if (!url) url = window.location.href;
		// url = url.toLowerCase(); // This is just to avoid case sensitiveness  
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
		
	//
	// Begin CCL Integration Code
	//
	
	// A random (but consistent) prefix for IDs, this is to avoid potential 
	// namespace collisions with the client site.
	var _id = "bb2c488a8a75";
	
	// Build Configuration
	var _config = {};
	var _verified = false;
	
	// Chat Started (Current Session)
	var _opened = false;
	
	// Chat Decision Made
	var _decision = null;
	
	// Original + Landing Pages
	var _original = null;
	var _landing = null;
	
	// Google Analytics Client Tracking ID
	var _ga_cid = null;
	
	// Google AdWords Click ID
	var _ga_gclid = null;
	
	// Session Extras
	_extras = {};

	// Last Page Title 
	var _lastPageTitle = window.document.title;
	
	(function() {
		// Environments
		var ENVIRONMENTS = {
			"local": {
				"base": "https://ccl",
				"log": true
			}, 
			"development": {
				"base": "http://platform-dev.clientchatlive.com",
				"log": true
			},
			"production": {
				"base": "http://platform.clientchatlive.com",
				"log": false
			}
		};
		
		// Required Configuration Options
		var REQUIRED = ["site", "base", "log"];
		
		var i;
		var element;
		
		// Determine Environment (defaults to production)
		var environment = null;		
		if(typeof cclconfig === 'undefined' || typeof cclconfig.environment === 'undefined') {
			environment = "production";
		} else {
			environment = cclconfig.environment;
		}
		
		// Copy Environment
		if (environment) {
			for (i in ENVIRONMENTS[environment]) {
				_config[i] = ENVIRONMENTS[environment][i];
			}
		}

		// Configuration from cclconfig
		for(i in window.cclconfig) {
			_config[i] = window.cclconfig[i];
		}
				
		// Configuration from query
		element = document.getElementById(_id + "_prompt");
		if(typeof element !== "undefined") {
			
		}
		
		// Console Workaround
		if(typeof window.console !== "object") 			{ window.console = {}; }
		if(typeof window.console.log !== "function") 	{ window.console.log = function () {}; };
		if(typeof window.console.info !== "function") 	{ window.console.info = function () {}; };
		if(typeof window.console.debug !== "function") 	{ window.console.debug = function () {}; };
		if(typeof window.console.warn !== "function") 	{ window.console.warn = function () {}; };
		if(typeof window.console.error !== "function")	{ window.console.error = function () {}; };
		
		// Blank Data
		if(typeof _config.data !== "object") {
			_config.data = {"prompt": null, "inline": null, "slider": null, "sms": null};
		}
		if(typeof _config.html !== "object") {
			_config.html = {"prompt": null, "slider": null};
		}
		
		// Validate
		_verified = true;
		for(var j = 0; j < REQUIRED.length; j++) {
			if(typeof _config[REQUIRED[j]] === "undefined" || (!_config[REQUIRED[j]] && REQUIRED[j] != "log") ) {
				_verified = false;
			}
		}
	}());
	
	if(!_verified) {
		if(typeof console !== "undefined" && typeof console.error !== "undefined") {
			console.error("C: Invalid Configuration. Aborting.");
		}
				
		return;
	}
		
	if(_config.log) { console.info("C: Configuration", _config); }
		
	// Internet Explorer Workarounds
	var browser = navigator.userAgent;
		
	if (browser.indexOf("MSIE") > 1 && parseInt(browser.substr(browser.indexOf("MSIE")+5, 5)) <= 7) {
		console.warn("C: Internet Explorer 7 (or below). Won't load.");
		return;
	}
	
	// Retrieve / Set Cookies
	// console.error(_config.site, cookie);
	
	(function() {
		var original = cookie.get("ccloriginal" + _config.site);
		
		if(!original) {
			_original = document.referrer;
			cookie.set("ccloriginal" + _config.site, _original);
		} else {
			_original = decodeURIComponent(original);
		}
	})();

	// Check for window events (like the events from iframes)
	(function() {
		var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
		var eventer = window[eventMethod];
		var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

		// Listen to message from child window
		eventer(messageEvent,function(e) {
			if (e.data) {
				if (e.data.type == 'ccl-pending-messages') {
					var pendingMessages = e.data.value;
					if (pendingMessages > 0) {
						document.title = '(' + pendingMessages + ') New Chat Message!';
					} else {
						document.title = _lastPageTitle;
					}
				}
			}
		},false);
	}()); 
	
	(function() {
		var landing = cookie.get("ccllanding" + _config.site);
		
		if(!landing) {
			_landing = document.location.origin + document.location.pathname + document.location.search;
			cookie.set("ccllanding" + _config.site, _landing);
		} else {
			_landing = decodeURIComponent(landing);
		}
	})();
	
	(function() {
		var decision = cookie.get("ccldecision" + _config.site);
				
		if(decision == null) {
			_decision = false;
		} else {
			_decision = true;
		}
	})();

	// Start visitor detector
	(function() {
		var vtKey = 'ccl-visitor-tracker-data';
		
		onVisitorRegisterSuccessful = function () {
			// console.log('Visitor registered correctly');
			var _visitorTrackedData = {
				createdAt: (new Date()).getTime()
			}
			localStorage.setItem(vtKey, JSON.stringify(_visitorTrackedData));
		}

		var site = window.cclconfig.site;
		// console.log('Checking if is a new visitor');
		var isNewVisitor = true;

		var _visitorTrackedData = localStorage.getItem(vtKey);
		var hasPreviousData = _visitorTrackedData != null;
		if (hasPreviousData) {
			var visitorTrackedData = JSON.parse(_visitorTrackedData);
			if (visitorTrackedData.createdAt) {
				// console.log('Visitor has previous data');
				var _createdAt = Number(visitorTrackedData.createdAt);
				var threeDaysInMiliseconds = 3 * 86400000;
				var expireAt = _createdAt + threeDaysInMiliseconds; 
				var now = (new Date()).getTime();
				if (now > expireAt) {
					// console.log('Previous data has expired...');
					localStorage.setItem(vtKey, null);
				} else {
					// console.log('Previous data has not expired');
					isNewVisitor = false;
				}
			}
		}
		if (!isNewVisitor) {
			// console.log('Not a new visitor. Exiting...');
		} else {
			var url = window.cclconfig.platformHost + '/site/' + window.cclconfig.site + '/visitors/'
			// console.log('No visitor data found');
			// console.log('Registering new visitor');

			var xhr = new XMLHttpRequest();
			xhr.open("POST", url, true);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.send(JSON.stringify({
				page: window.location.href,
				referrer: document.referrer
			}));
			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200 ) {
						onVisitorRegisterSuccessful();
					} else {
						// console.log('Visitor register has failed...');
					}
				}
			}
		}
	})();
	
	// Google AdWords Click ID
	(function() {		
		var gclid = getParameterByName('gclid');
		
		if(gclid) {
			_ga_gclid = gclid;
			cookie.set("cclgclid" + _config.site, gclid);
		} else {
			gclid = cookie.get("cclgclid" + _config.site);
			
			if(gclid) {
				_ga_gclid = gclid;
			}
		}		
	})();
	
	// Google Analytics Tracker (naive)
	function retrieveGoogleAnalyticsTracker(strict) {
		if(typeof strict == 'undefiend') {
			strict = false;
		}
		
		// Check for Tracking Objects
		if(typeof window.ga === 'undefined') {
			if(_config.log) { console.log("C:", "No GA") }
			return null;
		}
				
		var search = null;
				
		try {
			if(_config.integrations.ga.tid) {
				search = _config.integrations.ga.tid;
				if(_config.log) { console.log("C:", "GA Integration: ", search) }
			} else {
				if(_config.log) { console.log("C:", "No GA Integration Specified") }
			}
		} catch (err) {
			if(_config.log) { console.log("C:", "No GA Integration Specified", err) }
		}
		
		// If there's no defined tid and we're in strict mode, return null 
		// immediately
		if(strict && !search) {
			return null;
		}
		
		try {
			// Fetch All Trackers
			var trackers = ga.getAll();
			
			// Search Trackers
			 for(var i in trackers) {
				if(trackers[i].get('trackingId') == search) {
					if(_config.log) { console.log("C:", "Found Matching Tracker"); }
					return trackers[i];
				}
			}
			
			if(!strict) {
				if(_config.log) { console.log("C:", "No GA Integration Matches, Returning First") }
				return trackers[i];
			} else {
				if(_config.log) { console.log("C:", "No GA Integration Matches, Not Returning") }
			}
		} catch (err) {
			console.error(err);
		}
	}
		
	// Load Google Analytics Client Tracking ID
	function retrieveGoogleAnalyticsClientId() {
		if(_ga_cid) {
			return;
		}
		
		if(typeof window.ga !== 'undefined') {
			try {
				_ga_cid = ga.getAll()[0].get('clientId');
				if(_config.log) { console.log("C:", "Retrieved GA CID:", _ga_cid); }
			} catch (err) {
				if(_config.log) { console.warn('C: Error Retrieving GA CID', err); };
			}
		}
	}
	
	// Attempt to load GA CID Immediately
	retrieveGoogleAnalyticsClientId();

	function createToken(size) {
		if (size === undefined) {
			size = 16;
		}
		
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for(var i = 0; i < size; i++)
			text += possible.charAt(Math.floor(Math.random() * possible.length));

		return text;
	};

	function start() {
		// Fire Start Hook
		if(typeof window.cclhook.onStart !== 'undefined') {
			window.cclhook.onStart();
		}
		
		// Create Modal Element
		var element = document.createElement("div");
		element.id = _id + "_container";
		element.style.display = "none";
		element.innerHTML = '<div id="' + _id + '" style="display: none;"></div><div id="' + _id + '_container_slider" style="display: none;"></div>';
		
		// Insert Modal Element at VERY Top
		var body = document.getElementsByTagName("body")[0];
		body.insertBefore(element, body.firstChild);

		var url = _config["base"] + "/chat/init/" + _config.site + "/prompt";
		
		if(_config.log) { console.log("C:", url); }
		
		var successPrompt = function(response) {			    
			if (!response.show) {
				return;
			}
			
			if(_config.log) { console.log("C: Retrieved Initialization Data (Prompt)"); }
						
			setTimeout(function () {loadPrompt(response);}, response.delay);
		};
		
		var successSlider = function(response) {
			if (!response.show) {
				return;
			}
			
			if(_config.log) { console.log("C: Retrieved Initialization Data (Slider)"); }
						
			setTimeout(function () {loadSlider(response);}, response.delay);
		};
				
		// Load CSS
		if(_config.css) {
			if(_config.log) { console.log("C: Loading CSS"); }
			
			// Load CSS
			for (var i = 0; i < _config.css.length;  i++) {
				var element = document.createElement("link");
				element.type = "text/css";
				element.rel = "stylesheet";
				element.href = _config.css[i] + "?r=" + createToken();
				
				document.getElementsByTagName("head")[0].appendChild(element);
			}

			if (window.cclconfig.useIframes) {
				// Load default styles for iframes
				var ccsDefaultStyles = document.createElement("link");
				ccsDefaultStyles.type = "text/css";
				ccsDefaultStyles.rel = "stylesheet";

				var host = window.cclconfig.platformHost;
				ccsDefaultStyles.href = host + "/w/static/css/ccl-iframes-integration.css" + "?r=" + createToken();
				
				document.getElementsByTagName("head")[0].appendChild(ccsDefaultStyles);
			}
			
		} else {
			if(_config.log) { console.error("C: No CSS Configured!?"); }
		}

		// Load custom Javascript
		if (_config.js) {
			if (_config.log) console.log("C: Loading JS");

			for (var i = 0; i < _config.js.length; i++) {
				var element = document.createElement("script");
				element.src = _config.js[i] + "?r=" + createToken();

				document.body.appendChild(element);
			}
		}
		
		// Load Modal
		if(_config.data.prompt) {
			successPrompt(_config.data.prompt);
		}
		
		// Load Slider
		if(_config.data.slider) {
			successSlider(_config.data.slider);
		}
		
		// Fire StartFinished Hook
		if(typeof window.cclhook.onStartFinished !== 'undefined') {
			window.cclhook.onStartFinished();
		}

		if (window.cclconfig.useIframes == true && localStorage.getItem('ccl-open-frame') == 'true') {
			window.ccliface.openManual();
		}
	};
	
	function yes(location, duration, source) {	    
		if(!_ga_cid && typeof window.ga !== 'undefined') {
			retrieveGoogleAnalyticsClientId();
		}
		
		if(_config.log) { console.log("C: Open"); }
		
		// Open Immediately, do not delay for Google Analytics
		_yes(location, duration, source);	
	};
	
	function _yes(location, duration, source) {
		if(duration === null) {
			if(_config.data.prompt) {
				duration = _config.data.prompt.remember_duration;
			}
		}
		
		_opened = true;
		
		var meta = "?location=" + encodeURIComponent(document.location.href)
			+ "&referrer=" + encodeURIComponent(document.referrer)
			+ "&landing=" + encodeURIComponent(_landing)
			+ "&original=" + encodeURIComponent(_original);
				
		if(_ga_cid) {
			meta = meta + "&ga_cid=" + encodeURIComponent(_ga_cid);
		}

		if(_ga_gclid) {
			meta = meta + "&ga_gclid=" + encodeURIComponent(_ga_gclid);
		}

		if(_extras) {
			for(var key in _extras) {
				meta = meta + "&extra." + key + "=" + encodeURIComponent(_extras[key]);
			}
		}
		
		var tracker = retrieveGoogleAnalyticsTracker(true);
				
		if(source == "sms") {
			if(!isSmsEnabled()) {
				return;
			}
			
			// Fire ChatOpenSms Hook
			if(typeof window.cclhook.onChatOpenSms !== 'undefined') {
				window.cclhook.onChatOpenSms();
			}
			
			// Fire Google Analytics chat_open_sms event
			if(tracker) {
				if(_config.log) { console.info("C: Sending chat_open_sms event."); }
				tracker.send('event', 'chat', 'chat_open_sms');
			}
			
			// Track Against Platform
			var xhr = new XMLHttpRequest();
			xhr.open('GET', _config.data.sms.track + meta);
			xhr.send();
			
			// Open SMS
			if(_config.log) { console.info("C: Opening: " + location); }
			window.location = location;
		} else {
			// Open Chat
			var name = "ccl_" + _config.site;

			if (window.cclconfig.useIframes == true) {
				onToggleChatFrame();
			} else {
				var windowSize = {
					width: 450,
					height: 603
				 };
				 var windowLocation = {
				   left:  (screen.width - windowSize.width - 50),
				   top:  (screen.height - windowSize.height - 220)
				 };
				window.open(location + meta, name, 'width=450,height=600,toolbar=0,menubar=0,location=0,status=0,scrollbars=1,menubar=0,toolbar=0,resizable=1,left='+ windowLocation.left +',top=' + windowLocation.top);
			}

			document.getElementById(_id).style.display = "none";
			
			// Fire ChatOpen Hook
			if(typeof window.cclhook.onChatOpen !== 'undefined') {
				window.cclhook.onChatOpen();
			}
			
			// Fire Google Analytics chat_open event
			if(tracker) {
				if(_config.log) { console.info("C: Sending chat_open event."); }
				tracker.send('event', 'chat', 'chat_open');
			}
		}
		
		// Track the open, to avoid prompting again for the duration, this is only
		// used for the prompt style.
		if(duration !== 0) {
			cookie.set("ccldecision" + _config.site, "1", duration);
		}
	};
	
	function no(duration) {
		if(duration === null) {
			if(_config.data.prompt) {
				duration = _config.data.prompt.remember_duration;
			}
		}
		
		document.getElementById(_id).style.display = "none";
		
		if(duration !== 0) {
			cookie.set("ccldecision" + _config.site, "0", duration);
		}
	};
	
	function findElementById(parent, id) {
		// Compatibility for Internet Explorer
		var children = parent.children;
		var result = null;
		
		for(var i = 0; i < children.length; i++) {
			if(children[i].id == id) {
				return children[i];
			}
			
			if(children[i].hasChildNodes()) {
				result = findElementById(children[i], id);
				if(result) {
					return result;
				}
			}			
		}
	};

	function loadPrompt(data) {
		// If the chat has already been opened this session, *and* repeating is 
		// off, then don't show the modal.
		if(_opened && !data.repeat) {
			return;
		}
		
		// If the visitor has ever made a decision, *and* remember is on, 
		// then don't show the modal.
		if(_decision && data.remember) {
			return;
		}
		
		// If using a mobile device, skip the modal prompt.
		if(isMobileDevice()) {
			return;
		}
		
		var location = data.location;
		var url = _config["base"] + "/i/remote.modal.html";
		var success = function (html) {
			// Check Decision Again
			if(cookie.get("ccldecision" + _config.site)) {
				return;
			}
			
			document.getElementById(_id).innerHTML = html;			
			
			var element = document.getElementById(_id + "_modal");
			if(!element) {
				return;
			}			

			document.getElementById(_id + "_no").onclick = function () {
				no(data.remember_duration);
			};
			
			document.getElementById(_id + "_yes").onclick = function () {
				yes(location, data.remember_duration);
			};
				
			document.getElementById(_id + "_header").src = data.image;
						
			setTimeout(function () {
				document.getElementById(_id).style.display = "block";
				element.style.display = "block";
			}, 500);
		};
		
		if(_config.html.prompt) {
			success(_config.html.prompt);
			return;
		}
	};
	
	function loadSlider(data) {	    
		// If the chat has already been opened this session, *and* repeating is 
		// off, then don't show the modal.
		if(_opened && !data.repeat) {
			return;
		}
		
		var location = data.location;
		var url = _config["base"] + "/i/remote.slider.html";
		var success = function (html) {
			// Load Slider Container
			var element = document.getElementById(_id + "_container_slider");
						
			// Show Container
			element.innerHTML = html;          
			element.style.display = "block";
			
			// CSS media query is responsible for displaying small vs. large slider
			
			// Fetch Slider Content
			var sliderNormal = document.getElementById(_id + "_slider");
			if(!sliderNormal) {
				// TODO: Error Handling
				return;
			}
			
			// High Resolution Slider
			document.getElementById(_id + "_slider_no").onclick = function () {
				document.getElementById(_id + "_container_slider").style.display = "none";
				document.getElementById(_id + "_container_slider").className = "slider_closed";
				no(null, 0);
			};
			
			document.getElementById(_id + "_slider_yes").onclick = function () {
				yes(location, null);
			};
						
			// Load High Resolution Slider Background
			var background = data.image;
			document.getElementById(_id + "_slider").style.backgroundImage = "url('" + background + "')";
			
			// Low Resolution Slider
			var sliderSmall = document.getElementById(_id + "_slider_small");
			
			sliderSmall.onclick = function () {
				yes(location, null);
			};
			
			// Adjust Left Padding
			sliderSmall.style.marginLeft = - (sliderSmall.getBoundingClientRect().left + document.body.getBoundingClientRect().left)  + 'px';
			
			// Animate
			setTimeout(function(){
				document.getElementById(_id + "_slider_small").style.bottom = 0;
			}, 3000);

			// Animate main slider to drop if previous page has a different hostname
			var tmp = document.createElement("a"); tmp.href = document.referrer;
			if (document.referrer && tmp.hostname == window.location.hostname) {
				// If same hostname, animate it up from below the screen
				document.getElementById(_id + "_slider").className = document.getElementById(_id + "_slider").className + " below";
			}
			setTimeout(function(){
				document.getElementById(_id + "_slider").className = document.getElementById(_id + "_slider").className + " transition delay3000";
			}, 3000);
		};
		
		if(_config.html.slider) {
			success(_config.html.slider);
			return;
		}
	};
	
	function openManual(source) {
		if(!source) {
			source = "inline";
		}
		
		if(!_config.data[source]) {
			return;
		}
		
		yes(_config.data[source].location, null, source);
	}
	
	function isMobileDevice() {
		// Naive Browser Identification
		var ua = navigator.userAgent.toLowerCase();
		return (ua.indexOf("android") > -1 || ua.indexOf("iphone") > -1) && ua.indexOf("mobile") > -1;
	}
	
	function isSmsEnabled(checkDevice) {
		if(typeof checkDevice === 'undefined') {
			checkDevice = true;
		}
		
		// Require a target phone number
		if(!_config.data.sms.show) {
			return false;
		}
		
		if(checkDevice) {
			return isMobileDevice();
		}
		
		return true;
	}
	
	function extrasSet(key, value) {
		if (!(typeof key === 'string' || key instanceof String) 
			|| encodeURIComponent(key).length > 255 || encodeURIComponent(key).length == 0) {
			throw "extras key requires string of (encoded) 255 bytes or less";
		}
		
		if (!(typeof value === 'string' || value instanceof String) 
			|| encodeURIComponent(value).length > 255 || encodeURIComponent(value).length == 0) {
			 throw "extras value requires string of (encoded) 255 bytes or less";
		}
				
		if (_extras.length > 6) {
			throw "extras limtied to 6 entries";
		}
		
		_extras[key] = value;
	}
	
	function extrasGet(key) {
		return _extras[key];
	}
	
	function extrasList() {
		var copy = {};
		for(var key in _extras) {
			copy[key] = _extras[key];
		}
		
		return copy;
	}
	
	function extrasDelete(key) {
		delete _extras[key];
	}
	
	function extrasClear() {
		_extras = {};
	}

	// if useIframes is on, append the iframe container
	if (window.cclconfig.useIframes == true) {

		var meta = "?location=" + encodeURIComponent(document.location.href)
			+ "&referrer=" + encodeURIComponent(document.referrer)
			+ "&landing=" + encodeURIComponent(_landing)
			+ "&original=" + encodeURIComponent(_original);

		var cclAppContainer = document.createElement('div');
		var location = _config.data.prompt.location;
		location = location.replace("/w/chat/", "/w/chat/?shouldKeepConnection=true");
		
		var closeButtonSvg = 
			'<svg class="ccl-icon" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M12 10.586L6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 0 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 1 0-1.414-1.414L12 10.586z" fill="currentColor"></path></svg>';

		cclAppContainer.innerHTML =
		'<div class="ccl-chat-frame-container">' +
			'<div class="ccl-button-close">' + closeButtonSvg + '</div>' +
			'<iframe id="chatIFrame"'+ 
			'</iframe>' +
		'</div>';
		
		window.cclconfig.iframeUrl = location + meta;
		cclAppContainer.classList.add('ccl-app-container');
		cclAppContainer.style.display = "none";

		window.setTimeout(function () {
			cclAppContainer.style.display = "initial";
		}, 500);

		document.body.appendChild(cclAppContainer);
		document.querySelector('.ccl-button-close').addEventListener('click', function () { window.ccliface.openManual()});
	}

    function onToggleChatFrame() {
        var isOpen = document.querySelector('.ccl-app-container').classList.contains('ccl-is-open');
        if (isOpen) {
            onCloseChatFrame();
        } else {
            onOpenChatFrame();
        }
    }

    function onOpenChatFrame() {
		localStorage.setItem('ccl-open-frame', 'true');
		var iframeEl = document.getElementById('chatIFrame');
		if (iframeEl && !iframeEl.src) {
			var url = window.cclconfig.iframeUrl;
			iframeEl.src = url;
		}
        document.querySelector('html').classList.add('ccl-overflow-hidden');
		document.querySelector('.ccl-chat-frame-container').style.display = 'initial';
		
        window.setTimeout(function() {
			document.querySelector('.ccl-app-container').classList.add('ccl-is-open');
        }, 50);
    }

    function onCloseChatFrame() {
        localStorage.removeItem('ccl-open-frame');
        document.querySelector('html').classList.remove('ccl-overflow-hidden');
		document.querySelector('.ccl-app-container').classList.remove('ccl-is-open');
        window.setTimeout(function() {
			document.querySelector('.ccl-chat-frame-container').style.display = 'none';
        }, 250);
    }

	// Setup Interface
	window.ccliface.openManual = openManual;
	window.ccliface.isMobileDevice = isMobileDevice;
	window.ccliface.isSmsEnabled = isSmsEnabled;
	window.ccliface.extras = { "set": extrasSet, "get": extrasGet, 
		"delete": extrasDelete, "list": extrasList, "clear": extrasClear }
	
	start();

	elementsScriptUrl = window.cclconfig.elementsScriptUrl;
	if (elementsScriptUrl) {
		var s = document.createElement("script");
		s.type = "text/javascript";
		s.src = elementsScriptUrl;
		document.body.appendChild(s);
	}
}());
