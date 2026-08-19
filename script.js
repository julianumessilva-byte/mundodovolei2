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

// Lógica do Mini Jogo: Contador de Toques
let toqueCount = 0;

function darToque() {
    toqueCount++;
    const contador = document.getElementById("contador");
    const msg = document.getElementById("msg-jogo");
    
    contador.innerText = toqueCount;

    if (toqueCount === 3) {
        msg.innerText = "🏐 A bola tem que ir para o outro lado agora! (Ponto ou Passagem)";
        msg.style.color = "blue";
    } else if (toqueCount > 3) {
        msg.innerText = "⚠️ FALTA! Mais de 3 toques permitidos no mesmo lado! ZERANDO...";
        msg.style.color = "red";
        toqueCount = 0;
        setTimeout(() => {
            contador.innerText = toqueCount;
            msg.innerText = "";
        }, 2000);
    } else {
        msg.innerText = "Toque válido! Continue a jogada.";
        msg.style.color = "black";
    }
}
