document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const message = document.getElementById('message');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); //quitar por defecto del formulario 
  
      // tomar los datos del formulario
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      
  
      // mensaje de registro exitoso
      message.textContent = `Usuario "${username}" registrado exitosamente.`;
      message.classList.remove('hidden');
  
      //limpiar formulario
      form.reset();

      //redireccionar
    setTimeout(function() {
      window.location.href = 'index.html'; // aqui redirecciono al principal
    }, 2000); //un pequeño retardo para ir a la página
  });
    });
  
  