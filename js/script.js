const ratingForm = document.querySelector('.options');
const ratingCard = document.getElementById('rating');
const thankYouCard = document.getElementById('thank-you');
const userValueElement = document.querySelector('.userValue');

ratingForm.addEventListener('submit', function (event) {
  event.preventDefault(); 

  const selectedValue = document.querySelector('input[name="rate"]:checked');
  
  userValueElement.textContent = selectedValue ? selectedValue.value : '0'; 

  ratingCard.style.opacity = '0';
  ratingCard.style.transform = 'translateY(50px)';

  setTimeout(function() {
    ratingCard.style.display = 'none';
    thankYouCard.style.display = 'block';
    thankYouCard.style.opacity = '1';
    thankYouCard.style.transform = 'translateY(0)';
  }, 500);
});