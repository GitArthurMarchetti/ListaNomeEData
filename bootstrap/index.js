let id = 1;
let areaTabela = document.getElementById("tabela")
let user = document.getElementById("inputNomeElemento");
let date = document.getElementById("inputDate");

function enviar() {

    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
    if (bancoDeDados == null) {
        bancoDeDados = [];
    }
    // DADOS
    let element = {
        nome: user.value,
        data: date.value
    }
    bancoDeDados.push(element);
    localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados)); //Transforma o JSON banco de dados em variavel 
    alert("Usuario cadastrado com sucesso! ✅");  //Usuario Cadastrado  
    console.log(element)
    atualizaTabela();
}


function atualizaTabela() {
    let elements = [];
    elements = JSON.parse(localStorage.getItem("bancoDeDados"));
    if (elements == null) {
        elements = []
    }
    for (let element of elements) {
        areaTabela.innerHTML += (`
        <tr>
        <td>
            ${id}
        </td>
        <td>
            ${element.nome}
        </td>
        <td>
            ${element.data}
        </td>
        <td>Ativo</td>
        <td><button onclick="deletar()" class="btn btn-danger">Excluir</button></td>
        </tr>
        `)
    }
}
