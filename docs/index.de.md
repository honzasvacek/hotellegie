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
    <a href="#booking-title" class="mobile-reserve-btn">Jetzt buchen</a>
  </div>
  <form id="hotelBookingForm" class="reservation-bar" data-lang="de-DE">
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
<link rel="stylesheet" href="../../hotellegie/assets/stylesheets/index.css">

## Willkommen im Hotel LEGIE!

Wir bieten Übernachtungen in Einbett-, Zweibett-, Dreibett- und Vierbettzimmern in den Kategorien Standard und Komfort an!

<section class="featured-rooms-section">
  <div class="featured-room" onclick="location.href='02.rooms/#einzelzimmer-standard-komfort'">
    <img src="/hotellegie/assets/fotky_hotelu/jednoluzko.webp" alt="Einzelzimmer Apartment">
    <div class="room-label">Einzelzimmer</div>
  </div>
  <div class="featured-room" onclick="location.href='02.rooms/#doppelzimmer-standard-komfort'">
    <img src="/hotellegie/assets/fotky_hotelu/dvojluzko.webp" alt="Doppelzimmer Apartment">
    <div class="room-label">Doppelzimmer</div>
  </div>
</section>
<section class="featured-rooms-section">
  <div class="featured-room" onclick="location.href='02.rooms/#dreibettzimmer'">
    <img src="/hotellegie/assets/fotky_hotelu/trojluzko.webp" alt="Einzelzimmer Apartment">
    <div class="room-label">Dreibettzimmer</div>
  </div>
  <div class="featured-room" onclick="location.href='02.rooms/#vierbettzimmer'">
    <img src="/hotellegie/assets/fotky_hotelu/ctyrluzko.webp" alt="Doppelzimmer Apartment">
    <div class="room-label">Vierbettzimmer</div>
  </div>
</section>


<div id="booking-title">Nutzen Sie unser Sonderangebot und buchen Sie Ihr Zimmer über das Reservierungsformular.</div>

--8<-- "booking-form.de.html"

Oder kontaktieren Sie uns unter:

- :fontawesome-solid-phone: **Telefon:** +420 775712882 (Reservierungen), +420 608712854 (Rezeption)  
- :fontawesome-regular-envelope: **E-Mail:** reservation@petrs.cz

Wir freuen uns auf Ihren Besuch!
