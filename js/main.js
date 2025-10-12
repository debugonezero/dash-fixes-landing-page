document.addEventListener('DOMContentLoaded', function() {
    // AOS initialization
    AOS.init({
        duration: 800,
        once: true
    });

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Theme Toggle Logic
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    const applyTheme = (isDark) => {
        if (isDark) {
            body.classList.add('dark');
            body.classList.remove('light');
        } else {
            body.classList.remove('dark');
            body.classList.add('light');
        }
    };

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme === 'dark');
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isCurrentlyDark = body.classList.contains('dark');
            applyTheme(!isCurrentlyDark);
            localStorage.setItem('theme', !isCurrentlyDark ? 'dark' : 'light');
        });
    }

    // Generic Formspree handler
    async function handleFormSubmit(event, formId, statusId, successMessage) {
        event.preventDefault();
        const form = document.getElementById(formId);
        const status = document.getElementById(statusId);
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xkgvaqde", {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.ok) {
                status.textContent = successMessage;
                status.className = 'mt-6 text-center font-medium text-solarized-green';
                form.reset();
            } else {
                const responseData = await response.json();
                if (Object.hasOwn(responseData, 'errors')) {
                    status.textContent = responseData["errors"].map(error => error["message"]).join(", ");
                } else {
                    status.textContent = "Oops! There was a problem submitting your form.";
                }
                status.className = 'mt-6 text-center font-medium text-solarized-red';
            }
        } catch (error) {
            status.textContent = "Oops! There was a problem submitting your form.";
            status.className = 'mt-6 text-center font-medium text-solarized-red';
        }
    }

    // Attach handlers to forms
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => handleFormSubmit(e, 'contact-form', 'form-status', "Thanks! I'll get back to you in a dash."));
    }

    const repairForm = document.getElementById('repair-form');
    if (repairForm) {
        repairForm.addEventListener("submit", (e) => handleFormSubmit(e, 'repair-form', 'repair-form-status', "Thanks! We'll email your quote and shipping label shortly."));
    }

    const donationForm = document.getElementById('donation-form');
    if (donationForm) {
        donationForm.addEventListener("submit", (e) => handleFormSubmit(e, 'donation-form', 'donation-form-status', "Thank you for your generosity! We've emailed your donation label."));
    }
});
