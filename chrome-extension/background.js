// background.js

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    chrome.tabs.create({ url: 'ui_resources/SpectrumDark.Settings.html' });
  }
});
