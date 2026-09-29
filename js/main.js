/* FlowTask — landing page behaviour */

document.addEventListener('DOMContentLoaded', function () {

  /* Header navigation */

  document.querySelectorAll('.nav-item').forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      var targetId = item.getAttribute('data-target') || (item.getAttribute('href') ? item.getAttribute('href').replace('#', '') : '');
      var section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* Sign-up flow */

  function startSignup() {
    // Pre-compute the plan comparison so the trial section renders instantly.
    var trial = document.getElementById('trial');
    if (trial) {
      trial.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = 'index.html#trial';
    }
  }

  var headerCta = document.getElementById('header-cta');
  if (headerCta) {
    headerCta.addEventListener('click', startSignup);
  }

  var heroCta = document.getElementById('hero-cta');
  if (heroCta) {
    heroCta.addEventListener('click', startSignup);
  }

  /* Trial form */

  var trialSubmit = document.getElementById('trial-submit');
  if (trialSubmit) {
    trialSubmit.addEventListener('click', function (e) {
      e.preventDefault();
      var form = document.getElementById('trial-form');
      var email = form.querySelector('input[name="email"]');

      if (!email.value) {
        email.style.boxShadow = '0 0 0 2px #fca5a5';
        return;
      }

      form.innerHTML = '<p>Thanks — check your inbox, the workspace is being created.</p>';
    });
  }

  /* FAQ accordion */

  document.querySelectorAll('.faq__q').forEach(function (question) {
    question.addEventListener('click', function () {
      var isOpen = question.parentElement.classList.toggle('is-open');
      question.setAttribute('aria-expanded', isOpen);
    });
  });

  /* Seasonal promo bar */

  window.addEventListener('load', function () {
    var promo = document.createElement('div');
    promo.className = 'promo';
    promo.innerHTML = '<strong>Autumn offer</strong> 3 months of Pro for the price of one. <a href="#pricing">See plans</a>';
    document.body.insertBefore(promo, document.body.firstChild);
  });

});