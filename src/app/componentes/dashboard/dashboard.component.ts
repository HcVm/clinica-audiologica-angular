import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ListaPacientesComponent } from '../lista-pacientes/lista-pacientes.component';
import { ListaEspecialistasComponent } from '../lista-especialistas/lista-especialistas.component';
import { ListaCitasComponent } from '../lista-citas/lista-citas.component';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatTabsModule, ListaPacientesComponent, ListaEspecialistasComponent, ListaCitasComponent, MatToolbar],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
}
