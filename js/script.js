function Enviar() {

    var nome = document.getElementById("nomeId");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' a sua mensagem foi enviada');
    }

}