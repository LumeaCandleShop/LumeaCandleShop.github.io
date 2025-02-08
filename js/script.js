// script.js

// Toggle question answers
const questionItems = document.querySelectorAll('.question-item');

questionItems.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        const answer = item.querySelector('p');
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
    });
});