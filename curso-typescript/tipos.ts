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

//Never
function loopInfinito(): never {
  while (true) { }
}

function erro(mensagem: string): never {
  throw new Error(mensagem);
}

function falha() {
  return erro('Algo falhou');
}

//Union Types
function exibirNota(nota: number | string) {
  console.log(`A nota é ${nota}`);
}

exibirNota('10');
exibirNota(10);

//Alias

type Funcionario = {
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
}

//type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario[] = [{
  nome: 'Emerson',
  sobrenome: 'Vieira',
  dataNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Funcionario[]) {
  for (let funcionario of funcionarios) {
    console.log('Nome do funcionário: ', funcionario.nome);
  }
}

//Valores nulos ou opcionais
let altura: number | null = 1.6;
altura = null;

type Contato = {
  nome: string;
  telefone: string;
  telefone2?: string;
}

const contato: Contato = {
  nome: 'Emerson',
  telefone: '2423423423',
  //telefone2: null
}

//Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();
// (<number>minhaIdade).toString();

// const input = document.getElementById("numero1") as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById("numero1") as HTMLInputElement;
console.log(input.value);
