document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       Dynamic Copyright Year
    =============================== */
   const yearEl = document.getElementById("currentYear");
    if (yearEl) {
        const currentYear = new Date().getFullYear();
        yearEl.innerHTML = yearEl.innerHTML.replace(/\d{4}/, currentYear);
    }


    /* ===============================
       Dark Mode Toggle
    =============================== */
    const darkToggle = document.getElementById("darkModeToggle");
    if (darkToggle) {
        darkToggle.addEventListener("click", function () {
            document.body.classList.toggle("bg-dark");
            document.body.classList.toggle("text-white");

            const header = document.querySelector("header");
            if (header) {
                header.classList.toggle("bg-white");
                header.classList.toggle("text-dark");
            }
        });
    }

    /* ===============================
       Particles JS
    =============================== */
    if (window.jQuery && $(".particles-js.dots").length) {
        const customParticlesOptions = {
            particles: {
                number: {
                    value: 150,
                    density: {
                        enable: true,
                        value_area: 500,
                    },
                },
                color: { value: "#09aff4" },
                shape: { type: "circle" },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0,
                        sync: false,
                    },
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 5,
                        size_min: 0.3,
                        sync: false,
                    },
                },
                line_linked: { enable: false },
                move: {
                    enable: true,
                    speed: 5,
                    random: true,
                    out_mode: "out",
                },
            },
            interactivity: {
                events: {
                    resize: true,
                },
            },
            retina_detect: true,
        };

        particlesJS("particles-js", customParticlesOptions);
    }

    /* ===============================
       Bootstrap Carousel Progress Bar
    =============================== */
    const carousel = document.querySelector("#carouselExample");
    if (carousel) {
        const progressBar = document.querySelector(".progress-bar");
        const totalSlides = document.querySelectorAll(".carousel-item").length;
        let currentIndex = 0;

        function updateProgress() {
            if (progressBar) {
                progressBar.style.width =
                    `${((currentIndex + 1) / totalSlides) * 100}%`;
            }
        }

        carousel.addEventListener("slid.bs.carousel", function (event) {
            currentIndex = event.to;
            updateProgress();
        });

        updateProgress();
    }

    /* ===============================
       Owl Carousel
    =============================== */
    if (window.jQuery && $(".owl-carousel").length) {
        $(".owl-carousel").owlCarousel({
            loop: false,
            margin: 10,
            dots: false,
            lazyLoad: true,
            responsive: {
                0: { items: 2, dots: true },
                600: { items: 3 },
                900: { items: 4 },
                1200: { items: 5 },
            },
        });
    }

    /* ===============================
       Mixitup Filter
    =============================== */
    if (document.querySelector("#manga-container")) {
        mixitup("#manga-container");
    }

    /* ===============================
       Venobox
    =============================== */
    if (document.querySelector(".venobox")) {
        new VenoBox({ selector: ".venobox" });
    }

    /* ===============================
       Slick Slider
    =============================== */
    if (window.jQuery && $(".trending-manga-slider-container").length) {
        $(".trending-manga-slider-container").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
            dots: true,
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 3 } },
                { breakpoint: 768, settings: { slidesToShow: 2 } },
                { breakpoint: 480, settings: { slidesToShow: 1 } },
            ],
        });
    }

    /* ===============================
       Mobile Dropdown Menu
    =============================== */
    document.querySelectorAll(".dropdown-toggle").forEach(function (dropdown) {
        dropdown.addEventListener("click", function (e) {
            if (window.innerWidth < 992) {
                e.preventDefault();
                const menu = this.nextElementSibling;

                document.querySelectorAll(".dropdown-menu").forEach(function (el) {
                    el.classList.remove("show");
                });

                if (menu) {
                    menu.classList.toggle("show");
                }
            }
        });
    });

    document.addEventListener("click", function (e) {
        if (!e.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown-menu").forEach(function (el) {
                el.classList.remove("show");
            });
        }
    });

    /* ===============================
       Back To Top Button
    =============================== */
    const backToTop = document.getElementById("backToTop");
    if (backToTop) {
        window.addEventListener("scroll", function () {
            backToTop.classList.toggle("show", window.scrollY > 300);
        });

        backToTop.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});

/* ===============================
   Preloader
=============================== */
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.style.display = "none";
    }
});
