const darkmodeButton = document.getElementById("darkmodebtn");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (darkmodeButton) {
darkmodeButton.addEventListener("click", function () {

```
    const isDark = document.body.classList.toggle("dark");

    darkmodeButton.textContent = isDark
        ? "الوضع النهاري"
        : "الوضع الليلي";

    darkmodeButton.setAttribute(
        "aria-pressed",
        String(isDark)
    );
});
```

}

if (menuToggle && navLinks) {

```
menuToggle.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );
});

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );
    });
});
```

}

const sliderTrack = document.getElementById("sliderTrack");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const sliderDots = document.getElementById("sliderDots");

let currentSlide = 0;
let autoSlide = null;

if (
sliderTrack &&
slides.length > 0 &&
prevBtn &&
nextBtn &&
sliderDots
) {

```
slides.forEach(function (_, index) {

    const dot = document.createElement("span");

    dot.classList.add("dot");

    if (index === 0) {
        dot.classList.add("active");
    }

    dot.addEventListener("click", function () {

        currentSlide = index;

        updateSlider();

        restartAutoSlide();
    });

    sliderDots.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateSlider() {

    sliderTrack.style.transform =
        `translateX(-${currentSlide * 100}%)`;

    dots.forEach(function (dot, index) {

        dot.classList.toggle(
            "active",
            index === currentSlide
        );
    });
}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    updateSlider();
}

function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    updateSlider();
}

nextBtn.addEventListener("click", function () {

    nextSlide();

    restartAutoSlide();
});

prevBtn.addEventListener("click", function () {

    previousSlide();

    restartAutoSlide();
});

function startAutoSlide() {

    clearInterval(autoSlide);

    autoSlide = setInterval(function () {

        nextSlide();

    }, 4000);
}

function restartAutoSlide() {

    clearInterval(autoSlide);

    startAutoSlide();
}

startAutoSlide();

sliderTrack.addEventListener("mouseenter", function () {

    clearInterval(autoSlide);
});

sliderTrack.addEventListener("mouseleave", function () {

    startAutoSlide();
});
```

}
