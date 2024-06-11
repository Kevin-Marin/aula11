let numeroSecreto = Math.floor(Math.random() * 100 + 1); //gera um número aleatório de 1 a 100.
let numeroUsuario;
let tentativas = 10;

console.log("Digite um número de 1 a 100");

process.stdin.on("data", function (data) {
  numeroUsuario = Number(data.toString().trim());
  if (Number.isNaN(numeroUsuario)) {
    //caso o usuário digite uma palavra, uma mensagem será impressa.
    console.log("Digite um número, não uma palavra.");
  } else if (numeroUsuario === numeroSecreto) {
    //se o usuário acertar o número secreto, uma mensagem aparecerá e encerrará o processo.
    console.log("Parabéns, acertou!");
    process.exit();
  } else if (numeroUsuario > numeroSecreto) {
    //se o número de entrada for maior que o número secreto, aparecerá uma dica.
    console.log(`O número secreto é menor que ${numeroUsuario}.`);
  } else {
    console.log(`O número secreto é maior que ${numeroUsuario}.`); //caso seja menor, aparecerá uma dica diferente.
  }
  if (numeroUsuario != numeroSecreto) {
    //se a entrada do usuario for diferente do numero secreto irá diminuir o número de tentativas restantes.
    tentativas--;
    if (tentativas === 0) {
      console.log(`Game Over! O número secreto era: ${numeroSecreto}`);
      process.exit();
    } else {
      console.log(`Você tem mais ${tentativas} tentativas`);
    }
  }
});
