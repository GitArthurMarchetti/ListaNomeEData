let id = 1;
let idElemento = 1;
let areaTabela = document.getElementById("tabela")
let user = document.getElementById("inputNomeElemento");
let date = document.getElementById("inputDate");

function enviar() {

    if(user.value === ""){
        alert("adicione um nome")
    }else{
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
    if (bancoDeDados == null) {
        bancoDeDados = [];
    }
    // DADOS
    let dados = {
        nome: user.value,
        data: date.value
    }
    bancoDeDados.push(dados);
    localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados)); 
    console.log(dados)

    user.value = '';
    date.value = '';
    atualizaTabela();
 }
}


function atualizaTabela() {
    let elements = [];
    elements = JSON.parse(localStorage.getItem("bancoDeDados"));
    areaTabela.innerHTML = ''; // Limpa o conteúdo da tabela
    if (elements == null) {
        elements = [];
    }
    for (let id = 1; id <= elements.length; id++){
        const dados = elements[id - 1];
        areaTabela.innerHTML += (`
        <tr>
        <td>
            ${id}
        </td>
        <td>
            ${dados.nome}
        </td>
        <td>
            ${dados.data}
        </td>
        <td>Ativo</td>
        <td>
        <a id="modal-924785" href="#modal-container-924785" role="button" class="btn" data-toggle="modal"><button class="btn btn-warning">Editar</button></a><button onclick="deletar(${id})" class="btn btn-danger">Excluir</button></td>
        </tr>
        `)    
        console.log(elements.length)
    }
}

function deletar(id) {
    let elements = JSON.parse(localStorage.getItem("bancoDeDados"));
    areaTabela.innerHTML = '';  // Limpa o conteúdo da tabela
    if (elements == null) {
        elements = [];
    }
    areaTabela.innerHTML == ''; // Limpa o conteúdo da tabela

    if (id >= 1 && id <= elements.length) {
        elements.splice(id - 1, 1); // Remove o elemento com base no ID
        localStorage.setItem("bancoDeDados", JSON.stringify(elements));
        atualizaTabela();
    }
}