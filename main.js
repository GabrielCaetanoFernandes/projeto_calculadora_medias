const form = document.getElementById('form-atv');
const imgApr= '<img src="./images/aprovado.png" alt="Emoji Festejando.">';
const imgRep= '<img src="./images/reprovado.png" alt="Emoji decepcionado.">';
const atv = [];
const notas = [];
const spanAppr = '<span class="resultado aprovado">Aprovado</span>';
const spanRep = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota mínima:'))

let linhas = ' ';
form.addEventListener('submit', function(e){
    e.preventDefault();

    addLinha();
    atualizaTabela();
    atualizaMediaFinal();
})

function addLinha(){
    const nomeAtv = document.getElementById('nome-atv');
    const notaAtv = document.getElementById('nota-atv');

    if(atv.includes(nomeAtv.value)){
        alert(`A atividade ${nomeAtv.value} já foi inserida.`)
    }else{
        atv.push(nomeAtv.value);
        notas.push(parseFloat(notaAtv.value));

        let linha = '<tr>';
        linha += `<td>${nomeAtv.value}</td>`;
        linha += `<td>${notaAtv.value}</td>`;
        linha += `<td>${notaAtv.value >= notaMinima ? imgApr : imgRep}</td>`
        linha += `</tr>`;

        linhas += linha;
    }

    nomeAtv.value = ' ';
    notaAtv.value = ' ';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAppr : spanRep;
}

function calculaMediaFinal(){
    let somaNotas = 0;

    for(let i = 0; i < notas.length; i++){
        somaNotas += notas[i];

    return somaNotas / notas.length;
    }
}