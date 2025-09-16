/**
 * Valida un CURP mexicano
 * @param curp - CURP a validar
 * @returns true si el CURP es válido, false en caso contrario
 */
export const validateCURP = (curp: string): boolean => {
  // Expresión regular para validar CURP
  const curpRegex = /^[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[0-9A-Z][0-9]$/;
  return curpRegex.test(curp);
};

/**
 * Valida un número de teléfono mexicano
 * @param phone - Número de teléfono a validar
 * @returns true si el teléfono es válido, false en caso contrario
 */
export const validatePhone = (phone: string): boolean => {
  // Eliminar espacios, guiones y paréntesis
  const cleanPhone = phone.replace(/[\s\-()]/g, '');
  // Validar que tenga 10 dígitos
  return /^\d{10}$/.test(cleanPhone);
};

/**
 * Valida un número de expediente médico
 * @param recordNumber - Número de expediente a validar
 * @returns true si el número de expediente es válido, false en caso contrario
 */
export const validateRecordNumber = (recordNumber: string): boolean => {
  // Validar que tenga al menos 5 caracteres y máximo 15
  return recordNumber.length >= 5 && recordNumber.length <= 15;
};

/**
 * Valida un número de folio o solicitud
 * @param referralNumber - Número de folio a validar
 * @returns true si el número de folio es válido, false en caso contrario
 */
export const validateReferralNumber = (referralNumber: string): boolean => {
  // Validar que tenga al menos 3 caracteres y máximo 20
  return referralNumber.length >= 3 && referralNumber.length <= 20;
};

/**
 * Calcula la edad a partir de una fecha de nacimiento
 * @param birthDate - Fecha de nacimiento en formato YYYY-MM-DD
 * @returns Edad en años
 */
export const calculateAge = (birthDate: string): number => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
};

/**
 * Calcula el número de días entre dos fechas
 * @param startDate - Fecha de inicio en formato YYYY-MM-DD
 * @param endDate - Fecha de fin en formato YYYY-MM-DD
 * @returns Número de días entre las fechas
 */
export const calculateDaysBetween = (startDate: string, endDate: string): number => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

/**
 * Formatea una fecha en formato DD/MM/YYYY
 * @param dateString - Fecha en formato YYYY-MM-DD
 * @returns Fecha formateada en DD/MM/YYYY
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

/**
 * Convierte una fecha de formato DD/MM/YYYY a YYYY-MM-DD
 * @param dateString - Fecha en formato DD/MM/YYYY
 * @returns Fecha en formato YYYY-MM-DD
 */
export const parseDateString = (dateString: string): string => {
  const [day, month, year] = dateString.split('/');
  return `${year}-${month}-${day}`;
};
