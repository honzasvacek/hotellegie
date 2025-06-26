---
hide:
  - navigation
  - toc
---

# Startseite

<!-- START: Full-width Hero Banner -->
<div class="hero-banner">
  <div class="hero-content">
    <h1>Willkommen im Hotel Claris</h1>
    <p>Luxus • Komfort • Lage</p>
  </div>
  <div class="mobile-reserve-btn-wrapper">
    <a href="#hotelbookingform" class="mobile-reserve-btn">Jetzt buchen</a>
  </div>
  <form id="hotelBookingForm" class="reservation-bar">
  <div class="promo-sticker-bar">
  <span>&#9432; Verwenden Sie den Code <strong>PRAHAVIP5</strong> für 5% Rabatt</span>
</div>
    <div class="res-item">
      <div class="date-container">
        <input type="date" id="arrivalDate" name="arrivalDate" class="res-date" required/>
      </div>
      <span class="res-arrow">→</span>
      <div class="date-container">
        <input type="date" id="endDate" name="endDate" class="res-date" required/>
      </div>
    </div>

    <div class="res-divider"></div>

    <div class="res-item">
      <span class="res-label">Erwachsene</span>
      <div class="res-counter">
        <button type="button" onclick="adjustGuests('adults', -1)">−</button>
        <span id="adults" name="selectedAdultCount">1</span>
        <button type="button" onclick="adjustGuests('adults', 1)">+</button>
      </div>
    </div>

    <div class="res-counter-group">
      <span class="res-label">Kinder</span>
      <div class="res-counter">
        <button type="button" onclick="adjustGuests('children', -1)">−</button>
        <span id="children" name="selectedChildCount">0</span>
        <button type="button" onclick="adjustGuests('children', 1)">+</button>
      </div>
    </div>

    <div class="res-counter-group">
      <span class="res-label">Säuglinge</span>
      <div class="res-counter">
        <button type="button" onclick="adjustGuests('infants', -1)">−</button>
        <span id="infants" name="selectedInfantCount">0</span>
        <button type="button" onclick="adjustGuests('infants', 1)">+</button>
      </div>
    </div>

    <div class="res-divider"></div>

    <div class="res-item promo-input">
      <input type="text" id="promoCode" placeholder="Rabattcode" />
    </div>

    <button type="submit" class="res-book">JETZT BUCHEN ↗</button>
  </form>
</div>
<!-- END: Full-width Hero Banner -->
<link rel="stylesheet" href="/hotelclaris/assets/stylesheets/index.css">

## Willkommen im Hotel CLARIS!

Wir bieten Einzel- und Doppelzimmer in den Kategorien Standard und Komfort!

<!-- START: Room Cards -->
<section class="featured-rooms-section">
  <div class="featured-room" onclick="location.href='02.rooms/#einzelzimmer'">
    <img src="/hotelclaris/assets/fotky-hotelu/jednoluzko-komfort2.jpg" alt="Einzelzimmer">
    <div class="room-label">Einzelzimmer</div>
  </div>
  <div class="featured-room" onclick="location.href='02.rooms/#doppelzimmer'">
    <img src="/hotelclaris/assets/fotky-hotelu/dvojluzko-2-komfort.jpg" alt="Doppelzimmer">
    <div class="room-label">Doppelzimmer</div>
  </div>
</section>
<!-- END: Room Cards -->

<div id="hotelbookingform">Nutzen Sie unser Sonderangebot und buchen Sie Ihr Zimmer über das Reservierungsformular.</div>

<div class="booking-form-container">
  <div class="promo-sticker">Geben Sie den Code PRAHAVIP5 ein und erhalten Sie 5 % Rabatt</div>
  <h2>Reservierungsformular</h2>
  <form id="hotelBookingForm">
    <label for="arrivalDate">Anreisedatum</label>
    <input type="date" id="arrivalDate" name="arrivalDate" required><br>
    <label for="endDate">Abreisedatum</label>
    <input type="date" id="endDate" name="endDate" required><br>
    <div class="inline-fields">
      <div class="form-group">
        <label for="adults">Erwachsene</label>
        <input type="number" id="adults" name="selectedAdultCount" min="1" max="10" value="2" required>
      </div>
      <div class="form-group">
        <label for="children">Kinder</label>
        <input type="number" id="children" name="selectedChildCount" min="0" max="10" value="0">
      </div>
      <div class="form-group">
        <label for="infants">Säuglinge</label>
        <input type="number" id="infants" name="selectedInfantCount" min="0" max="5" value="0">
      </div>
    </div>
    <label for="promoCode">Angebots- / Tarifcode</label>
    <input type="text" id="promoCode" name="promoCode"><br>
    <input type="submit" value="Jetzt buchen">
    <p class="modify-link">
      <a href="https://www.secure-hotel-booking.com/modification/Hotel-Claris/2V82/" target="_blank">
        Buchung stornieren / ändern
      </a>
    </p>
  </form>
</div>

Oder kontaktieren Sie uns unter:

- :fontawesome-solid-phone: **Telefon:** +420 775712882 (Reservierungen), +420 608712854 (Rezeption)  
- :fontawesome-regular-envelope: **E-Mail:** reservation@petrs.cz

Wir freuen uns auf Ihren Besuch!
