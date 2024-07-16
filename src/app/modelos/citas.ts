import { Paciente } from './paciente';
import { Especialista } from './especialista';

export interface Cita {
  id: number;
  pacienteId: number;
  pacienteNombre: string;
  especialistaId: number;
  especialistaNombre: string;
  fechaHora: Date;
}
