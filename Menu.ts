import readlineSync from 'readline-sync';
import { colors } from './src/util/Colors';

export function main(){
    let opcao: number;
    let continuar = true;

    while(continuar){
        console.log(colors.bg.black, colors.fg.magenta)
        console.log("=====================================================");
        console.log("                                                     ");
        console.log("                    Pet & Pets                       ");
        console.log("                                                     ");
        console.log("=====================================================");
        console.log("                                                     ");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar Todos os Produtos             ");
        console.log("            3 - Consultar Produto por Id             ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Deletar Produto                      ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("=====================================================");
        console.log(colors.reset);

        console.log("Digite a opcao desejada: ")
        opcao = readlineSync.questionInt('')

        switch(opcao){
            case 1: // Cadastrar produto
                console.log(colors.fg.magenta, "\nCadastrar um novo Produto!\n", colors.reset)

                keypress()
                break;

            case 2: // Listar Todos os Produtos
                console.log(colors.fg.magenta, "\nLista de produtos cadastrados: \n", colors.reset)


                keypress()
                break;

            case 3:  // Consultar Produto por Id
                console.log(colors.fg.magenta, "\nConsultar Produto por Id!", colors.reset);

                keypress()
                break;

            case 4: // Atualizar dados do produto
                console.log(colors.fg.magenta, "\nAtualizar dados do Produto!", colors.reset);

                keypress()
                break;

            case 5:
                // Deletar Produto
                console.log(colors.fg.magenta, "\nDeletar um Produto!", colors.reset);

                keypress()
                break;

            case 0:
                console.log(colors.fg.magenta)
                console.log("\n            Saindo do sistema...Volte sempre!");
                console.log("     ====================================================");
                console.log(colors.reset);

                sobre();

                continuar = false;
                break;
            default:
                console.log("Opcao invalida! Tente novamente.");
        }
    }
}

function keypress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    console.log("=====================================================");
    readlineSync.prompt();
}

export function sobre(): void {
    console.log(colors.bg.black, colors.fg.magenta)
    console.log("\n         Pet & Pets - A alegria do Pet esta aqui!");
    console.log("\n     ===================================================");
    console.log("           Projeto Desenvolvido por: ");
    console.log("           Josiane Fermao - josianef@generation.org");
    console.log("           github.com/josifermaodev");
    console.log("     ====================================================");
    console.log(colors.reset);
}

main();