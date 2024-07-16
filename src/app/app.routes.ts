import { Routes } from '@angular/router';
import { LandingPageComponent } from './componentes/landing-page/landing-page.component';
import { RegistroPacienteComponent } from './componentes/registro-paciente/registro-paciente.component'; 
import { AgendarCitaComponent } from './componentes/agendar-cita/agendar-cita.component'; 



export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'registro', component: RegistroPacienteComponent },
    { path: 'agendar-cita', component: AgendarCitaComponent },
  ];

 