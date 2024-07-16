import { Component } from '@angular/core';
import { MatCard, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-historial-medico',
  standalone: true,
  imports: [MatTab, MatTabGroup,MatCard, MatCardTitle, MatCardContent],
  templateUrl: './historial-medico.component.html',
  styleUrl: './historial-medico.component.scss'
})
export class HistorialMedicoComponent {

}
