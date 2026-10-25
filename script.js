// Cookie Banner Logik nach dem Laden anzeigen
window.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    // Prüfen, ob der User die Cookies schon akzeptiert hat
    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000); // 1 Sekunde Verzögerung
    }

    // Klick auf "Akzeptieren"
    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.classList.remove('show');
    });
});
