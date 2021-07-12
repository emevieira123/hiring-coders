//Boolean
const contaPaga: boolean = false;

//Number
const idade: number = 31;
const avaliacao: number = 5.5;

//String
const nome: string = 'Emerson';

//Array
const idades: number[] = [23, 28, 45];
const idades2: Array<number> = [23, 28, 45];

//Tuple
let jogadores: [string, string, string];
jogadores = ['Emerson', 'Fulano', 'Ciclano'];

//Enum
enum StatusAprovacao {
  Aprovado = '001',
  Pendente = '002',
  Rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

//Any
const retornoDaAPI: any[] = [123, 'Emerson', false];
const retornoDaAPI2: any = {
  //....
};

//Void
function printarNaTela(msg: string): void {
  console.log(msg);
}

//Null e Undefined
const u: undefined = undefined;
const n: null = null;

//Object
function criar(objecto: object) {
  //...
}
criar({
  propriedade: 1,
})
//criar('Emerson') //Dá erro
