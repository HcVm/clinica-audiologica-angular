import { Component } from '@angular/core';
import { MatCard, MatCardTitle,MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { Paciente } from '../../modelos/paciente';
import { PacientesService } from '../../servicios/pacientes.service';


@Component({
  selector: 'app-lista-pacientes',
  standalone: true,
  imports: [MatCard, MatCardTitle,MatCardContent,MatIcon,MatTableModule],
  templateUrl: './lista-pacientes.component.html',
  styleUrl: './lista-pacientes.component.scss'
})
export class ListaPacientesComponent {
  pacientes: Paciente[] = [];
  displayedColumns: string[] = ['nombre', 'fechaNacimiento', 'acciones'];
  dataSource = new MatTableDataSource<Paciente>(this.pacientes);

  constructor(private pacientesService: PacientesService) {
    this.cargarPacientes();
  }

  cargarPacientes() {
    this.pacientesService.obtenerPacientes().subscribe(
      (pacientes) => {
        this.pacientes = pacientes;
        this.dataSource = new MatTableDataSource<Paciente>(pacientes);
      },
      (error) => {
        console.error('Error al obtener pacientes:', error);
      }
    );
  }
  
  verDetalles(paciente: Paciente) {
    // Lógica para ver detalles del paciente
    console.log(paciente); // Ejemplo: Mostrar datos en la consola
  }

  editarPaciente(paciente: Paciente) {
    // Lógica para editar datos del paciente
    console.log(paciente); // Ejemplo: Mostrar datos en la consola
  }
}