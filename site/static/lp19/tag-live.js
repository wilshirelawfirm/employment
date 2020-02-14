(function(networkId) {
var cacheLifetimeDays = 30;

var customDataWaitForConfig = [
  { on: function() { return Invoca.Client.parseCustomDataField("calling_page", "Last", "JavascriptDataLayer", "location.href"); }, paramName: "calling_page", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("gclid", "Last", "URLParam", ""); }, paramName: "gclid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("google_analytics_id", "Last", "JavascriptDataLayer", "ga.getAll()[0].get('trackingId')"); }, paramName: "google_analytics_id", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("g_cid", "Last", "Cookie", "g_cid"); }, paramName: "g_cid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("msclkid", "Last", "URLParam", ""); }, paramName: "msclkid", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_adgroup", "Last", "URLParam", ""); }, paramName: "utm_adgroup", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_campaign", "Last", "URLParam", ""); }, paramName: "utm_campaign", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_content", "Last", "URLParam", ""); }, paramName: "utm_content", fallbackValue: null },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_medium", "Last", "URLParam", ""); }, paramName: "utm_medium", fallbackValue: function() { return Invoca.PNAPI.currentPageSettings.poolParams.utm_medium || null; } },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_source", "Last", "URLParam", ""); }, paramName: "utm_source", fallbackValue: function() { return Invoca.PNAPI.currentPageSettings.poolParams.utm_source || null; } },
  { on: function() { return Invoca.Client.parseCustomDataField("utm_term", "Last", "URLParam", ""); }, paramName: "utm_term", fallbackValue: null }
];

var defaultCampaignId = "487835";

var destinationSettings = {
  paramName: null
};

var numbersToReplace = {
  "+18883190743": "487835",
  "+18553350244": "487835",
  "+18555969347": "487835",
  "+18889890558": "487835",
  "+18669719192": "487835",
  "+18442627213": "487835",
  "+18005227274": "487835"
};

var organicSources = true;

var reRunAfter = 2000;

var requiredParams = null;

var resetCacheOn = [];

var waitFor = 0;

var customCodeIsSet = (function() {
  Invoca.Client.customCode = function(options) {
   try {

options.integrations = {  
  googleAnalytics: true
  
};
return options;

   } catch (e) {
     Invoca.PNAPI.warn("Custom code block failed: " + e.message);
   }
  };

  return true;
})();

var generatedOptions = {
  autoSwap:            false,
  cookieDays:          cacheLifetimeDays,
  country:             "US",
  defaultCampaignId:   defaultCampaignId,
  destinationSettings: destinationSettings,
  disableUrlParams:    [],
  doNotSwap:           [],
  maxWaitFor:          waitFor,
  networkId:           networkId || null,
  numberToReplace:     numbersToReplace,
  organicSources:      organicSources,
  poolParams:          {},
  reRunAfter:          reRunAfter,
  requiredParams:      requiredParams,
  resetCacheOn:        resetCacheOn,
  waitForData:         customDataWaitForConfig
};

Invoca.Client.startFromWizard(generatedOptions);

})(1695);
