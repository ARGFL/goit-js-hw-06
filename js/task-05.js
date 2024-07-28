const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');


nameInput.addEventListener('input', function() {
  
  const currentValue= nameInput.value.trim();
  
  
  if (currentValue) {
    nameOutput.textContent= currentValue;
  } else {
    nameOutput.textContent= 'Anonymous';
  }
});