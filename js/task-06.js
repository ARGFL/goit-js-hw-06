const validationInput = document.getElementById('validation-input');


validationInput.addEventListener('blur', function() {
  
  const expectedLength = parseInt(validationInput.getAttribute('data-length'), 10);

 
  if (validationInput.value.length === expectedLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
    console.log('Status: Valid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
    console.log('Status: Invalid');
  }
});

