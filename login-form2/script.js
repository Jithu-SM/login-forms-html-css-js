function createAnimationElements() {
    const backgroundAnimation = document.querySelector('.background-animation');

    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'stars';
        star.style.setProperty('--i', i);
        star.style.left = `${Math.random() * 100}%`;
        backgroundAnimation.appendChild(star);

        const snow = document.createElement('div');
        snow.className = 'snow';
        snow.style.setProperty('--i', i);
        snow.style.left = `${Math.random() * 100}%`;
        backgroundAnimation.appendChild(snow);

        const dot = document.createElement('div');
        dot.className = 'dots';
        dot.style.setProperty('--i', i);
        dot.style.left = `${Math.random() * 100}%`;
        backgroundAnimation.appendChild(dot);
    }
}

createAnimationElements();

// Load header and footer
function loadHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            if (elementId === 'header-placeholder') {
                document.getElementById('toggle-theme').addEventListener('click', () => {
                    document.body.classList.toggle('dark');
                    const themeButton = document.getElementById('toggle-theme');
                    themeButton.textContent = document.body.classList.contains('dark') ? '🌜' : '🌞';
                });
            }
        });
}

loadHTML('header.html', 'header-placeholder');
loadHTML('footer.html', 'footer-placeholder');
