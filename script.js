//Comentário em linha
//Exibir no terminal
console.log("Olá mundo!");
//Exibir no navegador
document.write("Olá navegador.");
//um alerta
alert("Alerta de confirmação!");


//string

var nome = window.prompt("Informe o nome");
var nota1 = window.prompt("Digite a Nota 1:");
nota1 = parseFloat(nota1);
var nota2 = window.prompt("Digite a Nota 2:");
nota2 = parseFloat(nota2);

var media = (nota1 + nota2)/2;

var mensagem = nome +