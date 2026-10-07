document.getElementById('contact-form').addEventListener('submit', function(e) {
    // 1. Evitamos que el formulario se envíe de inmediato (para que la alerta luzca primero)
    e.preventDefault(); 

    // 2. Mostramos la alerta de SweetAlert2
    Swal.fire({
        title: '¡Mensaje enviado!',
        text: 'Nos pondremos en contacto contigo muy pronto.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#429a91' // Coincide con la paleta de colores de tu diseño
    }).then((result) => {
        // 3. (Opcional) Acciones a realizar cuando el usuario hace clic en "Aceptar"
        if (result.isConfirmed) {
            // Si usas Formspree o un envío tradicional por backend, puedes enviar el formulario aquí:
            // this.submit();
            
            // O simplemente limpiar los campos del formulario:
            this.reset();
        }
    });
});