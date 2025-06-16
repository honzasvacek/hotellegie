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

// Function to get guest count - works with both input and span elements
function getGuestCount(elementId) {
  const element = document.getElementById(elementId);
  // Check if it's an input element (old form) or span element (new form)
  return element.tagName.toLowerCase() === 'input' ? element.value : element.textContent;
}

// Function to adjust guest counts (only needed for new form with +/- buttons)
function adjustGuests(type, change) {
  const element = document.getElementById(type);
  // Only works with span elements (new form)
  if (element.tagName.toLowerCase() !== 'span') return;
  
  let currentValue = parseInt(element.textContent);
  let newValue = currentValue + change;
  
  // Set minimum values
  if (type === 'adults' && newValue < 1) {
    newValue = 1;
  } else if ((type === 'children' || type === 'infants') && newValue < 0) {
    newValue = 0;
  }
  
  // Set maximum values
  if (type === 'adults' && newValue > 10) {
    newValue = 10;
  } else if (type === 'children' && newValue > 10) {
    newValue = 10;
  } else if (type === 'infants' && newValue > 5) {
    newValue = 5;
  }
  
  element.textContent = newValue;
}

arrivalInput.addEventListener('change', ensureEndDateAfterArrival);

document.getElementById('hotelBookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const arrivalDate = arrivalInput.value;
  const endDate = endInput.value;
  const nights = (new Date(endDate) - new Date(arrivalDate)) / (1000 * 60 * 60 * 24);
  
  // Universal method to get guest counts - works with both forms
  const adults = getGuestCount('adults');
  const children = getGuestCount('children');
  const infants = getGuestCount('infants');
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

  /* Index JS */
  document.addEventListener("DOMContentLoaded", () => {
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
});


document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
});

