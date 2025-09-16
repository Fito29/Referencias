// ... existing imports ...

interface NewReferralFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewReferralForm: React.FC<NewReferralFormProps> = ({ isOpen, onClose }) => {
  // Form state
  const [referralData, setReferralData] = React.useState({
    // Datos básicos de la solicitud
    requestType: "",
    requestDate: new Date().toISOString().split('T')[0],
    isScheduled: false,
    isUrgent: false,
    recordNumber: "",
    referralNumber: "",
    isWorker: false,
    isBeneficiary: false,
    
    // Datos del paciente
    address: "",
    paternalSurname: "",
    maternalSurname: "",
    firstName: "",
    age: "",
    gender: "",
    responsibleFamily: "",
    disability: "",
    curp: "",
    
    // Datos institucionales
    requestingInstitution: "",
    requestingMedicalUnit: "",
    requestingService: "",
    
    // Datos clínicos
    diagnosisNotes: "",
    clinicalSummary: "",
    
    // Signos vitales
    weight: "",
    height: "",
    heartRate: "",
    respiratoryRate: "",
    temperature: "",
    bloodPressure: "",
    oxygenSaturation: "",
    glucoseLevel: "",
    
    // Procedimiento solicitado
    requestedProcedure: "",
    
    // Datos de autorización
    doctorName: "",
    doctorCode: "",
    directorName: "",
    directorCode: ""
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setReferralData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    // Aquí iría la lógica para enviar la referencia
    console.log(referralData);
    
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
                <Icon icon="lucide:file-plus" className="text-primary" width={24} height={24} />
                <span>Nueva Referencia Médica</span>
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="space-y-6">
                {/* Sección de datos básicos de la solicitud */}
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Datos de la Solicitud</h3>
                  </CardHeader>
                  <CardBody>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <Input
                        label="Tipo de Solicitud"
                        placeholder="Especifique el tipo"
                        value={referralData.requestType}
                        onValueChange={(value) => handleInputChange("requestType", value)}
                      />
                      
                      <Input
                        label="Fecha de Solicitud"
                        type="date"
                        value={referralData.requestDate}
                        onValueChange={(value) => handleInputChange("requestDate", value)}
                      />
                      
                      <div className="flex flex-col gap-2">
                        <p className="text-sm text-default-500">Tipo</p>
                        <div className="flex gap-4">
                          <Checkbox 
                            isSelected={referralData.isScheduled}
                            onValueChange={(value) => handleInputChange("isScheduled", value)}
                          >
                            Programada
                          </Checkbox>
                          <Checkbox 
                            isSelected={referralData.isUrgent}
                            onValueChange={(value) => handleInputChange("isUrgent", value)}
                            color="danger"
                          >
                            Urgente
                          </Checkbox>
                        </div>
                      </div>
                      
                      <Input
                        label="No. Expediente"
                        placeholder="Ingrese número de expediente"
                        value={referralData.recordNumber}
                        onValueChange={(value) => handleInputChange("recordNumber", value)}
                      />
                      
                      <Input
                        label="No. de Solicitud/Folio"
                        placeholder="Ingrese folio"
                        value={referralData.referralNumber}
                        onValueChange={(value) => handleInputChange("referralNumber", value)}
                      />
                      
                      <div className="flex flex-col gap-2">
                        <p className="text-sm text-default-500">Categoría</p>
                        <div className="flex gap-4">
                          <Checkbox 
                            isSelected={referralData.isWorker}
                            onValueChange={(value) => handleInputChange("isWorker", value)}
                          >
                            Trabajador
                          </Checkbox>
                          <Checkbox 
                            isSelected={referralData.isBeneficiary}
                            onValueChange={(value) => handleInputChange("isBeneficiary", value)}
                          >
                            Beneficiario
                          </Checkbox>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                
                {/* Sección de datos del paciente */}
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Identificación del Paciente</h3>
                  </CardHeader>
                  <CardBody>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <Input
                        label="Apellido Paterno"
                        placeholder="Ingrese apellido paterno"
                        value={referralData.paternalSurname}
                        onValueChange={(value) => handleInputChange("paternalSurname", value)}
                        isRequired
                      />
                      
                      <Input
                        label="Apellido Materno"
                        placeholder="Ingrese apellido materno"
                        value={referralData.maternalSurname}
                        onValueChange={(value) => handleInputChange("maternalSurname", value)}
                      />
                      
                      <Input
                        label="Nombre(s)"
                        placeholder="Ingrese nombre(s)"
                        value={referralData.firstName}
                        onValueChange={(value) => handleInputChange("firstName", value)}
                        isRequired
                      />
                      
                      <Input
                        label="Edad"
                        placeholder="Ingrese edad"
                        type="number"
                        value={referralData.age}
                        onValueChange={(value) => handleInputChange("age", value)}
                        isRequired
                      />
                      
                      <Select 
                        label="Sexo" 
                        placeholder="Seleccione"
                        selectedKeys={referralData.gender ? [referralData.gender] : []}
                        onChange={(e) => handleInputChange("gender", e.target.value)}
                        isRequired
                      >
                        <SelectItem key="M" value="M">Mujer</SelectItem>
                        <SelectItem key="H" value="H">Hombre</SelectItem>
                      </Select>
                      
                      <Input
                        label="CURP"
                        placeholder="Ingrese CURP"
                        value={referralData.curp}
                        onValueChange={(value) => handleInputChange("curp", value)}
                      />
                      
                      <Input
                        label="Domicilio"
                        placeholder="Ingrese domicilio completo"
                        value={referralData.address}
                        onValueChange={(value) => handleInputChange("address", value)}
                        className="md:col-span-2 lg:col-span-3"
                      />
                      
                      <Input
                        label="Familiar Responsable"
                        placeholder="Nombre del familiar responsable"
                        value={referralData.responsibleFamily}
                        onValueChange={(value) => handleInputChange("responsibleFamily", value)}
                      />
                      
                      <Input
                        label="Discapacidad"
                        placeholder="Especifique si aplica"
                        value={referralData.disability}
                        onValueChange={(value) => handleInputChange("disability", value)}
                      />
                    </div>
                  </CardBody>
                </Card>
                
                {/* Sección de datos institucionales */}
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Datos Institucionales</h3>
                  </CardHeader>
                  <CardBody>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Input
                        label="Institución Solicitante"
                        placeholder="Ingrese institución"
                        value={referralData.requestingInstitution}
                        onValueChange={(value) => handleInputChange("requestingInstitution", value)}
                        isRequired
                      />
                      
                      <Input
                        label="Unidad Médica que Solicita"
                        placeholder="Ingrese unidad médica"
                        value={referralData.requestingMedicalUnit}
                        onValueChange={(value) => handleInputChange("requestingMedicalUnit", value)}
                        isRequired
                      />
                      
                      <Input
                        label="Servicio que Solicita"
                        placeholder="Ingrese servicio"
                        value={referralData.requestingService}
                        onValueChange={(value) => handleInputChange("requestingService", value)}
                        isRequired
                      />
                    </div>
                  </CardBody>
                </Card>
                
                {/* Sección de diagnóstico y resumen clínico */}
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Diagnóstico y Resumen Clínico</h3>
                  </CardHeader>
                  <CardBody>
                    <div className="space-y-4">
                      <Textarea
                        label="Diagnóstico(s) de Envío"
                        placeholder="Catálogo de intervenciones"
                        value={referralData.diagnosisNotes}
                        onValueChange={(value) => handleInputChange("diagnosisNotes", value)}
                        minRows={3}
                        isRequired
                      />
                      
                      <Textarea
                        label="Resumen Clínico"
                        placeholder="Principales datos de interrogatorio, exploración física, auxiliares de diagnósticos, tratamiento, terapéutica previa"
                        value={referralData.clinicalSummary}
                        onValueChange={(value) => handleInputChange("clinicalSummary", value)}
                        minRows={4}
                        isRequired
                      />
                    </div>
                  </CardBody>
                </Card>
                
                {/* Sección de signos vitales */}
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Signos Vitales</h3>
                  </CardHeader>
                  <CardBody>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Input
                        label="Peso (kg)"
                        placeholder="Ej: 70.5"
                        value={referralData.weight}
                        onValueChange={(value) => handleInputChange("weight", value)}
                      />
                      
                      <Input
                        label="Talla (cm)"
                        placeholder="Ej: 170"
                        value={referralData.height}
                        onValueChange={(value) => handleInputChange("height", value)}
                      />
                      
                      <Input
                        label="FC (lpm)"
                        placeholder="Frecuencia cardíaca"
                        value={referralData.heartRate}
                        onValueChange={(value) => handleInputChange("heartRate", value)}
                      />
                      
                      <Input
                        label="FR (rpm)"
                        placeholder="Frecuencia respiratoria"
                        value={referralData.respiratoryRate}
                        onValueChange={(value) => handleInputChange("respiratoryRate", value)}
                      />
                      
                      <Input
                        label="Temp (°C)"
                        placeholder="Temperatura"
                        value={referralData.temperature}
                        onValueChange={(value) => handleInputChange("temperature", value)}
                      />
                      
                      <Input
                        label="T/A (mmHg)"
                        placeholder="Ej: 120/80"
                        value={referralData.bloodPressure}
                        onValueChange={(value) => handleInputChange("bloodPressure", value)}
                      />
                      
                      <Input
                        label="SpO2 (%)"
                        placeholder="Saturación de oxígeno"
                        value={referralData.oxygenSaturation}
                        onValueChange={(value) => handleInputChange("oxygenSaturation", value)}
                      />
                      
                      <Input
                        label="DEXTROSTIX (mg/dl)"
                        placeholder="Nivel de glucosa"
                        value={referralData.glucoseLevel}
                        onValueChange={(value) => handleInputChange("glucoseLevel", value)}
                      />
                    </div>
                  </CardBody>
                </Card>
                
                {/* Sección de procedimiento solicitado */}
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Procedimiento o Estudio Solicitado</h3>
                  </CardHeader>
                  <CardBody>
                    <Textarea
                      placeholder="Catálogo de intervenciones u otros acordes en el convenio específico"
                      value={referralData.requestedProcedure}
                      onValueChange={(value) => handleInputChange("requestedProcedure", value)}
                      minRows={3}
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
                        <h4 className="text-md font-medium mb-2">Médico Solicitante</h4>
                        <div className="space-y-3">
                          <Input
                            label="Nombre"
                            placeholder="Nombre completo"
                            value={referralData.doctorName}
                            onValueChange={(value) => handleInputChange("doctorName", value)}
                            isRequired
                          />
                          <Input
                            label="Clave"
                            placeholder="Clave profesional"
                            value={referralData.doctorCode}
                            onValueChange={(value) => handleInputChange("doctorCode", value)}
                            isRequired
                          />
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-md font-medium mb-2">Directivo que Autoriza</h4>
                        <div className="space-y-3">
                          <Input
                            label="Nombre"
                            placeholder="Nombre completo"
                            value={referralData.directorName}
                            onValueChange={(value) => handleInputChange("directorName", value)}
                            isRequired
                          />
                          <Input
                            label="Clave"
                            placeholder="Clave"
                            value={referralData.directorCode}
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
                Emitir Referencia
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};