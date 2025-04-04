
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        showSection(targetId);
    });
});


showSection('home');


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

    
    document.getElementById('booking-form').addEventListener('submit', function(event) {
        event.preventDefault();
        modal.style.display = 'none';
        confirmationModal.style.display = 'block';

        setTimeout(() => {
            this.submit();
        }, 2000);
    });

    
    document.getElementById('phone').addEventListener('input', function(event) {
        const phoneInput = event.target;
        phoneInput.value = phoneInput.value.replace(/\D/g, '').substring(0, 10);
    });
});
