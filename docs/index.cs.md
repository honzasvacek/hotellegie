---
hide:
  - navigation
  - toc
---

# Domů 

<style>
.md-content h1 {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  overflow: hidden !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  white-space: nowrap !important;
}
.reservation-bar {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  color: white;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 12px 18px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  border: 1px solid #333;
  z-index: 10;
}

.res-icon {
  font-size: 18px;
}

.res-item,
.res-counter-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.res-date {
  background: transparent;
  border: none;
  color: white;
  font-size: 14px;
  width: 110px;
  cursor: pointer;
  
}

.res-arrow {
  font-size: 18px;
}

.res-divider {
  width: 1px;
  height: 24px;
  background: #444;
}

.res-label {
  font-size: 12px;
  color: #aaa;
  margin-right: 4px;
}

.res-counter {
  display: flex;
  align-items: center;
  gap: 6px;
}

.res-counter button {
  background: none;
  color: white;
  border: 1px solid white;
  width: 24px;
  height: 24px;
  font-size: 14px;
  cursor: pointer;
  padding: 0;
  line-height: 1;
}

.promo-input input {
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  padding: 4px 6px;
  color: white;
  font-size: 13px;
  width: 110px;
}

.res-book {
  background: none;
  color: #00bfff;
  border: none;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  padding: 6px 10px;
}
.visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
#hotelbookingform {
  margin-bottom:20px;
  scroll-margin-top: 3rem;
}

.booking-form-container {
  display: none;
}
.mobile-reserve-btn {
  position: sticky;
  display: none;
  background-color: #fb8500;
  color: #002850 !important;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  z-index: 10;
  font-family: "Inter", sans-serif;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: fit-content
}
.mobile-reserve-btn:hover {
  color: #fb8500 !important;
  background-color: #002850 !important;
} 
.mobile-reserve-btn-wrapper {
  position: relative;
  height: 60px;
}
/* for smaller than 1050px display a button */
@media (max-width: 1050px) {
  .reservation-bar {
    display: none !important;
  }

  .mobile-reserve-btn {
    display: flex !important;
  }

  .booking-form-container {
    display: block;
  }
}
</style>
<!-- START: Full-width Hero Banner -->
<div class="hero-banner">
  <div class="hero-content">
    <h1>Welcome to Paradise Hotel</h1>
    <p>Luxury • Comfort • Tranquility</p>
  </div>
  <div class="mobile-reserve-btn-wrapper">
    <a href="#hotelbookingform" class="mobile-reserve-btn">Rezervovat</a>
  </div>
  <form id="hotelBookingForm" class="reservation-bar">
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

