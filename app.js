// Exibe uma mensagem de boas-vindas ao usuário
alert("Seja bem vindo(a) ao Game - Número Secreto.");

// Declaração de Variáveis
let palpite; // Variável para armazenar o palpite do usuário
let tentativas = 1; // Contador de tentativas, inicia em 1
let numeroMaximo = 100; // Limite máximo para o número secreto
// Gera um número aleatório entre 1 e numeroMaximo (inclusive)
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

// **Exibe o número secreto no console no início da execução**
console.log("Número secreto: " + numeroSecreto);

// Loop principal do jogo, continua até o usuário acertar o número secreto
while (palpite != numeroSecreto) {
    // Solicita ao usuário um palpite e armazena na variável "palpite"
    palpite = parseInt( prompt(`Escolha um número entre 01 e ${numeroMaximo}:`));

    // Verifica se o palpite do usuário é igual ao número secreto
    if (palpite == numeroSecreto) {
        console.log("Usuário acertou.");
        // Encerra o loop se o usuário acertar
        break;

    } else {
        console.log("Usuário falhou.");

        // Fornece uma dica ao usuário, em caso de erro, com base no palpite
        if (palpite > numeroSecreto) {
            alert("Que pena, você errou! Dica: O Número Secreto é MENOR que seu palpite.");
        } else {
            alert("Que pena, você errou! Dica: O Número Secreto é MAIOR que seu palpite.");
        }
    }
    // Incrementa o contador de tentativas após cada palpite
    tentativas++;
}

// Determina a palavra "tentativa" ou "tentativas" com base no número de tentativas
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
// Exibe uma mensagem de parabéns ao usuário com o número secreto e o número de tentativas
alert(`Parabéns! Você acertou o Número Secreto (${numeroSecreto}) em (${tentativas}) ${palavraTentativa}!`);
