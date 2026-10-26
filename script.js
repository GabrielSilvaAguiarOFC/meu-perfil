const botaotema = document.getElementById("btn-tema");
const pagina = document.body;

botaotema.addEventListener("click", function() {
    pagina.classList.toggle("modo-escuro");
});

const botaoCurtir = document.getElementById("btn-curtir");
botaoCurtir.addEventListener("click", function() {
    botaoCurtir.classList.toggle("curtido");

    if (botaoCurtir.classList.contains("curtido")) {
        botaoCurtir.innerHTML = "​💖Pagina Curtida!​💖";
    } else {
        botaoCurtir.innerHTML = "👉Curtir Pagina​👈";
    }
});