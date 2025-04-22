chrome.storage.local.get(['pageWidth', 'pageUnit'], (result) => {
  if (result.pageWidth && result.pageUnit) {
    const widthValue = parseInt(result.pageWidth, 10);
    if (widthValue < 1850) {
      const width = result.pageWidth + result.pageUnit;
      const style = document.createElement('style');
      style.innerHTML = `
        .theme-dark#app,
		[data-orion-skin] .a-grid__inside{
          width: ${width} !important;
        }
		#react .platform-bar{
			border-bottom: 0px;
		}
		[data-orion-skin] .a-grid__inside {
			padding-inline: initial;
		}
      `;
      document.head.appendChild(style);
    } else {
      const style = document.createElement('style');
      style.innerHTML = `
        .theme-dark#app,
		[data-orion-skin] .a-grid__inside {
          width: 100% !important;
        }
		#react .platform-bar{
			border-bottom: 0px;
		}
      `;
      document.head.appendChild(style);
    }
  } else {
    const style = document.createElement('style');
    style.innerHTML = `
		.theme-dark#app,
			[data-orion-skin] .a-grid__inside {
			width: 100% !important;
		}
		#react .platform-bar{
			border-bottom: 0px;
		}
    `;
    document.head.appendChild(style);
  }
});
