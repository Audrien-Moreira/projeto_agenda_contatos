const form = document.getElementById('form-contatos');
const nome = [];
const numero = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha();
    tabelaAtualizada();

})

function adicionarLinha() {
    const inputNomeDoContato = document.getElementById('nome-contato');
    const inputNumeroDoContato = document.getElementById('tel-contato');

    if(nome.includes(inputNomeDoContato.value)){
        alert(`O nome: ${inputNomeDoContato.value} já foi inserido`)
    }else{
        nome.push(inputNomeDoContato.value);
        numero.push(parseInt(inputNumeroDoContato.value))
        
        let linha = '<tr>';
        linha += `<td> ${inputNomeDoContato.value}</td>`;
        linha += `<td> ${inputNumeroDoContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeDoContato.value = '';
    inputNumeroDoContato.value = '';
}

function tabelaAtualizada() {
    const corpoDaTabela = document.querySelector('tbody');
    corpoDaTabela.innerHTML = linhas;
}

