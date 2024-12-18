import readlineSync from 'readline-sync';
import { colors } from './src/util/Colors';
import { Alimentos } from './src/model/Alimentos';
import { Brinquedos } from './src/model/Brinquedos';
import { ProdutosController } from './src/controller/ProdutosController';

export function main(){

    let opcao, tipo, valor, estoque, id: number;
    let nome, sabor, seguimento: string;
    const categorias = ['Alimentos', 'Brinquedos']

    const produto = new ProdutosController();

    // Teste de dados Alimentos
    produto.cadastrar(new Alimentos(produto.gerarId(), "Petisco Premier Cookie", 1, 10.49, 25, "Carne"))
    produto.cadastrar(new Alimentos(produto.gerarId(), "Ração Golden Power ", 1, 169.90, 12, "Frango e Arroz"))

    // Teste de dados brinquedos
    produto.cadastrar(new Brinquedos(produto.gerarId(), "Chalesco Sapo para Cães", 2, 43.99, 25, "Pelucia"))
    produto.cadastrar(new Brinquedos(produto.gerarId(), "Jambo Mordedor", 2, 10.49, 25, "Corda"))
    produto.cadastrar(new Brinquedos(produto.gerarId(), "Jambo Mordedor", 2, 10.49, 25, "Corda"))

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

                //nome do produto
                console.log("Digite o nome do Produto: ");
                nome = readlineSync.question('');

               
                //Categoria do produto
                console.log("\n Escolha a categoria de Produtos desejada:");
                console.log("===========================================");
                tipo = readlineSync.keyInSelect(categorias, "", {cancel:false}) + 1;


                //valor do produto
                console.log("Digite o valor do Produto: ");
                valor = readlineSync.questionFloat();
                

                //quantidade em estoque
                console.log("Digite a quantidade em estoque: ");
                estoque = readlineSync.questionInt();

                switch (tipo) {
                    case 1:
                        // Criar Medicamento
                        console.log("Digite o sabor do alimento: ");
                        sabor = readlineSync.question('');
                        produto.cadastrar(new Alimentos(produto.gerarId(), nome, tipo, valor, estoque, sabor));

                        break;

                    case 2:
                        // Criar Cosmetico
                        console.log("Digite o seguimento do Brinquedo: ");
                        seguimento = readlineSync.question('');
                        produto.cadastrar(new Brinquedos(produto.gerarId(), nome, tipo, valor, estoque, seguimento));

                        break;
                    default:
                        console.log("Opcao invalida! Tente novamente.");
                        break;
                }

                keypress()
                break;

            case 2: // Listar Todos os Produtos
                console.log(colors.fg.magenta, "\nLista de produtos cadastrados: \n", colors.reset)

                produto.listarProdutos();

                keypress()
                break;

            case 3:  // Consultar Produto por Id
                console.log(colors.fg.magenta, "\nConsultar Produto por Id!", colors.reset);

                console.log("Digite o Id do Produto: ");
                id = readlineSync.questionInt('');

                produto.procurarPorId(id);

                keypress()
                break;

            case 4: // Atualizar dados do produto
                console.log(colors.fg.magenta, "\nAtualizar dados do Produto!", colors.reset);

                // Produto a ser atualizado
                console.log("\nDigite o Id do Produto que deseja atualizar: ");
                id = readlineSync.questionInt('');

                let produtoAtualizar = produto.buscarNoArray(id)

                if(produtoAtualizar){
                    console.log("Digite o novo nome do Produto: ");
                    nome = readlineSync.question('');
                    console.log("Digite o novo valor do Produto: ");
                    valor = readlineSync.questionFloat();
                    console.log("Digite a nova quantidade em estoque: ");
                    estoque = readlineSync.questionInt();

                    

                    switch (produtoAtualizar.tipo) {
                        case 1:
                            // Atualizar Alimento
                            console.log("Digite o novo Sabor do Alimento: ");
                            sabor = readlineSync.question('');
                            produto.atualizar(new Alimentos(id, nome, produtoAtualizar.tipo, valor, estoque, sabor));
                            break;
                        case 2:
                            // Atualizar Brinquedo
                            console.log("Digite o novo Seguimento do Brinquedo: ");
                            seguimento = readlineSync.question('');
                            produto.atualizar(new Brinquedos(id, nome, produtoAtualizar.tipo, valor, estoque, seguimento));
                            break;
                    } 
                }else {
                    console.log("Produto não encontrado!");
                }


                keypress()
                break;

            case 5: // Deletar Produto
                console.log(colors.fg.magenta, "\nDeletar um Produto!", colors.reset);

                // Produto a ser deletado
                console.log("\nDigite o Id do Produto que deseja deletar: ");
                id = readlineSync.questionInt('');

                produto.deletar(id)

                keypress()
                break;

            case 0: // Sair do Sistema
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