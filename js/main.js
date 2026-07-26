// Browner Designs — shared site behavior

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Netlify form — AJAX submit so the visitor stays on the page
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.getElementById('form-status');
      var data = new FormData(form);

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString()
      })
        .then(function (response) {
          if (response.ok) {
            form.reset();
            form.hidden = true;
            status.textContent = "Thanks — your message is in! I'll reply within a couple of business days.";
            status.className = 'form-status -success';
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .catch(function () {
          status.textContent = "Something went wrong sending that. Please email contactbrownerdesigns@gmail.com directly.";
          status.className = 'form-status -error';
        });
    });
  }
});
