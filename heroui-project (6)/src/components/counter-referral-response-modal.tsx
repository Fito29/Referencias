import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Textarea, Card, CardBody, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

interface CounterReferralResponseModalProps {
  isOpen: boolean;
  onClose: () => void;
  counterReferralId: string;
}

export const CounterReferralResponseModal: React.FC<CounterReferralResponseModalProps> = ({ 
  isOpen, 
  onClose,
  counterReferralId
}) => {
  const [response, setResponse] = React.useState("");

  // Datos de ejemplo para la contrarreferencia seleccionada
  const counterReferralData = {
    id: counterReferralId,
    patient: "Roberto Díaz",
    age: 58,
    gender: "Masculino",
    specialty: "Cardiología",
    doctor: "Dr. Martín Gutiérrez",
    date: "10/05/2023",
    diagnosis: "Sospecha de hipertensión arterial y arritmia cardíaca",
    findings: "El paciente presenta presión arterial elevada (150/95 mmHg) y palpitaciones frecuentes. ECG muestra irregularidades en el ritmo cardíaco. Se requiere evaluación especializada.",
    studies: [
      "Electrocardiograma (10/05/2023)",
      "Análisis de sangre completo (08/05/2023)"
    ]
  };

  const handleSubmit = () => {
    // Aquí iría la lógica para enviar la respuesta
    console.log({
      counterReferralId,
      response
    });
    
    // Reset form and close modal
    setResponse("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} size="3xl">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Responder Contrarreferencia {counterReferralId}
            </ModalHeader>
            <ModalBody>
              <div className="space-y-4">
                <Card>
                  <CardBody>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Información del Paciente</h3>
                        <p><span className="font-medium">Nombre:</span> {counterReferralData.patient}</p>
                        <p><span className="font-medium">Edad:</span> {counterReferralData.age} años</p>
                        <p><span className="font-medium">Género:</span> {counterReferralData.gender}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Información de la Referencia</h3>
                        <p><span className="font-medium">Especialidad:</span> {counterReferralData.specialty}</p>
                        <p><span className="font-medium">Médico:</span> {counterReferralData.doctor}</p>
                        <p><span className="font-medium">Fecha:</span> {counterReferralData.date}</p>
                      </div>
                    </div>

                    <Divider className="my-4" />

                    <div className="space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Diagnóstico Inicial</h3>
                        <p className="text-default-700">{counterReferralData.diagnosis}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Hallazgos Clínicos</h3>
                        <p className="text-default-700">{counterReferralData.findings}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-2">Estudios Realizados</h3>
                        <ul className="list-disc pl-5">
                          {counterReferralData.studies.map((study, index) => (
                            <li key={index} className="text-default-700">{study}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Textarea
                  label="Respuesta a la Contrarreferencia"
                  placeholder="Ingrese su respuesta, diagnóstico, recomendaciones y plan de seguimiento..."
                  value={response}
                  onValueChange={setResponse}
                  minRows={5}
                  isRequired
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button variant="flat" onPress={onClose}>
                Cancelar
              </Button>
              <Button color="primary" onPress={handleSubmit} isDisabled={!response.trim()}>
                Enviar Respuesta
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};