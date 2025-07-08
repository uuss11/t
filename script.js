document.getElementById('lang-toggle').addEventListener('click', () => {
  const html = document.documentElement;
  const isArabic = html.getAttribute('lang') === 'ar';

  if (isArabic) {
    html.setAttribute('lang', 'en');
    html.setAttribute('dir', 'ltr');
    document.querySelector('.header h1').textContent = "Ahmed Mohamed";
    document.querySelector('.hero h2').textContent = "Welcome to my personal website!";
    document.querySelector('.hero p').textContent = "Frontend developer and lover of beautiful, functional design.";
    document.querySelectorAll('.nav a')[0].textContent = "About";
    document.querySelectorAll('.nav a')[1].textContent = "Skills";
    document.querySelectorAll('.nav a')[2].textContent = "Projects";
    document.querySelectorAll('.nav a')[3].textContent = "Contact";
    document.getElementById('lang-toggle').textContent = "AR";

  } else {
    html.setAttribute('lang', 'ar');
    html.setAttribute('dir', 'rtl');
    document.querySelector('.header h1').textContent = "أحمد محمد";
    document.querySelector('.hero h2').textContent = "مرحباً بك في موقعي الشخصي!";
    document.querySelector('.hero p').textContent = "مطور واجهات أمامية ومحب للتصميم الجميل والوظيفي.";
    document.querySelectorAll('.nav a')[0].textContent = "نبذة";
    document.querySelectorAll('.nav a')[1].textContent = "المهارات";
    document.querySelectorAll('.nav a')[2].textContent = "المشاريع";
    document.querySelectorAll('.nav a')[3].textContent = "اتصل بي";
    document.getElementById('lang-toggle').textContent = "EN";
  }
});

// Form submission (mock)
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("تم استلام رسالتك!");
  document.getElementById('contact-form').reset();
});
