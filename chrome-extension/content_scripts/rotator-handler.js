function handleRotatableImages(container) {
  container.classList.remove('RotatableImages--rotation-active');

  container.addEventListener('mouseenter', () => {
    container.classList.add('RotatableImages--rotation-active');
  });

  container.addEventListener('mouseleave', () => {
    container.classList.remove('RotatableImages--rotation-active');
  });
}

function initRotatableObserver() {
  // Direkt prüfen, ob schon Elemente da sind
  document.querySelectorAll('.RotatableImages').forEach(el => handleRotatableImages(el));

  // Beobachtet neue Inhalte im Body
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1) {
          if (node.classList?.contains('RotatableImages')) {
            handleRotatableImages(node);
          } else {
            // Auch innerhalb neu hinzugefügter Knoten prüfen
            node.querySelectorAll?.('.RotatableImages').forEach(el => handleRotatableImages(el));
          }
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

initRotatableObserver();
