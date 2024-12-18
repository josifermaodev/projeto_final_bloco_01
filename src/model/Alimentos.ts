import { Produtos } from "./Produtos";


export class Alimentos extends Produtos{

    private _sabor: string;


    constructor(id: number, nome: string, valor: number, tipo: number, estoque: number, sabor: string) {
        super(id, nome, valor, tipo, estoque)
        this._sabor = sabor;
    }

    public get sabor(): string {
        return this._sabor;
    }

    public set sabor(value: string) {
        this._sabor = value;
    }

    public visualizar(){
        super.visualizar();
        console.log(`  sabor do Alimento: ${this._sabor}`);
    }
}