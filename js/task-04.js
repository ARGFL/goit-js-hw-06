let counterValue = 0;


const valueSpan =document.getElementById('value');

const decrementButton =document.querySelector('button[data-action="decrement"]');

const incrementButton= document.querySelector('button[data-action="increment"]');


decrementButton.addEventListener('click', function() {
  counterValue-=1;
  valueSpan.textContent = counterValue;
});

incrementButton.addEventListener('click', function() {
  counterValue += 1;
  valueSpan.textContent = counterValue;
});