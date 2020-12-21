function enviar() {

    var nome = document.getElementById("nomeid");
    var sobnome = document.getElementById("sobnome");
    var data = document.getElementById("data");
    var email = document.getElementById("email");
    var fone = document.getElementById("fone");
    var cep = document.getElementById("cep");
    var num = document.getElementById("num");
    var comp = document.getElementById("comp");
    

    if (nome.value != "" && sobnome.value !="" && data.value !="" && email.value !="" && fone.value !="" && cep.value !="" && num.value !="") {
        alert('Obrigado sr(a) ' + nome.value + ', os seus dados foram encaminhados com sucesso!!');
    }

}