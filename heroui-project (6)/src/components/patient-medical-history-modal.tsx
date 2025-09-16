import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Tabs, Tab, Card, CardBody, Divider, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";
import { Icon } from "@iconify/react";

interface PatientMedicalHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  patientId: string;
}

export const PatientMedicalHistoryModal: React.FC<PatientMedicalHistoryModalProps> = ({ 
  isOpen, 
  onClose,
  patientId
}) => {
  const [selectedTab, setSelectedTab] = React.useState("general");

  // Datos de ejemplo para el paciente seleccionado
  const patientData = {
    id: patientId,
    name: "María González",
    age: 45,
    gender: "Femenino",
    birthDate: "15/07/1978",
    bloodType: "O+",
    allergies: ["Penicilina", "Sulfas"],
    chronicDiseases: ["Hipertensión arterial", "Diabetes tipo 2"],
    consultations: [
      { date: "15/05/2023", doctor: "Dr. Juan Pérez", diagnosis: "Hipertensión no controlada", treatment: "Ajuste de medicación antihipertensiva" },
      { date: "10/04/2023", doctor: "Dr. Juan Pérez", diagnosis: "Control rutinario", treatment: "Continuar con medicación actual" },
      { date: "15/03/2023", doctor: "Dr. Juan Pérez", diagnosis: "Infección respiratoria", treatment: "Antibióticos por 7 días" },
    ],
    medications: [
      { name: "Losartán", dose: "50mg", frequency: "1 vez al día", startDate: "10/01/2023" },
      { name: "Metformina", dose: "850mg", frequency: "2 veces al día", startDate: "15/02/2023" },
    ],
    studies: [
      { date: "05/05/2023", name: "Análisis de sangre", result: "Glucosa elevada (145 mg/dl)", doctor: "Dr. Juan Pérez" },
      { date: "05/05/2023", name: "Electrocardiograma", result: "Normal", doctor: "Dr. Juan Pérez" },
      { date: "10/03/2023", name: "Radiografía de tórax", result: "Sin hallazgos patológicos", doctor: "Dr. Juan Pérez" },
    ],
    references: [
      { date: "15/05/2023", specialty: "Cardiología", reason: "Evaluación de hipertensión", status: "Pendiente" },
      { date: "10/02/2023", specialty: "Oftalmología", reason: "Control anual por diabetes", status: "Completada" },
    ]
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} size="4xl" scrollBehavior="inside">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Icon icon="lucide:user" className="text-primary" width={24} height={24} />
                <span>Historial Médico: {patientData.name}</span>
              </div>
            </ModalHeader>
            <ModalBody>
              <Card className="mb-4">
                <CardBody>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-default-500">Nombre completo</p>
                      <p className="font-medium">{patientData.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-default-500">ID de Paciente</p>
                      <p className="font-medium">{patientData.id}</p>
                    </div>
                    <div>
                      <p className="text-sm text-default-500">Fecha de nacimiento</p>
                      <p className="font-medium">{patientData.birthDate} ({patientData.age} años)</p>
                    </div>
                    <div>
                      <p className="text-sm text-default-500">Género</p>
                      <p className="font-medium">{patientData.gender}</p>
                    </div>
                    <div>
                      <p className="text-sm text-default-500">Tipo de sangre</p>
                      <p className="font-medium">{patientData.bloodType}</p>
                    </div>
                    <div className="md:col-span-1">
                      <p className="text-sm text-default-500">Alergias</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {patientData.allergies.map((allergy, index) => (
                          <span key={index} className="bg-danger-100 text-danger-700 text-xs px-2 py-1 rounded">
                            {allergy}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Tabs 
                aria-label="Historial médico" 
                selectedKey={selectedTab} 
                onSelectionChange={(key) => setSelectedTab(key as string)}
              >
                <Tab key="general" title="Información General">
                  <Card>
                    <CardBody>
                      <h3 className="text-lg font-semibold mb-2">Enfermedades Crónicas</h3>
                      <ul className="list-disc pl-5 mb-4">
                        {patientData.chronicDiseases.map((disease, index) => (
                          <li key={index}>{disease}</li>
                        ))}
                      </ul>

                      <Divider className="my-4" />

                      <h3 className="text-lg font-semibold mb-2">Medicamentos Actuales</h3>
                      <Table removeWrapper aria-label="Medicamentos actuales">
                        <TableHeader>
                          <TableColumn>MEDICAMENTO</TableColumn>
                          <TableColumn>DOSIS</TableColumn>
                          <TableColumn>FRECUENCIA</TableColumn>
                          <TableColumn>INICIO</TableColumn>
                        </TableHeader>
                        <TableBody>
                          {patientData.medications.map((med, index) => (
                            <TableRow key={index}>
                              <TableCell>{med.name}</TableCell>
                              <TableCell>{med.dose}</TableCell>
                              <TableCell>{med.frequency}</TableCell>
                              <TableCell>{med.startDate}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardBody>
                  </Card>
                </Tab>
                <Tab key="consultations" title="Consultas">
                  <Card>
                    <CardBody>
                      <Table removeWrapper aria-label="Historial de consultas">
                        <TableHeader>
                          <TableColumn>FECHA</TableColumn>
                          <TableColumn>MÉDICO</TableColumn>
                          <TableColumn>DIAGNÓSTICO</TableColumn>
                          <TableColumn>TRATAMIENTO</TableColumn>
                        </TableHeader>
                        <TableBody>
                          {patientData.consultations.map((consultation, index) => (
                            <TableRow key={index}>
                              <TableCell>{consultation.date}</TableCell>
                              <TableCell>{consultation.doctor}</TableCell>
                              <TableCell>{consultation.diagnosis}</TableCell>
                              <TableCell>{consultation.treatment}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardBody>
                  </Card>
                </Tab>
                <Tab key="studies" title="Estudios">
                  <Card>
                    <CardBody>
                      <Table removeWrapper aria-label="Estudios médicos">
                        <TableHeader>
                          <TableColumn>FECHA</TableColumn>
                          <TableColumn>ESTUDIO</TableColumn>
                          <TableColumn>RESULTADO</TableColumn>
                          <TableColumn>MÉDICO</TableColumn>
                        </TableHeader>
                        <TableBody>
                          {patientData.studies.map((study, index) => (
                            <TableRow key={index}>
                              <TableCell>{study.date}</TableCell>
                              <TableCell>{study.name}</TableCell>
                              <TableCell>{study.result}</TableCell>
                              <TableCell>{study.doctor}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardBody>
                  </Card>
                </Tab>
                <Tab key="references" title="Referencias">
                  <Card>
                    <CardBody>
                      <Table removeWrapper aria-label="Referencias médicas">
                        <TableHeader>
                          <TableColumn>FECHA</TableColumn>
                          <TableColumn>ESPECIALIDAD</TableColumn>
                          <TableColumn>MOTIVO</TableColumn>
                          <TableColumn>ESTADO</TableColumn>
                        </TableHeader>
                        <TableBody>
                          {patientData.references.map((reference, index) => (
                            <TableRow key={index}>
                              <TableCell>{reference.date}</TableCell>
                              <TableCell>{reference.specialty}</TableCell>
                              <TableCell>{reference.reason}</TableCell>
                              <TableCell>
                                <span className={reference.status === "Pendiente" ? "text-warning" : "text-success"}>
                                  {reference.status}
                                </span>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardBody>
                  </Card>
                </Tab>
              </Tabs>
            </ModalBody>
            <ModalFooter>
              <Button variant="flat" onPress={onClose}>
                Cerrar
              </Button>
              <Button color="primary" startContent={<Icon icon="lucide:file-plus" />}>
                Nueva Consulta
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};