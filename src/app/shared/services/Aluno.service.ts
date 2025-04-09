// src/app/shared/services/aluno.service.ts
import { Injectable } from '@angular/core';
import { Aluno } from '../models/Aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private alunos: Aluno[] = [];
  private nextId = 1;

  constructor() { }

  getAlunos(): Aluno[] {
    return this.alunos;
  }

  getAlunoById(id: number): Aluno | undefined {
    return this.alunos.find(aluno => aluno.id === id);
  }

  addAluno(aluno: Aluno): void {
    aluno.id = this.nextId++;
    this.alunos.push(aluno);
  }

  updateAluno(aluno: Aluno): void {
    const index = this.alunos.findIndex(a => a.id === aluno.id);
    if (index !== -1) {
      this.alunos[index] = aluno;
    }
  }

  deleteAluno(id: number): void {
    this.alunos = this.alunos.filter(aluno => aluno.id !== id);
  }

  searchAlunos(term: string): Aluno[] {
    return this.alunos.filter(aluno => 
      aluno.nome.toLowerCase().includes(term.toLowerCase())
    );
  }

  sortAlunos(by: 'nome' | 'idade'): Aluno[] {
    return [...this.alunos].sort((a, b) => {
      if (a[by] < b[by]) return -1;
      if (a[by] > b[by]) return 1;
      return 0;
    });
  }
}