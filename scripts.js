document.addEventListener('DOMContentLoaded', () => {
  const screen = document.getElementById('screen');  
  const buttonsContainer = document.querySelector('.container');  

  function handleButtonClick(target) {
    if (target.classList.contains('btn')) { 
      if (target.id === 'clear') {
        screen.value = ''; 
      } else if (target.id === 'equal') {
        try {
  
          screen.value = eval(screen.value);
        } catch {
          screen.value = 'Error';  
        }
      } else {
       
        screen.value += target.textContent;
      }
    }
  } 
  buttonsContainer.addEventListener('click', (event) => {
    const target = event.target;
    handleButtonClick(target);  
  });
});