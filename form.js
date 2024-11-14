// Inicializa EmailJS
(function() {
    emailjs.init("YOUR_USER_ID"); // Reemplaza YOUR_USER_ID con tu User ID de EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    // Obtiene los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;

    // Envía el correo electrónico
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        to_email: "lopezart696@gmail.com", // Asegúrate de incluir esto si tu plantilla lo requiere
        nombre: nombre,
        email: email,
        telefono: telefono,
        mensaje: mensaje
    })
    .then(function(response) {
        console.log('Éxito!', response.status, response.text);
        alert("¡Mensaje enviado con éxito!");
        document.getElementById('contact-form').reset(); // Reinicia el formulario
    }, function(error) {
        console.log('Error:', error);
        alert("Hubo un error al enviar el mensaje.");
    });
});