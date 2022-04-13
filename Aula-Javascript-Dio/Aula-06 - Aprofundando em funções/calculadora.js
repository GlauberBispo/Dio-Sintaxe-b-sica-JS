function calculadora() {
    const operacao = Number(prompt("escolha uma operação:\n 1-Soma(+) \n 2-Subtração(-)\n 3-Multiplicação(*)\n 4-Divisão real(/)\n 5-Divisão inteira(%)\n 6-Potenciação(**)"));

    if (!operacao || operacao >= 7) {
        alert('ERRO! Operação inválida!');
        calculadora();
    } else { 

        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        if (!n1 || !n2) {
            alert ('ERRO! Parâmetros inválidos!')
            calculadora()
        }else{
        function soma() {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`)
            novaOperacao()
        }

        function subtracao() {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`)
            novaOperacao()
        }

        function multiplicacao() {
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`)
            novaOperacao()
        }

        function divreal() {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`)
            novaOperacao()
        }

        function divinteiro() {
            resultado = n1 % n2;
            alert(`O resto da divisão entre ${n1} e ${n2} é ${resultado}`)
            novaOperacao()
        }

        function potenciacao() {
            resultado = n1 ** n2;
            alert(`${n1} elevado a ${n2}ª potência é igaul a ${resultado}`);
            novaOperacao()
        }

        function novaOperacao() {
            let opcao = prompt('Deseja fazer outra operação?\n 1-Sim\n 2-Não');
            if (opcao == 1) {
                calculadora();
            }else if (opcao == 2) {
                alert ('Até mais');
            }else {
                alert('Digite uma opção válida!')
                novaOperacao()
            }
        }
        }

        //com condicional (se)

       /*  if (operacao == 1) {
            soma();
        }else if (operacao == 2) {
            subtracao();
        }else if (operacao == 3) {
            multiplicacao();
        }else if (operacao == 4) {
            divreal();
        }else if (operacao == 5) {
            divinteiro();
        }else if (operacao == 6) {
            potenciacao();
        } */

        // Com switch
        
        switch  (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divreal();
                break;
            case 5:
                divinteiro();
                break;
            case 6:
                potenciacao();
                break;
        }
    }
}
    calculadora();
    