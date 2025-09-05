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
    <p>Stadtzentrum • Komfort • Tradition</p>
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
<link rel="stylesheet" href="/assets/stylesheets/index.css">

## Willkommen im Hotel LEGIE!

Wir bieten Unterkunft in 55 Zimmern in zwei Kategorien – Standard und Komfort.

Die Komfortzimmer sind komplett renoviert und modern und komfortabel ausgestattet. 

Einige von ihnen bieten einen wunderschönen Blick auf das Prager Panorama.

<section class="featured-rooms-section">
  <div class="featured-room" onclick="location.href='02.rooms/#komfort-einzelzimmer'">
    <img src="/assets/fotky_pokoju/1KOM.webp" alt="Einzelzimmer Apartment">
    <div class="room-label">Einzelzimmer</div>
  </div>
  <div class="featured-room" onclick="location.href='02.rooms/#komfort-doppelzimmer'">
    <img src="/assets/fotky_pokoju/2KOM.webp" alt="Doppelzimmer Apartment">
    <div class="room-label">Doppelzimmer</div>
  </div>
</section>
<section class="featured-rooms-section">
  <div class="featured-room" onclick="location.href='02.rooms/#komfort-doppelzimmer-mit-zustellbett'">
    <img src="/assets/fotky_pokoju/3KOM.webp" alt="Einzelzimmer Apartment">
    <div class="room-label">Dreibettzimmer</div>
  </div>
  <div class="featured-room" onclick="location.href='02.rooms/#komfort-dreibettzimmer-mit-zustellbett'">
    <img src="/assets/fotky_pokoju/4KOM.webp" alt="Doppelzimmer Apartment">
    <div class="room-label">Vierbettzimmer</div>
  </div>
</section>

Wir bieten Unterkunft sowohl für Einzelpersonen als auch für Gruppen.

Wir vermieten auch Salons und einen Veranstaltungssaal.


<div id="booking-title">
Sie können online über unser Reservierungsformular reservieren oder uns kontaktieren:
</div>

--8<-- "booking-form.de.html"

- :fontawesome-solid-phone: **Reservierung:** <a href="tel:+420775712882" target="_blank">+420 775 712 882</a> 
- :fontawesome-solid-phone: **Rezeption:** <a href="tel:+420775564968 " target="_blank">+420 775 564 968</a> 
- :fontawesome-regular-envelope: **E-Mail:**  <a href="mailto:reservation@petrs.cz" target="_blank">reservation@petrs.cz</a>

Wir freuen uns auf Ihren Besuch!
