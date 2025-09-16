import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, Textarea, Select, SelectItem, Checkbox } from "@heroui/react";
import { Icon } from "@iconify/react";

interface NewReferralFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewReferralForm: React.FC<NewReferralFormProps> = ({ isOpen, onClose }) => {
  const [patientId, setPatientId] = React.useState("");
  const [specialty, setSpecialty] = React.useState("");
  const [priority, setPriority] = React.useState("");
  const [reason, setReason] = React.useState("");
  const [isUrgent, setIsUrgent] = React.useState(false);

  const handleSubmit = () => {
    // Aquí iría la lógica para enviar la referencia
    console.log({
      patientId,
      specialty,
      priority,
      reason,
      isUrgent
    });
    
    // Reset form and close modal
    setPatientId("");
    setSpecialty("");
    setPriority("");
    setReason("");
    setIsUrgent(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} size="2xl">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Nueva Referencia Médica</ModalHeader>
            <ModalBody>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    label="ID del Paciente"
                    placeholder="Ingrese ID o busque paciente"
                    value={patientId}
                    onValueChange={setPatientId}
                    startContent={<Icon icon="lucide:search" className="text-default-400" />}
                    isRequired
                  />
                </div>
                <div>
                  <p className="text-sm text-default-500 mb-1">Información del Paciente</p>
                  {patientId ? (
                    <div className="border rounded-md p-2">
                      <p className="font-medium">María González</p>
                      <p className="text-sm text-default-500">45 años | Femenino</p>
                      <p className="text-sm text-default-500">NSS: 12345678901</p>
                    </div>
                  ) : (
                    <div className="border border-dashed rounded-md p-2 text-center text-default-400">
                      <p>Busque un paciente para ver su información</p>
                    </div>
                  )}
                </div>

                <Select 
                  label="Especialidad de Destino" 
                  placeholder="Seleccione especialidad"
                  selectedKeys={specialty ? [specialty] : []}
                  onChange={(e) => setSpecialty(e.target.value)}
                  isRequired
                >
                  <SelectItem key="cardiologia" value="cardiologia">Cardiología</SelectItem>
                  <SelectItem key="neurologia" value="neurologia">Neurología</SelectItem>
                  <SelectItem key="traumatologia" value="traumatologia">Traumatología</SelectItem>
                  <SelectItem key="oftalmologia" value="oftalmologia">Oftalmología</SelectItem>
                  <SelectItem key="dermatologia" value="dermatologia">Dermatología</SelectItem>
                </Select>

                <Select 
                  label="Prioridad" 
                  placeholder="Seleccione prioridad"
                  selectedKeys={priority ? [priority] : []}
                  onChange={(e) => setPriority(e.target.value)}
                  isRequired
                >
                  <SelectItem key="alta" value="alta">Alta</SelectItem>
                  <SelectItem key="media" value="media">Media</SelectItem>
                  <SelectItem key="baja" value="baja">Baja</SelectItem>
                </Select>

                <div className="col-span-1 md:col-span-2">
                  <Textarea
                    label="Motivo de Referencia"
                    placeholder="Describa el motivo de la referencia y los hallazgos clínicos relevantes"
                    value={reason}
                    onValueChange={setReason}
                    minRows={4}
                    isRequired
                  />
                </div>

                <div className="col-span-1 md:col-span-2">
                  <Checkbox isSelected={isUrgent} onValueChange={setIsUrgent}>
                    Marcar como urgente
                  </Checkbox>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button variant="flat" onPress={onClose}>
                Cancelar
              </Button>
              <Button color="primary" onPress={handleSubmit}>
                Emitir Referencia
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};