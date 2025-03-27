import { Component } from '@angular/core';
import { ListaAlunos } from '../shared/models/Aluno.model';
import { Aluno } from '../shared/models/Aluno.model';

@Component({
  selector: 'app-lista-alunos',
  imports: [],
  templateUrl: './lista-alunos.component.html',
  styleUrl: './lista-alunos.component.css',
})
export class ListaAlunosComponent {
  alunos: ListaAlunos = new ListaAlunos([
    new Aluno(1, 'João Silva', 22, 3, 'Engenharia de Software'),
    new Aluno(2, 'Maria Oliveira', 21, 2, 'Ciência da Computação'),
    new Aluno(3, 'Carlos Souza', 23, 4, 'Sistemas de Informação'),
    new Aluno(4, 'Ana Santos', 20, 1, 'Engenharia de Computação'),
  ]);

  constructor() {}

  excluirAlunos(id: number) {
    this.alunos.alunos = this.alunos.alunos.filter(aluno => aluno.id !== id);
  }
}


