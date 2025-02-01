document.addEventListener("DOMContentLoaded", () => {
    // Load Header and Footer
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
            setupThemeToggle();
        });

    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        });

    function setupThemeToggle() {
        const themeToggle = document.getElementById("theme-toggle");
        const body = document.body;

        // Check local storage for theme
        if (localStorage.getItem("theme") === "dark") {
            enableDarkMode();
        } else {
            enableLightMode();
        }

        themeToggle.addEventListener("click", () => {
            if (body.classList.contains("dark-mode")) {
                enableLightMode();
            } else {
                enableDarkMode();
            }
        });

        function enableDarkMode() {
            body.classList.add("dark-mode");
            body.style.backgroundColor = "#121212"; // Proper dark mode background
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";
        }

        function enableLightMode() {
            body.classList.remove("dark-mode");
            body.style.backgroundColor = "#f0f0f0"; // Lighter background for light mode
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";
        }
    }

    document.addEventListener("mousemove", (event) => {
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = (event.clientY / window.innerHeight) * 2 - 1;
    
        document.body.style.backgroundPosition = `${x * 50}px ${y * 50}px`;
    
        // Apply effect to stars canvas in dark mode
        if (document.body.classList.contains("dark-mode")) {
            starsCanvas.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
        }
    });
    

    // Moving Stars Background for Dark Mode
    const starsCanvas = document.getElementById("starsCanvas");
    const starsCtx = starsCanvas.getContext("2d");
    starsCanvas.width = window.innerWidth;
    starsCanvas.height = window.innerHeight;

    let stars = [];
    for (let i = 0; i < 150; i++) {
        stars.push({
            x: Math.random() * starsCanvas.width,
            y: Math.random() * starsCanvas.height,
            radius: Math.random() * 2,
            speed: Math.random() * 0.5 + 0.2
        });
    }

    function drawStars() {
        starsCtx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
        starsCtx.fillStyle = "white";
        stars.forEach(star => {
            star.y += star.speed;
            if (star.y > starsCanvas.height) star.y = 0;
            starsCtx.beginPath();
            starsCtx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            starsCtx.fill();
        });
    }

    function animateStars() {
        drawStars();
        requestAnimationFrame(animateStars);
    }

    animateStars();

    // Animated Light Mode Background (Wave Effect)
    const dotsCanvas = document.getElementById("dotsCanvas");
    const dotsCtx = dotsCanvas.getContext("2d");
    dotsCanvas.width = window.innerWidth;
    dotsCanvas.height = window.innerHeight;

    let time = 0;
    function drawDots() {
        dotsCtx.clearRect(0, 0, dotsCanvas.width, dotsCanvas.height);
        if (document.body.classList.contains("dark-mode")) return;

        dotsCtx.fillStyle = "rgba(0, 0, 0, 0.2)";
        for (let i = 0; i < 100; i++) {
            const x = (i * 25) % dotsCanvas.width;
            const y = (Math.sin((i + time) * 0.1) * 20) + (i * 5) % dotsCanvas.height;
            dotsCtx.beginPath();
            dotsCtx.arc(x, y, 3, 0, Math.PI * 2);
            dotsCtx.fill();
        }
        time += 0.5;
    }

    function animateDots() {
        drawDots();
        requestAnimationFrame(animateDots);
    }

    animateDots();

    // Form Input Effects - Labels inside before click, pop-up on click
    document.querySelectorAll(".input-group input").forEach(input => {
        const label = document.createElement("span");
        label.classList.add("input-label");
        label.textContent = input.getAttribute("placeholder");
        input.parentNode.insertBefore(label, input);

        input.setAttribute("placeholder", ""); // Remove placeholder from input

        input.addEventListener("focus", () => {
            label.classList.add("active");
            input.style.transform = "scale(1.1)";
            input.style.borderColor = "#007bff";
            input.style.boxShadow = "0 0 10px #007bff";
        });

        input.addEventListener("blur", () => {
            if (!input.value) {
                label.classList.remove("active");
            }
            input.style.transform = "scale(1)";
            input.style.borderColor = "#ddd";
            input.style.boxShadow = "none";
        });
    });

    // Button Hover & Click Effects
    document.querySelectorAll(".login-btn, .clear-btn").forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
        });

        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });

        button.addEventListener("mousedown", () => {
            button.style.transform = "scale(0.9)";
        });

        button.addEventListener("mouseup", () => {
            button.style.transform = "scale(1.1)";
        });
    });

    // Smooth Form Load Animation
    const loginContainer = document.querySelector(".login-container");
    loginContainer.style.opacity = "0";
    loginContainer.style.transform = "translateY(-20px)";

    setTimeout(() => {
        loginContainer.style.opacity = "1";
        loginContainer.style.transform = "translateY(0)";
    }, 300);

    // Password Visibility Toggle
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("toggle-password");

    togglePassword.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePassword.textContent = "👁️";
        } else {
            passwordInput.type = "password";
            togglePassword.textContent = "🔒";
        }
    });
});
