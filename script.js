/* 
Faça um algoritmo onde o usuário informe o nome e 
4 notas de dois alunos e mostre as 
médias desses dois alunos.
*/ 

var nome = window.prompt("Informe o nome do aluno:");
//Guardar a primeira nota
var nota1 = window.prompt("Digite a nota 1:");
//converte a nota1 em texto para decimal
nota1 = parseFloat(nota1);
//Guardar a segunda nota
var nota2 = window.prompt("Digite a nota 2:");
//converte a nota2 em texto para decimal
nota2 = parseFloat(nota2);
//Guardar a terceira nota
var nota3 = window.prompt("Digite a nota 3:");
//converte a nota3 em texto para decimal
nota3 = parseFloat(nota3);
//Guardar a quarta nota
var nota4 = window.prompt("Digite a nota 4:");
//converte a nota4 em texto para decimal
nota4 = parseFloat(nota4);
//calculo a média das quatro notas
var media = (nota1 + nota2 + nota3 + nota4)/4
//Gero