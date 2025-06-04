const arrivalInput = document.getElementById('arrivalDate');
  const endInput = document.getElementById('endDate');

  function formatDate(date) {
    return date.toISOString().split('T')[0]; // yyyy-mm-dd
  }

  function setDefaultDates() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(today.getDate() + 2);

    arrivalInput.value = formatDate(tomorrow);
    endInput.value = formatDate(dayAfterTomorrow);
  }

  function ensureEndDateAfterArrival() {
    const arrivalDate = new Date(arrivalInput.value);
    const endDate = new Date(endInput.value);

    if (arrivalDate >= endDate) {
      const newEndDate = new Date(arrivalDate);
      newEndDate.setDate(arrivalDate.getDate() + 1);
      endInput.value = formatDate(newEndDate);
    }
  }

  arrivalInput.addEventListener('change', ensureEndDateAfterArrival);

  document.getElementById('hotelBookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const arrivalDate = arrivalInput.value;
    const endDate = endInput.value;
    const nights = (new Date(endDate) - new Date(arrivalDate)) / (1000 * 60 * 60 * 24);

    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;
    const infants = document.getElementById('infants').value;
    const promoCode = document.getElementById('promoCode').value;

    const baseUrl = 'https://www.secure-hotel-booking.com/d-edge/Hotel-Claris/2V82/cs-CZ/RoomSelection';
    let queryParams = `?language=cs&arrivalDate=${arrivalDate}&nights=${nights}&_ga=&guestCountSelector=ReadOnly&crossSell=false`;
    queryParams += `&selectedAdultCount=${adults}&selectedChildCount=${children}&selectedInfantCount=${infants}`;
    if (promoCode.trim()) {
      queryParams += `&promoCode=${encodeURIComponent(promoCode.trim())}`;
    }

    window.open(baseUrl + queryParams, '_blank');
  });

  setDefaultDates(); // Set defaults on page load