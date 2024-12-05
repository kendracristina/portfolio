const botaoDemo = document.querySelector('#botaoDemoCalculadora');

botaoDemo.addEventListener('click', function () {
    window.location.href ='https://calculadora-churrasco-nine.vercel.app/';
});

const botaoRepositorio = document.querySelector('#botaoRepositorioCalculadora');

botaoRepositorio.addEventListener('click', function () {
    window.location.href ='https://github.com/kendracristina/CalculadoraChurrasco';
});

const botaoDemoDecodificador = document.querySelector('#botaoDemoDecodificador');

botaoDemoDecodificador.addEventListener('click', function () {
    window.location.href ='https://decodificadordetexto-zeta.vercel.app/';
});

const botaoRepositorioDecodificador = document.querySelector('#botaoRepositorioDecodificador');

botaoRepositorioDecodificador.addEventListener('click', function (){
    window.location.href ='https://github.com/kendracristina/decodificadordetexto';
});

const botaoDemoSecreto = document.querySelector('#botaoDemoSecreto');

botaoDemoSecreto.addEventListener('click', function () {
    window.location.href ='https://jogo-do-numero-secreto-nine-woad.vercel.app/';
});

const botaoRepositorioSecreto = document.querySelector('#botaoRepositorioSecreto');

botaoRepositorioSecreto.addEventListener('click', function () {
    window.location.href ='https://github.com/kendracristina/Jogo-do-numero-secreto';
});

emailjs.init('v3ycmX3ya3EiIrCQF');

document.querySelector('.contato__formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('text').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('textarea').value;

    if (!nome || nome.length > 50) {
        alert('Preenchimento obrigatório.');
        return;
   
    }

    if (!assunto || assunto.length > 50) {
        alert('Preenchimento obrigatório.');
        return;
    }

    if (!mensagem || mensagem.length > 300) {
        alert('Preenchimento obrigatório.');
        return;
    }

    if (!validarEmail(email)) {
        alert('Por favor, insira um e-mail valido.');
    return;
    }
    
    alert('Formulário enviado com sucesso, em breve sua mensagem será respondida!');
    limpar();
    
    function limpar() {
        document.getElementById('text').value ='';
        document.getElementById('email').value ='';
        document.getElementById('assunto').value='';
        document.getElementById('textarea').value='';
    }
    
   

});
function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
}    