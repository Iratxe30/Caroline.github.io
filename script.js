const si = document.getElementById('si');
const no = document.getElementById('no');
const gif = document.getElementById('gif');
const contenedor = document.getElementById('contenedor');
const mensaje = document.getElementById('mensaje');
let contador = 0;

no.addEventListener('mouseover', function() {
    if (contador >= 2) {
        const maxX = window.innerWidth - no.offsetWidth;
        const maxY = window.innerHeight - no.offsetHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        no.style.position = 'absolute';
        no.style.left = randomX + 'px';
        no.style.top = randomY + 'px';
    }
});

no.addEventListener('click', function() {
    contador++;
    if (contador === 1) {
        gif.src = "https://i.pinimg.com/originals/99/71/73/99717305289e38ccdf58d08939871634.gif"; // Primer gif
        mensaje.innerHTML = "¿Estás segura?";
    } else if (contador === 2) {
        gif.src = "https://i.pinimg.com/originals/8d/6a/0b/8d6a0b38df966b0ae3227d6aa5a5f401.gif"; // Segundo gif
        mensaje.innerHTML = "¿Estás segurísima, Caroline?";
    }
});

si.addEventListener('click', function() {
    contenedor.innerHTML = "<h1>¡Muchas gracias, mi amor!</h1><img src='https://i.pinimg.com/originals/f6/0b/3e/f60b3e0ebdf7f27e75dc19f0f97e5f0e.gif' alt='Gif de agradecimiento'>"; // Tercer gif
});