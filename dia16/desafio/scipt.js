
var nome = prompt("Digite seu Nome  ");
var numero = prompt(nome + " Digite um numero para comparar com 'n'");
var n = numero;
var v = (numero === n);
var soma = parseInt(numero) + parseInt(n);
var subtra = numero - n;
var divs = numero%n;
var quadrad = numero**2;
document.write("1.Seja bem vindo...: " + nome + "<br>");
document.write("2.Você digitou o numero...: "+ "("+ numero +")" + "<br>");
document.write("3.O retorno da comparação booleana é...: "+ v + "<br>");
document.write("4.A soma dos valores é...: " + soma + "<br>");
document.write("5.A subtração dos valores é...: " + subtra + "<br>");
document.write("6.O resto da divsão é...: " + divs + "<br>");
document.write("7.O quadrado do numero digitado é...: " + quadrad + "<br>");

