// && and,  || or, ! not
const titulo = `=== SISTEMA DE GESTÃO DE CAIXA E CARTÕES ===`;

function showMenu() {

    console.log(titulo);
    console.log(`1. Registrar Entrada (Recebido)`);
    console.log(`2. Registrar Gasto (Débito)`);
    console.log(`3. Registrar Gasto no Cartão (Crédito)`);
    console.log(`4. Ver Saldo do Caixa e Faturas`);
    console.log(`5. Sair`);
}

function verifyOptionMenu() {

    while (validacao = true) {
        let userOption = 5;

        if (userOption === 1) {
            console.log(titulo);
            registroEntrada();
            break
        } else if (userOption === 2) {
            console.log(titulo);
            registroDebito();
            break
        } else if (userOption === 3) {
            console.log(titulo);
            registroCredito();
            break
        } else if (userOption === 4) {
            console.log(titulo);
            verSaldo();
            break
        } else if (userOption === 5) {
            console.log(titulo);
            sair();
            break
        } else {
            console.log(`Escolha inválida`);
        }
    }

}


function registroEntrada() {
    console.log(`nova entrada`);
}

function registroDebito() {
    console.log(`Registrar Gasto no Débito`)
}

function registroCredito() {
    console.log(`Registrar gasto no Crédito`);
}

function verSaldo() {
    console.log(`Ver Saldo do Caixa de Faturas`);
}

function registroEntrada() {
    console.log(`nova entrada`);
}

function sair() {
    console.log(`Saindo...`);
}

showMenu();
verifyOptionMenu();