// src/app/lista-alunos/lista-alunos.component.ts
import { Component, OnInit } from '@angular/core';
import { Aluno } from '../shared/models/Aluno.model';
import { AlunoService } from '../shared/services/Aluno.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../shared/components/confirm-modal/confirm-modal.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [
    FormsModule
  ],
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent implements OnInit {
  alunos: Aluno[] = [];
  searchTerm = '';
  sortBy: 'nome' | 'idade' | '' = '';

  constructor(
    private alunoService: AlunoService,
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.alunos = this.alunoService.getAlunos();
  }

  search(): void {
    if (this.searchTerm) {
      this.alunos = this.alunoService.searchAlunos(this.searchTerm);
    } else {
      this.alunos = this.alunoService.getAlunos();
    }
  }

  sort(by: 'nome' | 'idade'): void {
    this.sortBy = by;
    this.alunos = this.alunoService.sortAlunos(by);
  }

  deleteAluno(id: number): void {
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.title = 'Confirmar Exclusão';
    modalRef.componentInstance.message = 'Deseja realmente excluir este aluno?';
    
    modalRef.result.then((result) => {
      if (result === 'confirm') {
        this.alunoService.deleteAluno(id);
        this.search(); // Atualiza a lista
      }
    }).catch(() => {});
  }

  editAluno(id: number): void {
    this.router.navigate(['/cadastro', id]);
  }

  novoAluno(): void {
    this.router.navigate(['/cadastro']);
  }
}