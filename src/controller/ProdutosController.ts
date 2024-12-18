import { Produtos } from "../model/Produtos";
import { ProdutosRepository } from "../repository/ProdutosRepository";

export class ProdutosController implements ProdutosRepository{

    //Coleção Array que vai armazenar os objetos produtos cadastrados
    private produtoController = new Array<Produtos>()

    //Controla o id dos produtos
    public id: number = 0;

    cadastrar(produto: Produtos): void {
        this.produtoController.push(produto);
        console.log("O produto foi cadastrado com sucesso!");
    }

    listarProdutos(): void {
        for (let produtos of this.produtoController){
            produtos.visualizar();
        }
    }

    procurarPorId(id: number): void {
        const buscaId = this.buscarNoArray(id);

        if (buscaId !== null){
            console.log("Produto encontrado: ");
            buscaId.visualizar();

        } else {
            console.log("Nenhum produto encontrado com esse ID!");
        }

    }

    atualizar(produto: Produtos): void {
        const buscaProduto = this.buscarNoArray(produto.id);

        if(buscaProduto !== null) {
            this.produtoController[this.produtoController.indexOf(buscaProduto)] = produto;
            console.log("O produto foi atualizado com sucesso!");
        } else {
            console.log("\nProduto nao encontrada!")
        }
    }

    deletar(id: number): void {
        const buscaProduto = this.buscarNoArray(id);

        if(buscaProduto !== null) {
            this.produtoController.splice(this.produtoController.indexOf(buscaProduto), 1);
            console.log("O produto foi deletado com sucesso!");
        } else {
            console.log("\nProduto nao encontrada!")
        }
    }

    public gerarId(): number {
        return ++this.id;
    }

    public buscarNoArray(id: number): Produtos | null {
        for (let produtos of this.produtoController){
            if (produtos.id === id){
                return produtos;
            }
        }
        return null;
    }
    
}