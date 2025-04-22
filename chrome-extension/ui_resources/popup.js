document.addEventListener('DOMContentLoaded', () => {
  const widthInput = document.getElementById('width');
  const unitSelect = document.getElementById('unit');
  const saveButton = document.getElementById('save');

  // Lade gespeicherte Einstellungen
  chrome.storage.local.get(['pageWidth', 'pageUnit'], (result) => {
    if (result.pageWidth && result.pageWidth < 1850) {
      widthInput.value = result.pageWidth;
    }
    if (result.pageUnit) {
      unitSelect.value = result.pageUnit;
    }
  });

  // Speichere neue Einstellungen und lade die Seite neu
  saveButton.addEventListener('click', () => {
    const pageWidth = widthInput.value;
    const pageUnit = unitSelect.value;
    if (pageWidth < 1850) {
      chrome.storage.local.set({ pageWidth: pageWidth, pageUnit: pageUnit }, () => {
        alert('Breite gespeichert: ' + pageWidth + pageUnit);
        // Aktuellen Tab neu laden
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.tabs.reload(tabs[0].id);
        });
      });
    } else {
      alert('Breite ist größer als 1850px. Einstellung bleibt auf 100%.');
    }
  });
});
