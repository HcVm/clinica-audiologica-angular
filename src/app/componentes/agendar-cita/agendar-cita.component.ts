import { Component } from '@angular/core';
import { MatCard, MatCardTitle,MatCardContent } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelect,MatOption } from '@angular/material/select';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
const moment = _rollupMoment || _moment;
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

const MY_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};



@Component({
  selector: 'app-agendar-cita',
  standalone: true,
  imports: [MatCard, MatCardTitle,MatCardContent,MatFormFieldModule,MatSelect,MatOption,MatDatepickerModule,MatNativeDateModule],
  templateUrl: './agendar-cita.component.html',
  styleUrl: './agendar-cita.component.scss',
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'es-ES',
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class AgendarCitaComponent {

}
