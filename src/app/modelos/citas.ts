import { Paciente } from './Paciente';
import { Especialista } from './especialista';

export interface Cita {
  id: number;
  paciente: Paciente;
  especialista: Especialista;
  fechaHora: Date;
}
