---
hide:
  - navigation
---

# **Rezervace**

## Vítejte v hotelu CLARIS!

Nabízíme ubytování kategorie *** ve dvoulůžkových a jednolůžkových pokojích!
<div id="bookingFormWrapper">
<div class="booking-form-container">
  <div class="promo-sticker">Use promocode PRAHAVIP5 for a 5% discount</div>
  <h2>Rezervace pokoje</h2>
  <form id="hotelBookingForm">
    <label for="arrivalDate">Arrival Date:</label>
    <input type="date" id="arrivalDate" name="arrivalDate" required><br>

    <label for="endDate">Departure Date:</label>
    <input type="date" id="endDate" name="endDate" required><br>

    <div class="inline-fields">
      <div class="form-group">
        <label for="adults">Adults</label>
        <input type="number" id="adults" name="selectedAdultCount" min="1" max="10" value="2" required>
      </div>
      <div class="form-group">
        <label for="children">Children</label>
        <input type="number" id="children" name="selectedChildCount" min="0" max="10" value="0">
      </div>
      <div class="form-group">
        <label for="infants">Infants</label>
        <input type="number" id="infants" name="selectedInfantCount" min="0" max="5" value="0">
      </div>
    </div>

    <label for="promoCode">Promo Code (optional):</label>
    <input type="text" id="promoCode" name="promoCode"><br>

    <input type="submit" value="Search Availability">
  </form>
</div>
</div>
Sledujte naši speciální nabídku a [rezervujte si pokoje pomocí rezervačního formuláře.](https://www.secure-hotel-booking.com/modification/Hotel-Claris/2V82/en-US)

<a href="/reservation-form" class="reservation-fab" title="Rezervace">Rezervuj nyní!</a>

Nebo nás kontaktujte na:

- 📞 **Telefon:** +420 775712882
- ✉️ **E-mail:** reservation@petrs.cz.

Těšíme se na Vaši návštěvu!

<script>
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
</script>
