// =====================================
// IMPORTS
// =====================================
import "../css/input.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import '../css/style.css'
import Typed from "typed.js";

// ============================================
// COUNTDOWN TIMER
// ============================================

// Set target date - GANTI INI dengan tanggal event!
const targetDate = new Date('2025-12-31T23:59:59').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;
    
    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Update HTML
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    
    // If countdown finished
    if (distance < 0) {
        clearInterval(countdownInterval);
        const countdownContainer = document.querySelector('.grid');
        if (countdownContainer) {
            countdownContainer.innerHTML = '<p class="col-span-full text-[#d4c5a9] text-2xl sm:text-3xl font-heading">🎉 Event Started! 🎉</p>';
        }
    }
}

// Update every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call
updateCountdown();

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});