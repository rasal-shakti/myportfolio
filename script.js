const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let scrollAmount = 0;
const cardWidth = 340; // Adjust this value based on your card width

prevBtn.addEventListener('click', () => {
  scrollAmount -= cardWidth;
  slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  scrollAmount += cardWidth;
  slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
});