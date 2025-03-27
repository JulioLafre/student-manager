export class Aluno {
  constructor(
    public id: number,
    public nome: string,
    public idade: number,
    public periodo: number,
    public curso: string
  ) {}
}

export class ListaAlunos {
    constructor(
        public alunos: Aluno[]
    ) {}
}