document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button[aria-expanded]');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        const controlsId = button.getAttribute('aria-controls');
        const controls = document.getElementById(controlsId);
        
        // Toggle aria-expanded attribute on button
        button.setAttribute('aria-expanded', !expanded);
        
        // Toggle aria-hidden attribute on the controls
        controls.setAttribute('aria-hidden', expanded);
      });
    });
  });
  