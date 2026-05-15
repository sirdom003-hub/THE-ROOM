document.addEventListener('DOMContentLoaded', function(){
    const loginForm = document.querySelector('form');

    //submit do formulário
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede a página de recarregar

        // valores dos campos
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        //Lógica  de validação
        if (email === "teste@theroom.com" && password === "1234") {
            Swal.fire({
                title: 'guaranteed access!',
                text: 'Welcome to THE ROOM :)',
                icon: 'success',
                confirmButtonColor: '#38bdf8'
            }).then(() => {
                
                window.location.href = "home-index.html";

            });
        } else {
            Swal.fire({
                title: 'authentication error',
                text: 'E-mail or password is incorrect. Try teste@theroom.com and 1234.',
                icon: 'error',
                confirmButtonColor: '#ef4444'
            });
        }
    })});