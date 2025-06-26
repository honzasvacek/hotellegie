---
hide:
  - navigation
  - toc
---

# Domů 
<!-- START: Full-width Hero Banner -->
<div class="hero-banner">
  <div class="hero-content">
    <h1>Vítejte v hotelu Claris</h1>
    <p>Luxus • Komfort • Lokalita</p>
  </div>
  <div class="mobile-reserve-btn-wrapper">
    <a href="#hotelbookingform" class="mobile-reserve-btn">Rezervovat</a>
  </div>
  <form id="hotelBookingForm" class="reservation-bar">
            <div class="promo-sticker-bar">
              <span>&#9432; Použijte kód <strong>PRAHAVIP5</strong> pro 5% slevu</span>
            </div>
            <div class="res-item">
                <div class="date-container">
                    <input type="date" id="arrivalDate" name="arrivalDate" class="res-date" required/>
                </div>
                <span class="res-arrow">→</span>
                <div class="date-container">
                    <input type="date" id="endDate" name="endDate"  class="res-date" required/>
                </div>
            </div>

  <div class="res-divider"></div>

  <div class="res-item">
      <span class="res-label">Dospělé osoby</span>
      <div class="res-counter">
          <button type="button" onclick="adjustGuests('adults', -1)">−</button>
          <span id="adults" name="selectedAdultCount">1</span>
          <button type="button" onclick="adjustGuests('adults', 1)">+</button>
      </div>
  </div>

  <div class="res-counter-group">
      <span class="res-label">Děti</span>
      <div class="res-counter">
          <button type="button" onclick="adjustGuests('children', -1)">−</button>
          <span id="children" name="selectedChildCount">0</span>
          <button type="button" onclick="adjustGuests('children', 1)">+</button>
      </div>
  </div>

  <div class="res-counter-group">
      <span class="res-label">Kojenci</span>
      <div class="res-counter">
          <button type="button" onclick="adjustGuests('infants', -1)">−</button>
          <span id="infants" name="selectedInfantCount">0</span>
          <button type="button" onclick="adjustGuests('infants', 1)">+</button>
      </div>
  </div>

  <div class="res-divider"></div>

  <div class="res-item promo-input">
      <input type="text" id="promoCode" placeholder="Promokód" />
  </div>

  <button type="submit" class="res-book">REZERVOVAT ↗</button>
</form>
</div>
<!-- END: Full-width Hero Banner -->
<link rel="stylesheet" href="/hotelclaris/assets/stylesheets/index.css">

## Vítejte v hotelu CLARIS!

Nabízíme ubytování ve dvoulůžkových a jednolůžkových pokojích v kategorii standard a komfort!

<!-- START: Room Cards -->
<section class="featured-rooms-section">
  <div class="featured-room" onclick="location.href='02.rooms/#jednoluzkove-pokoje'">
    <img src="/hotelclaris/assets/fotky-hotelu/jednoluzko-komfort2.jpg" alt="Jednolůžkový apartmán">
    <div class="room-label">Jednolůžkové</div>
  </div>
  <div class="featured-room" onclick="location.href='02.rooms/#dvouluzkove-pokoje'">
    <img src="/hotelclaris/assets/fotky-hotelu/dvojluzko-2-komfort.jpg" alt="Dvoulůžkový apartmán">
    <div class="room-label">Dvoulůžkové</div>
  </div>
</section>
<!-- END: Room Cards -->

<div id="hotelbookingform">Sledujte naši speciální nabídku a rezervujte si pokoje pomocí rezervačního formuláře.</div>

<div class="booking-form-container">
  <div class="promo-sticker">Zadejte kód PRAHAVIP5 získejte slevu 5 %</div>
  <h2>Rezervační formulář</h2>
  <form id="hotelBookingForm">
    <label for="arrivalDate">Datum příjezdu</label>
    <input type="date" id="arrivalDate" name="arrivalDate" required><br>
    <label for="endDate">Datum odjezdu</label>
    <input type="date" id="endDate" name="endDate" required><br>
    <div class="inline-fields">
      <div class="form-group">
        <label for="adults">Dospělé osoby</label>
        <input type="number" id="adults" name="selectedAdultCount" min="1" max="10" value="2" required>
      </div>
      <div class="form-group">
        <label for="children">Děti</label>
        <input type="number" id="children" name="selectedChildCount" min="0" max="10" value="0">
      </div>
      <div class="form-group">
        <label for="infants">Kojenci</label>
        <input type="number" id="infants" name="selectedInfantCount" min="0" max="5" value="0">
      </div>
    </div>
    <label for="promoCode">Kód speciální nabídky / Kód sazby</label>
    <input type="text" id="promoCode" name="promoCode"><br>
    <input type="submit" value="Rezervovat">
    <p class="modify-link">
      <a href="https://www.secure-hotel-booking.com/modification/Hotel-Claris/2V82/" target="_blank">
        Zrušit / Upravit rezervaci
      </a>
    </p>
  </form>
</div>

Nebo nás kontaktujte na:

- :fontawesome-solid-phone: **Telefon:** +420 775712882 ( rezervace) +420 608712854 ( Recepce)
- :fontawesome-regular-envelope: **E-mail:** reservation@petrs.cz.

Těšíme se na Vaši návštěvu!

<script>
  const guestCounts = {
    adults: 1,
    children: 0,
    infants: 0,
  };

  function adjustGuests(type, delta) {
    guestCounts[type] = Math.max(0, guestCounts[type] + delta);
    document.getElementById(type + 'Count').textContent = guestCounts[type];
  }
</script>

<script>
document.querySelector('.mobile-reserve-btn')?.addEventListener('click', function(e) {
  e.preventDefault();
  const target = document.getElementById('hotelbookingform');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
});
</script>

