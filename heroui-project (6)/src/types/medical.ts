// Tipos para referencias médicas
export interface ReferralFormData {
  // Datos básicos de la solicitud
  requestType: string;
  requestDate: string;
  isScheduled: boolean;
  isUrgent: boolean;
  recordNumber: string;
  referralNumber: string;
  isWorker: boolean;
  isBeneficiary: boolean;
  
  // Datos del paciente
  address: string;
  paternalSurname: string;
  maternalSurname: string;
  firstName: string;
  age: string;
  gender: string;
  responsibleFamily: string;
  disability: string;
  curp: string;
  
  // Datos institucionales
  requestingInstitution: string;
  requestingMedicalUnit: string;
  requestingService: string;
  
  // Datos clínicos
  diagnosisNotes: string;
  clinicalSummary: string;
  
  // Signos vitales
  weight: string;
  height: string;
  heartRate: string;
  respiratoryRate: string;
  temperature: string;
  bloodPressure: string;
  oxygenSaturation: string;
  glucoseLevel: string;
  
  // Procedimiento solicitado
  requestedProcedure: string;
  
  // Datos de autorización
  doctorName: string;
  doctorCode: string;
  directorName: string;
  directorCode: string;
}

// Tipos para contrarreferencias médicas
export interface CounterReferralFormData {
  // Datos básicos
  phoneNumber: string;
  address: string;
  
  // Datos del paciente
  paternalSurname: string;
  maternalSurname: string;
  firstName: string;
  age: string;
  gender: string;
  curp: string;
  
  // Datos de atención
  admissionDate: string;
  dischargeDate: string;
  receivingInstitution: string;
  requestingMedicalUnit: string;
  receivingService: string;
  totalDaysAttended: string;
  
  // Datos clínicos
  admissionDiagnosis: string;
  dischargeDiagnosis: string;
  clinicalSummary: string;
  
  // Datos de autorización
  doctorName: string;
  doctorCode: string;
  directorName: string;
  directorCode: string;
}

// Tipos para el estado de las referencias
export type ReferralStatus = 'Pendiente' | 'Aceptada' | 'Rechazada' | 'Completada';

// Tipos para la prioridad de las referencias
export type ReferralPriority = 'Alta' | 'Media' | 'Baja';

// Interfaz para los datos de una referencia
export interface Referral {
  id: string;
  patient: string;
  date: string;
  specialty: string;
  status: ReferralStatus;
  doctor: string;
  priority?: ReferralPriority;
  details?: ReferralFormData;
}
