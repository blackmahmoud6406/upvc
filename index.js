document.addEventListener("DOMContentLoaded", () => {
    // 1. Hide Intro Loader after animation
    const loader = document.getElementById("intro-loader");
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1800);

    // 2. Mobile Menu Toggle
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    // Close mobile menu when clicking any nav link
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });

    // 3. Gallery Filtering Logic
    const filterBtns = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            galleryItems.forEach(item => {
                if (filterValue === "all" || item.classList.contains(filterValue)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // 4. Gallery Lightbox Modal
    const modal = document.getElementById("lightbox-modal");
    const modalImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");

    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            const fullImgSrc = item.getAttribute("data-src") || item.querySelector("img").src;
            modalImg.src = fullImgSrc;
            modal.style.display = "flex";
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});