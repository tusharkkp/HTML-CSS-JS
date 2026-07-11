        // Simple router to switch views
        function navigateTo(pageId) {
            const pages = ['landing-page', 'profiles-page', 'browse-page'];
            
            pages.forEach(id => {
                const element = document.getElementById(id);
                if (id === pageId) {
                    element.classList.remove('hidden-page');
                } else {
                    element.classList.add('hidden-page');
                }
            });

            // Scroll to top when changing pages
            window.scrollTo(0,0);
        }

        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('bg-black');
                navbar.classList.remove('from-black/80', 'to-transparent');
            } else {
                navbar.classList.remove('bg-black');
                navbar.classList.add('from-black/80', 'to-transparent');
            }
        });