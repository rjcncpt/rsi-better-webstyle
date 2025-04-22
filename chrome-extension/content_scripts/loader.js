(function() {
  var namespace = 'SpectrumDark';
  var styles = [
    'web_resources/SpectrumDark.css',
    'web_resources/Newgallery.css',
    'web_resources/HangarXPLOR.css',
    'web_resources/DevTracker.css',
    'web_resources/rsi_website_neu.css'
  ];
  var scripts = [
    ''
  ];

  styles.forEach(function(style, i) {
    var styleURL = chrome.runtime.getURL(style);
    var link = document.createElement('link');
    link.id = namespace + '-css-' + i;
    link.rel = 'stylesheet';
    link.href = styleURL;
    document.body.appendChild(link);
  });

  var loadScript = function() {
    if (!scripts.length) return;
    var scriptURL = chrome.runtime.getURL(scripts.pop());
    var script = document.createElement('script');
    script.id = namespace + '-js-' + (scripts.length + 1);
    script.src = scriptURL;
    script.onload = loadScript;
    script.onreadystatechange = function() {
      if (this.readyState === 'complete') loadScript();
    };
    document.body.appendChild(script);
  };

  loadScript();
})();

