import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Textarea, Card, CardBody, CardHeader, Divider, Input, Select, SelectItem } from "@heroui/react";
import { Icon } from "@iconify/react";

interface CounterReferralResponseFormProps {
  isOpen: boolean;
  onClose: () => void;
  counterReferralId: string;
}

export const CounterReferralResponseForm: React.FC<CounterReferralResponseFormProps> = ({ 
  isOpen, 
  onClose,
  counterReferralId
}) => {
  // Form state
  const [counterReferralData, setCounterReferralData] = React.useState({
    // Datos básicos
    phoneNumber: "",
    address: "",
    
    // Datos del paciente
    paternalSurname: "",
    maternalSurname: "",
    firstName: "",
    age: "",
    gender: "",
    curp: "",
    
    // Datos de atención
    admissionDate: "",
    dischargeDate: "",
    receivingInstitution: "",
    requestingMedicalUnit: "",
    receivingService: "",
    totalDaysAttended: "",
    
    // Datos clínicos
    admissionDiagnosis: "",
    dischargeDiagnosis: "",
    clinicalSummary: "",
    
    // Datos de autorización
    doctorName: "",
    doctorCode: "",
    directorName: "",
    directorCode: ""
  });

  // Datos de ejemplo para mostrar en el formulario
  React.useEffect(() => {
    // Simulación de carga de datos
    if (counterReferralId) {
      setCounterReferralData({
        phoneNumber: "555-123-4567",
        address: "Av. Principal #123, Col. Centro",
        paternalSurname: "Díaz",
        maternalSurname: "Gómez",
        firstName: "Roberto",
        age: "58",
        gender: "H",
        curp: "DIGR650812HDFZRB09",
        admissionDate: "2023-05-10",
        dischargeDate: "2023-05-15",
        receivingInstitution: "Hospital General",
        requestingMedicalUnit: "Centro de Salud Norte",
        receivingService: "Cardiología",
        totalDaysAttended: "5",
        admissionDiagnosis: "Sospecha de hipertensión arterial y arritmia cardíaca",
        dischargeDiagnosis: "",
        clinicalSummary: "",
        doctorName: "",
        doctorCode: "",
        directorName: "",
        directorCode: ""
      });
    }
  }, [counterReferralId]);

  const handleInputChange = (field: string, value: string) => {
    setCounterReferralData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    // Aquí iría la lógica para enviar la respuesta
    console.log(counterReferralData);
    
    // Reset form and close modal
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} size="4xl" scrollBehavior="inside">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Icon icon="lucide:file-text" className="text-primary" width={24} height={24} />
                <span>Contrarreferencia Médica - {counterReferralId}</span>
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="space-y-6">
                {/* Sección de datos del paciente */}
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Datos del Paciente</h3>
                  </CardHeader>
                  <CardBody>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <Input
                        label="Apellido Paterno"
                        value={counterReferralData.paternalSurname}
                        onValueChange={(value) => handleInputChange("paternalSurname", value)}
                        isRequired
                      />
                      
                      <Input
                        label="Apellido Materno"
                        value={counterReferralData.maternalSurname}
                        onValueChange={(value) => handleInputChange("maternalSurname", value)}
                      />
                      
                      <Input
                        label="Nombre(s)"
                        value={counterReferralData.firstName}
                        onValueChange={(value) => handleInputChange("firstName", value)}
                        isRequired
                      />
                      
                      <Input
                        label="Edad"
                        type="number"
                        value={counterReferralData.age}
                        onValueChange={(value) => handleInputChange("age", value)}
                        isRequired
                      />
                      
                      <Select 
                        label="Sexo" 
                        selectedKeys={counterReferralData.gender ? [counterReferralData.gender] : []}
                        onChange={(e) => handleInputChange("gender", e.target.value)}
                        isRequired
                      >
                        <SelectItem key="M" value="M">Mujer</SelectItem>
                        <SelectItem key="H" value="H">Hombre</SelectItem>
                      </Select>
                      
                      <Input
                        label="CURP"
                        value={counterReferralData.curp}
                        onValueChange={(value) => handleInputChange("curp", value)}
                      />
                      
                      <Input
                        label="No. de Teléfono"
                        placeholder="Teléfono del paciente o familiar"
                        value={counterReferralData.phoneNumber}
                        onValueChange={(value) => handleInputChange("phoneNumber", value)}
                      />
                      
                      <Input
                        label="Domicilio"
                        value={counterReferralData.address}
                        onValueChange={(value) => handleInputChange("address", value)}
                        className="md:col-span-2"
                      />
                    </div>
                  </CardBody>
                </Card>
                
                {/* Sección de datos de atención */}
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Datos de Atención</h3>
                  </CardHeader>
                  <CardBody>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <Input
                        label="Fecha de Ingreso"
                        type="date"
                        value={counterReferralData.admissionDate}
                        onValueChange={(value) => handleInputChange("admissionDate", value)}
                        isRequired
                      />
                      
                      <Input
                        label="Fecha de Egreso"
                        type="date"
                        value={counterReferralData.dischargeDate}
                        onValueChange={(value) => handleInputChange("dischargeDate", value)}
                        isRequired
                      />
                      
                      <Input
                        label="Total de Días Atendidos"
                        type="number"
                        value={counterReferralData.totalDaysAttended}
                        onValueChange={(value) => handleInputChange("totalDaysAttended", value)}
                      />
                      
                      <Input
                        label="Institución que Recibió"
                        value={counterReferralData.receivingInstitution}
                        onValueChange={(value) => handleInputChange("receivingInstitution", value)}
                        isRequired
                      />
                      
                      <Input
                        label="Unidad Médica que Solicitó"
                        value={counterReferralData.requestingMedicalUnit}
                        onValueChange={(value) => handleInputChange("requestingMedicalUnit", value)}
                        isRequired
                      />
                      
                      <Input
                        label="Servicio que Recibió"
                        value={counterReferralData.receivingService}
                        onValueChange={(value) => handleInputChange("receivingService", value)}
                        isRequired
                      />
                    </div>
                  </CardBody>
                </Card>
                
                {/* Sección de diagnóstico */}
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Diagnóstico</h3>
                  </CardHeader>
                  <CardBody>
                    <div className="space-y-4">
                      <Textarea
                        label="Diagnóstico(s) de Ingreso"
                        placeholder="Catálogo de intervenciones"
                        value={counterReferralData.admissionDiagnosis}
                        onValueChange={(value) => handleInputChange("admissionDiagnosis", value)}
                        minRows={2}
                        isRequired
                      />
                      
                      <Textarea
                        label="Diagnóstico de Egreso por Complicaciones"
                        value={counterReferralData.dischargeDiagnosis}
                        onValueChange={(value) => handleInputChange("dischargeDiagnosis", value)}
                        minRows={2}
                      />
                    </div>
                  </CardBody>
                </Card>
                
                {/* Sección de resumen clínico */}
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Resumen Clínico</h3>
                  </CardHeader>
                  <CardBody>
                    <Textarea
                      label="Principales datos de interrogatorio, exploración física, auxiliares de diagnóstico, tratamiento, terapéutica previa"
                      value={counterReferralData.clinicalSummary}
                      onValueChange={(value) => handleInputChange("clinicalSummary", value)}
                      minRows={5}
                      isRequired
                    />
                  </CardBody>
                </Card>
                
                {/* Sección de autorización */}
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Autorización</h3>
                  </CardHeader>
                  <CardBody>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-md font-medium mb-2">Médico Tratante</h4>
                        <div className="space-y-3">
                          <Input
                            label="Nombre"
                            placeholder="Nombre completo"
                            value={counterReferralData.doctorName}
                            onValueChange={(value) => handleInputChange("doctorName", value)}
                            isRequired
                          />
                          <Input
                            label="Clave"
                            placeholder="Clave profesional"
                            value={counterReferralData.doctorCode}
                            onValueChange={(value) => handleInputChange("doctorCode", value)}
                            isRequired
                          />
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-md font-medium mb-2">Director de la Unidad</h4>
                        <div className="space-y-3">
                          <Input
                            label="Nombre"
                            placeholder="Nombre completo"
                            value={counterReferralData.directorName}
                            onValueChange={(value) => handleInputChange("directorName", value)}
                            isRequired
                          />
                          <Input
                            label="Clave"
                            placeholder="Clave"
                            value={counterReferralData.directorCode}
                            onValueChange={(value) => handleInputChange("directorCode", value)}
                            isRequired
                          />
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button variant="flat" onPress={onClose}>
                Cancelar
              </Button>
              <Button color="primary" onPress={handleSubmit}>
                Enviar Contrarreferencia
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};