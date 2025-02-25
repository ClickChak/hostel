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