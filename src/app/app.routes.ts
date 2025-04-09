// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';

export const routes: Routes = [
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
  { path: 'lista', component: ListaAlunosComponent },
  { path: 'cadastro', component: CadastroAlunoComponent },
  { path: 'cadastro/:id', component: CadastroAlunoComponent },
  { path: '**', redirectTo: '/lista' }
];