import { Component } from '@angular/core';
import { PacientesService } from '../../servicios/pacientes.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCard, MatCardTitle,MatCardContent } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-registro-paciente',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatCard, MatCardTitle,MatCardContent,MatDatepickerModule,MatNativeDateModule, ReactiveFormsModule],
  templateUrl: './registro-paciente.component.html',
  styleUrl: './registro-paciente.component.scss'
})
export class RegistroPacienteComponent {
  pacienteForm: FormGroup;

  constructor(private fb: FormBuilder, private pacientesService: PacientesService) {
    this.pacienteForm = this.fb.group({
      dni: ['', Validators.required],
      nombre: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      numeroTelefono: ['', Validators.required]
    });
  }

  registrarPaciente() {
    if (this.pacienteForm.valid) {
      this.pacientesService.crearPaciente(this.pacienteForm.value).subscribe(
        response => {
          console.log('Paciente registrado:', response);
          this.pacienteForm.reset();
        },
        error => {
          console.error('Error al registrar paciente:', error);
        }
      );
    }
  }
}
