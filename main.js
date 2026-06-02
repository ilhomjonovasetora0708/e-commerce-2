// ============================
// TRAVELGO JAVASCRIPT
// ============================

// NAVBAR SCROLL EFFECT

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#0f172a";
        header.style.transition = "0.4s";

    } else {

        header.style.background = "rgba(0,0,0,.5)";
    }

});

// ============================
// HERO SEARCH BUTTON
// ============================

const searchBtn =
    document.querySelector(".search-box button");

searchBtn.addEventListener("click", () => {

    const destination =
        document.querySelector(
            '.search-box input[type="text"]'
        );

    if (destination.value === "") {

        alert("Please enter destination ✈️");

    } else {

        alert(
            `Searching trips to ${destination.value} 🌍`
        );

    }

});

// ============================
// TOUR PACKAGE BUTTONS
// ============================

const packageButtons =
    document.querySelectorAll(".package button");

packageButtons.forEach(button => {

    button.addEventListener("click", () => {

        const packageName =
            button.parentElement.querySelector("h3")
                .textContent;

        alert(
            `✅ ${packageName} booked successfully!`
        );

    });

});

// ============================
// BOOKING FORM
// ============================

const bookingForm =
    document.querySelector("form");

bookingForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const inputs =
        bookingForm.querySelectorAll("input");

    let valid = true;

    inputs.forEach(input => {

        if (input.value.trim() === "") {

            valid = false;

        }

    });

    if (valid) {

        alert(
            "🎉 Your booking request has been sent!"
        );

        bookingForm.reset();

    } else {

        alert(
            "⚠️ Please fill all fields."
        );

    }

});

// ============================
// NEWSLETTER
// ============================

const newsletterBtn =
    document.querySelector(".newsletter button");

newsletterBtn.addEventListener("click", () => {

    const email =
        document.querySelector(
            ".newsletter input"
        );

    if (email.value === "") {

        alert("Enter your email.");

    } else {

        alert(
            "📩 Thank you for subscribing!"
        );

        email.value = "";

    }

});

// ============================
// DESTINATION HOVER EFFECT
// ============================

const destinations =
    document.querySelectorAll(
        ".destination-card"
    );

destinations.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-12px) scale(1.02)";

        card.style.transition =
            "0.4s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0) scale(1)";

    });

});

// ============================
// REVIEW CARDS EFFECT
// ============================

const reviews =
    document.querySelectorAll(".review");

reviews.forEach(review => {

    review.addEventListener("mouseenter", () => {

        review.style.boxShadow =
            "0 15px 30px rgba(14,165,233,.25)";

        review.style.transition =
            "0.3s";

    });

    review.addEventListener("mouseleave", () => {

        review.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.08)";

    });

});

// ============================
// STATS COUNTER ANIMATION
// ============================

const counters =
    document.querySelectorAll(".stats-grid h2");

let started = false;

window.addEventListener("scroll", () => {

    const stats =
        document.querySelector(".stats");

    const position =
        stats.getBoundingClientRect().top;

    if (position < window.innerHeight && !started) {

        started = true;

        counters.forEach(counter => {

            const target =
                parseInt(counter.innerText);

            let count = 0;

            const update = () => {

                count += Math.ceil(target / 50);

                if (count < target) {

                    counter.innerText =
                        count + "+";

                    setTimeout(update, 40);

                } else {

                    counter.innerText =
                        target + "+";

                }

            };

            update();

        });

    }

});

// ============================
// PAGE LOADED
// ============================

console.log(
    "🌍 TravelGo Website Loaded Successfully"
);