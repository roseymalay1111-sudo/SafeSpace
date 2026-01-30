// Close menu on link click (mobile)
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// ============ Get support=================
document.querySelectorAll('.support-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) rotateX(3deg)';
        card.style.transition = '0.4s ease';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});


// =============== Learn page ==============
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});

function toggleCard(card) {
    card.classList.toggle('active');
}

// Slideshow Banner(Learn)
const banners = document.querySelectorAll('.rotating-banner .banner-img');
let current = 0;
const interval = 3000; // 3 seconds per image

function showNextBanner() {
    banners[current].classList.remove('active');
    current = (current + 1) % banners.length;
    banners[current].classList.add('active');
}
setInterval(showNextBanner, interval);


document.querySelectorAll('.resource-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-6px)';
        card.style.transition = '0.3s ease';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// ========== Reach Out =================
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("supportForm");
    const message = document.getElementById("supportMessage");
    const feedback = document.getElementById("formFeedback");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // stop page reload

        feedback.innerHTML = "";

        if (message.value.trim() === "") {
            feedback.innerHTML = `
                <div class="alert alert-warning animate__animated animate__shakeX">
                    Please share a brief message so we understand how to support you.
                </div>
            `;
            return;
        }

        // Disable form temporarily to simulate sending
        form.querySelector("button[type=submit]").disabled = true;

        // Optional: Add a small "sending..." animation
        feedback.innerHTML = `
            <div class="alert alert-info animate__animated animate__fadeIn">
                Sending your message...
            </div>
        `;

        setTimeout(() => {
            // Show success message
            feedback.innerHTML = `
                <div class="alert alert-success animate__animated animate__fadeIn">
                    ✅ Your message has been sent successfully!<br>
                    <small>You’re not alone — support is here for you.</small>
                </div>
            `;

            form.reset(); // clear form
            form.querySelector("button[type=submit]").disabled = false;

        }, 1500); // 1.5s delay to simulate sending
    });
});











