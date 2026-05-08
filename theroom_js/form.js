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
                title: 'Acesso Garantido!',
                text: 'Bem-vindo ao THE ROOM :)',
                icon: 'success',
                confirmButtonColor: '#38bdf8'
            }).then(() => {
               
                // window.location.href = "home.html";
            });
        } else {
            Swal.fire({
                title: 'Erro de Autenticação',
                text: 'E-mail ou senha incorretos. Tente teste@theroom.com e 1234.',
                icon: 'error',
                confirmButtonColor: '#ef4444'
            });
        }
    })});