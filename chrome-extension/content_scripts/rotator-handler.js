function handleRotatableImages(container) {
  // Nur einmal behandeln
  if (container.dataset._rotationHandled === "true") return;

  container.classList.remove('RotatableImages--rotation-active');

  container.addEventListener('mouseenter', () => {
    container.classList.add('RotatableImages--rotation-active');
  });

  container.addEventListener('mouseleave', () => {
    container.classList.remove('RotatableImages--rotation-active');
  });

  // Merken, dass dieses Element schon verarbeitet wurde
  container.dataset._rotationHandled = "true";
}

function initRotatableObserver() {
  // Direkt prüfen, ob schon Elemente da sind
  document.querySelectorAll('.RotatableImages').forEach(handleRotatableImages);

  // Beobachtet neue Inhalte im Body
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType !== 1) return;

        // Direktes Match
        if (node.classList?.contains('RotatableImages')) {
          handleRotatableImages(node);
        }

        // Alle verschachtelten Matches
        node.querySelectorAll?.('.RotatableImages').forEach(handleRotatableImages);
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

// Wenn DOM vollständig geladen ist, starten
if (document.readyState === "loading") {
  document.addEventListener('DOMContentLoaded', initRotatableObserver);
} else {
  initRotatableObserver();
}
