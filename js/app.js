let totalGeral; 
limpar();

function adicionar() {
    // calculando o preco 
    let produto = document.getElementById( 'produto').value; // produto
    let quant = document.getElementById('quantidade').value; // quantidade
    let nomeProduto = produto.split('-')[0]; 
    let valorProduto = produto.split('R$')[1];
    let preco = quant * valorProduto;
  //////////////////////////////////////////////////
   
  // carrinho
  let carrinho = document.getElementById('lista-produtos'); 
  let totalCarrinho= document.getElementById('valor-total');

  carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
  <span class="texto-azul">${quant}x</span> ${nomeProduto} <span class="texto-azul">${valorProduto}</span>
</section>`;

totalGeral = totalGeral + preco; 
totalCarrinho.innerHTML = ` Total: <span class="texto-azul" id="valor-total">R$${totalGeral}</span>`; 

document.getElementById('quantidade').value = '';

}


function limpar() {
    totalGeral = 0;
    totalCarrinho= document.getElementById('valor-total').innerHTML =  ' R$00';
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('quantidade').value = 0;

}