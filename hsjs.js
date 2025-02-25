const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "-100px"
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Function to show only the selected section
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// event listeners for the navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        showSection(targetId);
    });
});

// Show the home section by default
showSection('home');

// payment form
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('booking-modal');
    const confirmationModal = document.getElementById('confirmation-modal');
    const closeButton = document.querySelectorAll('.close-button');
    const bookNowButtons = document.querySelectorAll('.cta-button');

    bookNowButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    });

    closeButton.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'none';
            confirmationModal.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        } else if (event.target === confirmationModal) {
            confirmationModal.style.display = 'none';
        }
    });

    // Handle booking form submission
    document.getElementById('booking-form').addEventListener('submit', function(event) {
        event.preventDefault();
        modal.style.display = 'none';
        confirmationModal.style.display = 'block';
    });

    // Validate mobile number input
    document.getElementById('phone').addEventListener('input', function(event) {
        const phoneInput = event.target;
        phoneInput.value = phoneInput.value.replace(/\D/g, '').substring(0, 10);
    });
});

window.addEventListener('load', function() {
    document.getElementById('loading-spinner').style.display = 'none';
});
