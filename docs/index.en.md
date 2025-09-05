---
hide:
  - navigation
  - toc
---

# Home

<!-- START: Full-width Hero Banner -->
<div class="hero-banner">
  <div class="hero-content">
    <h1>Welcome to Hotel Claris</h1>
    <p>City Centre • Comfort • Tradition</p>
  </div>
  <div class="mobile-reserve-btn-wrapper">
    <a href="#booking-title" class="mobile-reserve-btn">Book now</a>
  </div>
  <form id="hotelBookingForm" class="reservation-bar" data-lang="en-EN">
    <div class="promo-sticker-bar">
      <span>&#9432; Use code <strong>PRAHAVIP5</strong> for 5% off</span>
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
      <span class="res-label">Adults</span>
      <div class="res-counter">
        <button type="button" onclick="adjustGuests('adults', -1)">−</button>
        <span id="adults" name="selectedAdultCount">1</span>
        <button type="button" onclick="adjustGuests('adults', 1)">+</button>
      </div>
    </div>
    <div class="res-counter-group">
      <span class="res-label">Children</span>
      <div class="res-counter">
        <button type="button" onclick="adjustGuests('children', -1)">−</button>
        <span id="children" name="selectedChildCount">0</span>
        <button type="button" onclick="adjustGuests('children', 1)">+</button>
      </div>
    </div>
    <div class="res-counter-group">
      <span class="res-label">Infants</span>
      <div class="res-counter">
        <button type="button" onclick="adjustGuests('infants', -1)">−</button>
        <span id="infants" name="selectedInfantCount">0</span>
        <button type="button" onclick="adjustGuests('infants', 1)">+</button>
      </div>
    </div>
    <div class="res-divider"></div>
    <div class="res-item promo-input">
      <input type="text" id="promoCode" placeholder="Promo Code" />
    </div>
    <button type="submit" class="res-book">BOOK NOW ↗</button>
  </form>
</div>
<!-- END: Full-width Hero Banner -->
<link rel="stylesheet" href="/assets/stylesheets/index.css">

## Welcome to Hotel LEGIE!

We offer accommodation in 55 rooms in two categories - Standard and Comfort.

Comfort rooms are completely renovated, modern and comfortably equipped. 

Some of them offer a beautiful view of the Prague panorama.

<section class="featured-rooms-section">
  <div class="featured-room" onclick="location.href='02.rooms/#comfort-single-room'">
    <img src="/assets/fotky_pokoju/1KOM.webp" alt="Single Room Apartment">
    <div class="room-label">Single Rooms</div>
  </div>
  <div class="featured-room" onclick="location.href='02.rooms/#comfort-double-room'">
    <img src="/assets/fotky_pokoju/2KOM.webp" alt="Double Room Apartment">
    <div class="room-label">Double Rooms</div>
  </div>
</section>
<section class="featured-rooms-section">
  <div class="featured-room" onclick="location.href='02.rooms/#comfort-double-room-with-extra-bed'">
    <img src="/assets/fotky_pokoju/3KOM.webp" alt="Single Room Apartment">
    <div class="room-label">Triple Rooms</div>
  </div>
  <div class="featured-room" onclick="location.href='02.rooms/#comfort-triple-room-with-extra-bed'">
    <img src="/assets/fotky_pokoju/4KOM.webp" alt="Double Room Apartment">
    <div class="room-label">Quadruple Rooms</div>
  </div>
</section>

We accommodate both individuals and groups.

We also offer rental of lounges and a dance hall.

<div id="booking-title">
You can book online using our booking form or contact us:
</div>

--8<-- "booking-form.en.html"

- :fontawesome-solid-phone: **Reservation:**  <a href="tel:+420775712882" target="_blank">+420 775 712 882</a> 
- :fontawesome-solid-phone: **Reception:** <a href="tel:+420775564968 " target="_blank">+420 775 564 968</a> 
- :fontawesome-regular-envelope: **E-mail:** <a href="mailto:reservation@petrs.cz" target="_blank">reservation@petrs.cz</a>

We look forward to your visit!
