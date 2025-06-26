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
    <a href="#hotelbookingform" class="mobile-reserve-btn">Book now</a>
  </div>
  <form id="hotelBookingForm" class="reservation-bar">
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
<link rel="stylesheet" href="/hotelclaris/assets/stylesheets/index.css">

## Welcome to Hotel CLARIS!

We offer accommodation in single and double rooms in standard and comfort categories!

<!-- START: Room Cards -->
<section class="featured-rooms-section">
  <div class="featured-room" onclick="location.href='02.rooms/#single-rooms'">
    <img src="/hotelclaris/assets/fotky-hotelu/jednoluzko-komfort2.jpg" alt="Single Room">
    <div class="room-label">Single Rooms</div>
  </div>
  <div class="featured-room" onclick="location.href='02.rooms/#double-rooms'">
    <img src="/hotelclaris/assets/fotky-hotelu/dvojluzko-2-komfort.jpg" alt="Double Room">
    <div class="room-label">Double Rooms</div>
  </div>
</section>
<!-- END: Room Cards -->

<div id="hotelbookingform">Check out our special offer and book your stay using the reservation form.</div>

<div class="booking-form-container">
  <div class="promo-sticker">Enter code PRAHAVIP5 to get 5% off</div>
  <h2>Reservation Form</h2>
  <form id="hotelBookingForm">
    <label for="arrivalDate">Arrival Date</label>
    <input type="date" id="arrivalDate" name="arrivalDate" required><br>
    <label for="endDate">Departure Date</label>
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
    <label for="promoCode">Special Offer Code / Rate Code</label>
    <input type="text" id="promoCode" name="promoCode"><br>
    <input type="submit" value="Book Now">
    <p class="modify-link">
      <a href="https://www.secure-hotel-booking.com/modification/Hotel-Claris/2V82/" target="_blank">
        Cancel / Modify Reservation
      </a>
    </p>
  </form>
</div>

Or contact us at:

- :fontawesome-solid-phone: **Phone:** +420 775712882 (Reservations), +420 608712854 (Reception)  
- :fontawesome-regular-envelope: **Email:** reservation@petrs.cz

We look forward to your visit!
