
// Sistema de login
//Variavel com o login do user - ok
// Variavel com a senha do usuário - ok
// Variavel com o input do usuário - ok
// Variavel com o input de senha do usuário - ok
// variavel para o evento de clicar no botão - ok
// Comparar a variavel de login com a de input de login - ok
// Comparar a varial de senha com o input de senha - ok
// Exibir erro caso alguma não dê match - ok
// Testar cenários:
// Não inserir user e senha e clicar no botão para continuar (esperado que apareça um alerta de erro.) - ok
// Inserir user com letra maiuscula (esperado que ele recuse o login e peça ao usuário para conferir e tentar novamente.) - ok 
// Inserir user ou senha incorretos (esperado que apareça o erro de input e solicitar ao usuario que confira os dados inseridos e tente novamente.) - ok
// Inserir user e senha corretos (Esperado que apareça a mensagem de boas vindas ao usuário.) - ok

const user = "midmgs";
const senha = "5534";

const inputUsuario = document.getElementById('input-user');
const inputSenha = document.getElementById('input-senha');
const btnLogin = document.getElementById('btn-login') 

btnLogin.addEventListener('click', () => {

    const inputUser = inputUsuario.value;
    const inputSenhaUser = inputSenha.value;

    let conferirUser = inputUser === user;
    let conferirSenha = inputSenhaUser === senha;

    if (!inputUser && !inputSenhaUser) {

        alert ('Insira um nome de usuário e senha para continuar.');
        return;

    }

    if (conferirUser && conferirSenha) {

        console.log(conferirUser);
        console.log(conferirSenha);

        alert(`Bem vindo ${user}, login bem sucedido!`);

    } else {

        alert ("Usuário ou senha incorretos. Por favor, confira os dados e tente novamente.")

    }

});