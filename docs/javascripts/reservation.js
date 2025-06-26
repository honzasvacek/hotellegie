  // Utility function to format date as yyyy-mm-dd
  function formatDate(date) {
    return date.toISOString().split('T')[0];
  }

  // Set default dates for all booking forms
  function setDefaultDates() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAfter = new Date();
    dayAfter.setDate(dayAfter.getDate() + 2);

    document.querySelectorAll('#arrivalDate').forEach(input => {
      input.value = formatDate(tomorrow);
    });
    document.querySelectorAll('#endDate').forEach(input => {
      input.value = formatDate(dayAfter);
    });
  }

  // Adjust end date if arrival date is same/later
  function ensureEndDateAfterArrival(input) {
    const form = input.closest('form');
    const arrivalInput = form.querySelector('#arrivalDate');
    const endInput = form.querySelector('#endDate');

    const arrivalDate = new Date(arrivalInput.value);
    const endDate = new Date(endInput.value);

    if (arrivalDate >= endDate) {
      const newEndDate = new Date(arrivalDate);
      newEndDate.setDate(arrivalDate.getDate() + 1);
      endInput.value = formatDate(newEndDate);
    }
  }

  // Adjust guest count for +/- buttons (used in hero form)
  function adjustGuests(type, change) {
    const element = document.getElementById(type);
    if (!element || element.tagName.toLowerCase() !== 'span') return;

    let currentValue = parseInt(element.textContent);
    let newValue = currentValue + change;

    if (type === 'adults') newValue = Math.max(1, Math.min(newValue, 10));
    if (type === 'children') newValue = Math.max(0, Math.min(newValue, 10));
    if (type === 'infants') newValue = Math.max(0, Math.min(newValue, 5));

    element.textContent = newValue;
  }

  // Unified submit handler for both forms
  function setupFormHandlers() {
    document.querySelectorAll('#hotelBookingForm').forEach(form => {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formEl = e.target;

        const arrivalInput = formEl.querySelector('#arrivalDate');
        const endInput = formEl.querySelector('#endDate');
        const promoCodeInput = formEl.querySelector('#promoCode');

        const arrivalDate = arrivalInput.value;
        const endDate = endInput.value;

        const nights = (new Date(endDate) - new Date(arrivalDate)) / (1000 * 60 * 60 * 24);

        function getGuestCountScoped(selector) {
          const el = formEl.querySelector(selector);
          return el ? (el.tagName.toLowerCase() === 'input' ? el.value : el.textContent) : 0;
        }

        const adults = getGuestCountScoped('#adults');
        const children = getGuestCountScoped('#children');
        const infants = getGuestCountScoped('#infants');
        const promoCode = promoCodeInput ? promoCodeInput.value : '';

        const baseUrl = 'https://www.secure-hotel-booking.com/d-edge/Hotel-Claris/2V82/cs-CZ/RoomSelection';
        let queryParams = `?language=cs&arrivalDate=${arrivalDate}&nights=${nights}&_ga=&guestCountSelector=ReadOnly&crossSell=false`;
        queryParams += `&selectedAdultCount=${adults}&selectedChildCount=${children}&selectedInfantCount=${infants}`;

        if (promoCode.trim()) {
          queryParams += `&promoCode=${encodeURIComponent(promoCode.trim())}`;
        }

        window.open(baseUrl + queryParams, '_blank');
      });

      // Attach change listener to ensure end date is valid
      const arrivalInput = form.querySelector('#arrivalDate');
      if (arrivalInput) {
        arrivalInput.addEventListener('change', () => ensureEndDateAfterArrival(arrivalInput));
      }
    });
  }

  // Scroll animation (optional visual effect)
  function setupScrollAnimations() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }

  // Init on DOM ready
  document.addEventListener("DOMContentLoaded", () => {
    setDefaultDates();
    setupFormHandlers();
    setupScrollAnimations();
  });

  // Expose adjustGuests for +/- buttons
  window.adjustGuests = adjustGuests;

/* mobile smooth scroll */
document.querySelector('.mobile-reserve-btn')?.addEventListener('click', function(e) {
  e.preventDefault();
  const target = document.getElementById('booking-title');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
});