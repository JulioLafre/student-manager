import { Routes } from '@angular/router';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';

export const routes: Routes = [
    {path: 'lista-alunos', component: ListaAlunosComponent},
    {path: '', redirectTo: 'lista-alunos', pathMatch: 'full'}
];
