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
    <p>Centrum • Pohodlí • Tradice</p>
  </div>
  <div class="mobile-reserve-btn-wrapper">
    <a href="#booking-title" class="mobile-reserve-btn">Rezervovat</a>
  </div>
  <form id="hotelBookingForm" class="reservation-bar" data-lang="cs-CZ">
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
<link rel="stylesheet" href="/assets/stylesheets/index.css">

## Vítejte v hotelu LEGIE!

Nabízíme ubytování v 55 pokojích ve dvou kategoriích – Standard a Komfort.

Pokoje Komfort jsou po kompletní rekonstrukci, moderně a pohodlně vybavené. 

Některé z nich nabízejí překrásný výhled na pražské panorama.


<!-- START: Room Cards -->
<section class="featured-rooms-section">
  <div class="featured-room" onclick="location.href='02.rooms/#jednoluzkovy-komfort'">
    <img src="/assets/fotky_pokoju/1KOM.webp" alt="Jednolůžkový apartmán">
    <div class="room-label">Jednolůžkové</div>
  </div>
  <div class="featured-room" onclick="location.href='02.rooms/#dvouluzkovy-komfort'">
    <img src="/assets/fotky_pokoju/2KOM.webp" alt="Dvoulůžkový apartmán">
    <div class="room-label">Dvoulůžkové</div>
  </div>
</section>
<section class="featured-rooms-section">
  <div class="featured-room" onclick="location.href='02.rooms/#dvouluzkovy-komfort-s-pristylkou'">
    <img src="/assets/fotky_pokoju/3KOM.webp" alt="Jednolůžkový apartmán">
    <div class="room-label">Třílůžkové</div>
  </div>
  <div class="featured-room" onclick="location.href='02.rooms/#triluzkovy-komfort-s-pristylkou'">
    <img src="/assets/fotky_pokoju/4KOM.webp" alt="Dvoulůžkový apartmán">
    <div class="room-label">Čtyřlůžkové</div>
  </div>
</section>
<!-- END: Room Cards -->

Ubytováváme jak jednotlivce, tak skupiny.

Nabízíme také pronájem salonků a společenského sálu.


<div id="booking-title">
Rezervaci můžete provést online pomocí našeho rezervačního formuláře, nebo nás kontaktujte:
</div>

--8<-- "booking-form.cs.html"

- :fontawesome-solid-phone: **Rezervace:**  <a href="tel:+420775712882" target="_blank">+420 775 712 882</a> 
- :fontawesome-solid-phone: **Recepce:** <a href="tel:+420775564968 " target="_blank">+420 775 564 968</a> 
- :fontawesome-regular-envelope: **E-mail:** <a href="mailto:reservation@petrs.cz" target="_blank">reservation@petrs.cz</a>

Těšíme se na Vaši návštěvu!

