function setupLanguageFlag() {
  const formEl = document.querySelector('#hotelBookingForm');
  if (!formEl) return;

  const currentLang = formEl.getAttribute('data-lang').substring(0, 2).toLowerCase();

  const flags = {
    'cs': '/assets/flag-icons/cz.svg.png',
    'en': '/assets/flag-icons/gb.svg.png',
    'de': '/assets/flag-icons/de.svg.png'
  };

  if (!flags[currentLang]) return;

  const flagPath = document.querySelector('button.md-header__button.md-icon');
  
  if (flagPath) {
    const langButton = flagPath.closest('button');
    langButton.innerHTML = `<img src="${flags[currentLang]}" alt="${currentLang}" style="width: 44px; object-fit: contain;">`;
  }
}

document.addEventListener("DOMContentLoaded", setupLanguageFlag);