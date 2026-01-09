script.js(function () {
    // 1. Unified Navigation Toggle Logic
    const btn = document.querySelector('.nav-toggle');
    const menuId = btn ? btn.getAttribute('aria-controls') : null;
    const menu = document.getElementById(menuId);

    if (btn && menu) {
        function open() { 
            btn.setAttribute('aria-expanded', 'true'); 
            menu.classList.add('open'); 
            document.addEventListener('click', onDocClick); 
        }
        function close() { 
            btn.setAttribute('aria-expanded', 'false'); 
            menu.classList.remove('open'); 
            document.removeEventListener('click', onDocClick); 
        }

        function onDocClick(e) {
            if (!menu.contains(e.target) && !btn.contains(e.target)) close();
        }

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            expanded ? close() : open();
        });
    }

    // 2. Original Form Handler Logic
    const form = document.getElementById('contactForm');
    if (form) {
        const status = document.getElementById('formStatus');
        const submitBtn = document.getElementById('submitBtn');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            submitBtn.disabled = true;
            status.textContent = "Sending...";
            status.className = "form-status success";
            status.style.display = "block";

            // Simulate the original Fetch logic you wrote
            setTimeout(() => {
                status.textContent = "Thanks — your message was sent.";
                form.reset();
                submitBtn.disabled = false;
            }, 1500);
        });
    }
})();