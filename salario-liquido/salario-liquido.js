function resultado() {
let nome = document.getElementById("nome").value;
let salarioBruto = parseFloat(document.getElementById("salarioBruto").value);
let gratificacao = parseFloat(document.getElementById("gratificacao").value);
let desconto = parseFloat(document.getElementById("desconto").value);
let anoDeContratacao = parseInt(document.getElementById("anoDeContratacao").value);

const anoAtual = new Date().getFullYear();
const indice = 1.20;
const taxa = 150;

let salarioLiquido = (salarioBruto + gratificacao - desconto) * indice + (anoAtual - anoDeContratacao) * taxa;
let mensagem = 'O funcionário ' + nome + ' recebe um salário líquido de R$' + salarioLiquido.toFixed(2) + '.';

document.getElementById("resultadoFinal").value = mensagem

}