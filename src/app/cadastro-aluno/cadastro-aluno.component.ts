// src/app/cadastro-aluno/cadastro-aluno.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../shared/models/Aluno.model';
import { AlunoService } from '../shared/services/Aluno.service';

@Component({
  imports: [
    ReactiveFormsModule,
  ],
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
})
export class CadastroAlunoComponent implements OnInit {
  alunoForm: FormGroup;
  isEdit = false;
  alunoId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private alunoService: AlunoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      idade: ['', [Validators.required, Validators.min(1)]],
      curso: ['', Validators.required],
      periodo: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEdit = true;
        this.alunoId = +params['id'];
        const aluno = this.alunoService.getAlunoById(this.alunoId);
        if (aluno) {
          this.alunoForm.patchValue(aluno);
        }
      }
    });
  }

  onSubmit(): void {
    if (this.alunoForm.valid) {
      const aluno: Aluno = this.alunoForm.value;
      
      if (this.isEdit && this.alunoId) {
        aluno.id = this.alunoId;
        this.alunoService.updateAluno(aluno);
      } else {
        this.alunoService.addAluno(aluno);
      }
      
      this.router.navigate(['/lista']);
    }
  }

  onCancel(): void {
    this.router.navigate(['/lista']);
  }
}