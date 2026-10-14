document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const iconButton = document.querySelector('button.md-header__button.md-icon');
    if (iconButton) {
      const lang = window.location.pathname.split('/')[1] || 'en';
      const icons = {
        en: '/assets/flag-icons/gb.svg.png',
        cs: '/assets/flag-icons/cz.svg.png',
        de: '/assets/flag-icons/de.svg.png'
      };
      const flagSrc = icons[lang] || '/assets/flag-icons/gb.svg.png';

      iconButton.innerHTML = `<img src="${flagSrc}" alt="${lang}" style="height: 1.2rem; vertical-align: middle;" />`;
    }
  }, 100);
});
