import { Produtos } from "./Produtos";


export class Brinquedos extends Produtos{

    private _seguimento: string;


	constructor(id: number, nome: string, valor: number, tipo: number, estoque: number, seguimento: string) {
		super(id, nome, valor, tipo, estoque);
        this._seguimento = seguimento;
	}

	public get seguimento(): string {
		return this._seguimento;
	}

	public set seguimento(value: string) {
		this._seguimento = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`  Seguimento do Brinquedo: ${this._seguimento}`);
    }
}