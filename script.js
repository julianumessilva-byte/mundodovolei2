// Lógica do Quiz
function responder(correto) {
    const resultado = document.getElementById("resultado-quiz");
    if (correto) {
        resultado.innerText = "Resposta Correta! Cada time joga com 6 atletas em quadra. 🎉";
        resultado.style.color = "green";
    } else {
        resultado.innerText = "Resposta Incorreta. Tente novamente! ❌";
        resultado.style.color = "red";
    }
}
