document.addEventListener('DOMContentLoaded', function() {
    const landingText = document.querySelector('.landing-text');
  
    setTimeout(function() {
      landingText.classList.add('show');
    }, 2000); // 2 saniye (2000 milisaniye) sonra metni göstermeye başlar
  });
  