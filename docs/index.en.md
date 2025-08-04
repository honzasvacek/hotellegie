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
    <p>Luxury • Comfort • Location</p>
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

Some of them offer a beautiful view of the Prague skyline.

<section class="featured-rooms-section">
  <div class="featured-room" onclick="location.href='02.rooms/#single-rooms-standard-comfort'">
    <img src="/assets/fotky_hotelu/jednoluzko.webp" alt="Single Room Apartment">
    <div class="room-label">Single Rooms</div>
  </div>
  <div class="featured-room" onclick="location.href='02.rooms/#double-rooms-standard-comfort'">
    <img src="/assets/fotky_hotelu/dvojluzko.webp" alt="Double Room Apartment">
    <div class="room-label">Double Rooms</div>
  </div>
</section>
<section class="featured-rooms-section">
  <div class="featured-room" onclick="location.href='02.rooms/#triple-rooms'">
    <img src="/assets/fotky_hotelu/trojluzko.webp" alt="Single Room Apartment">
    <div class="room-label">Triple Rooms</div>
  </div>
  <div class="featured-room" onclick="location.href='02.rooms/#quadruple-rooms'">
    <img src="/assets/fotky_hotelu/ctyrluzko.webp" alt="Double Room Apartment">
    <div class="room-label">Quadruple Rooms</div>
  </div>
</section>

We accommodate both individuals and groups.

We also offer rental of lounges and a banquet hall.

<div id="booking-title">
You can book online using our booking form or contact us:
</div>

--8<-- "booking-form.en.html"

- :fontawesome-solid-phone: **Reservation:** +420 775 712 882 
- :fontawesome-solid-phone: **Reception:** +420 775 564 968 
- :fontawesome-regular-envelope: **E-mail:** reservation@petrs.cz

We look forward to your visit!
