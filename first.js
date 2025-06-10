
document.addEventListener('DOMContentLoaded', () => {
  
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();

      const targetId = link.getAttribute('href');   
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

 
  const orderForm = document.querySelector('form');   

  if (orderForm) {
    orderForm.addEventListener('submit', event => {
      event.preventDefault();

      
      const nameInput     = orderForm.querySelector('input[type="text"]');
      const emailInput    = orderForm.querySelector('input[type="email"]');
      const productSelect = orderForm.querySelector('select');
      const quantityInput = orderForm.querySelector('input[type="number"]');

      const name     = nameInput.value.trim();
      const email    = emailInput.value.trim();
      const product  = productSelect.value;
      const quantity = Number.parseInt(quantityInput.value, 10);

      
      if (!name || !email || !product || Number.isNaN(quantity) || quantity <= 0) {
        window.alert('Please fill in all fields correctly.');
        return;
      }

      
      window.alert(`Thank you, ${name}! Your order for ${quantity} × ${product} has been placed.`);

      orderForm.reset();
    });
  }
});
