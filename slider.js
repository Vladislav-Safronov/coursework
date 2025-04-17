document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    const slidesToShow = 4;
    const slideWidth = slides[0].offsetWidth + 20; // Ширина слайда + gap
    
    // Обновляем количество отображаемых слайдов при изменении размера окна
    window.addEventListener('resize', function() {
      slideWidth = slides[0].offsetWidth + 15;
      updateSlider();
    });
    
    // Функция для обновления позиции слайдера
    function updateSlider() {
      const offset = -currentIndex * slideWidth;
      slider.style.transform = `translateX(${offset}px)`;
      
      // Скрываем/показываем кнопки навигации
      prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
      nextBtn.style.display = currentIndex >= slides.length - slidesToShow ? 'none' : 'block';
    }
    
    // Переход к предыдущему слайду
    prevBtn.addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });
    
    // Переход к следующему слайду
    nextBtn.addEventListener('click', function() {
      if (currentIndex < slides.length - slidesToShow) {
        currentIndex++;
        updateSlider();
      }
    });
    
    // Инициализация слайдера
    updateSlider();
  });