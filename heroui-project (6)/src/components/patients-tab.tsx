import React from "react";
import { Card, CardBody, CardHeader, Button, Input, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Pagination, Tabs, Tab } from "@heroui/react";
import { Icon } from "@iconify/react";
import { PatientMedicalHistoryModal } from "./patient-medical-history-modal";

export const PatientsTab: React.FC = () => {
  const [selectedPatient, setSelectedPatient] = React.useState<string | null>(null);
  const [page, setPage] = React.useState(1);
  const [selectedTab, setSelectedTab] = React.useState("all");
  const rowsPerPage = 5;

  const patients = {
    all: [
      { id: "P001", name: "María González", age: 45, gender: "F", lastVisit: "15/05/2023", status: "Activo" },
      { id: "P002", name: "Carlos Rodríguez", age: 62, gender: "M", lastVisit: "10/05/2023", status: "Activo" },
      { id: "P003", name: "Ana Martínez", age: 35, gender: "F", lastVisit: "05/05/2023", status: "Activo" },
      { id: "P004", name: "Luis Sánchez", age: 28, gender: "M", lastVisit: "01/05/2023", status: "Activo" },
      { id: "P005", name: "Elena Gómez", age: 53, gender: "F", lastVisit: "28/04/2023", status: "Activo" },
      { id: "P006", name: "Pedro Núñez", age: 41, gender: "M", lastVisit: "25/04/2023", status: "Activo" },
      { id: "P007", name: "Lucía Herrera", age: 39, gender: "F", lastVisit: "20/04/2023", status: "Activo" },
    ],
    today: [
      { id: "P001", name: "María González", age: 45, gender: "F", appointment: "10:30 AM", reason: "Consulta General" },
      { id: "P008", name: "Roberto Díaz", age: 58, gender: "M", appointment: "11:45 AM", reason: "Seguimiento" },
      { id: "P009", name: "Laura Torres", age: 32, gender: "F", appointment: "12:30 PM", reason: "Resultados" },
    ]
  };

  const currentItems = React.useMemo(() => {
    const items = selectedTab === "all" ? patients.all : patients.today;
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return items.slice(start, end);
  }, [selectedTab, page]);

  const pages = Math.ceil(
    (selectedTab === "all" ? patients.all.length : patients.today.length) / rowsPerPage
  );

  const handleViewHistory = (patientId: string) => {
    setSelectedPatient(patientId);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Gestión de Pacientes</h1>

      <Card>
        <CardHeader>
          <Tabs 
            aria-label="Opciones" 
            selectedKey={selectedTab} 
            onSelectionChange={(key) => {
              setSelectedTab(key as string);
              setPage(1);
            }}
          >
            <Tab key="all" title="Todos los Pacientes" />
            <Tab key="today" title="Pacientes de Hoy" />
          </Tabs>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
            <Input
              placeholder="Buscar paciente..."
              startContent={<Icon icon="lucide:search" className="text-default-400" />}
              className="max-w-xs"
            />
            <div className="flex gap-2">
              <Button variant="flat" startContent={<Icon icon="lucide:filter" />}>
                Filtros
              </Button>
              <Button variant="flat" startContent={<Icon icon="lucide:download" />}>
                Exportar
              </Button>
            </div>
          </div>

          {selectedTab === "all" ? (
            <Table 
              removeWrapper 
              aria-label="Lista de pacientes"
              bottomContent={
                <div className="flex w-full justify-center">
                  <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="primary"
                    page={page}
                    total={pages}
                    onChange={(page) => setPage(page)}
                  />
                </div>
              }
            >
              <TableHeader>
                <TableColumn>ID</TableColumn>
                <TableColumn>NOMBRE</TableColumn>
                <TableColumn>EDAD</TableColumn>
                <TableColumn>GÉNERO</TableColumn>
                <TableColumn>ÚLTIMA VISITA</TableColumn>
                <TableColumn>ESTADO</TableColumn>
                <TableColumn>ACCIONES</TableColumn>
              </TableHeader>
              <TableBody>
                {currentItems.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell>{patient.id}</TableCell>
                    <TableCell>{patient.name}</TableCell>
                    <TableCell>{patient.age}</TableCell>
                    <TableCell>{patient.gender}</TableCell>
                    <TableCell>{patient.lastVisit}</TableCell>
                    <TableCell>
                      <span className="text-success">● {patient.status}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Tooltip content="Ver historial médico">
                          <Button isIconOnly size="sm" color="primary" variant="flat" onPress={() => handleViewHistory(patient.id)}>
                            <Icon icon="lucide:file-text" width={16} height={16} />
                          </Button>
                        </Tooltip>
                        <Tooltip content="Crear referencia">
                          <Button isIconOnly size="sm" variant="light">
                            <Icon icon="lucide:arrow-right" width={16} height={16} />
                          </Button>
                        </Tooltip>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <Table 
              removeWrapper 
              aria-label="Pacientes de hoy"
              bottomContent={
                <div className="flex w-full justify-center">
                  <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="primary"
                    page={page}
                    total={pages}
                    onChange={(page) => setPage(page)}
                  />
                </div>
              }
            >
              <TableHeader>
                <TableColumn>ID</TableColumn>
                <TableColumn>NOMBRE</TableColumn>
                <TableColumn>EDAD</TableColumn>
                <TableColumn>GÉNERO</TableColumn>
                <TableColumn>HORA</TableColumn>
                <TableColumn>MOTIVO</TableColumn>
                <TableColumn>ACCIONES</TableColumn>
              </TableHeader>
              <TableBody>
                {currentItems.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell>{patient.id}</TableCell>
                    <TableCell>{patient.name}</TableCell>
                    <TableCell>{patient.age}</TableCell>
                    <TableCell>{patient.gender}</TableCell>
                    <TableCell>{patient.appointment}</TableCell>
                    <TableCell>{patient.reason}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Tooltip content="Ver historial médico">
                          <Button isIconOnly size="sm" color="primary" variant="flat" onPress={() => handleViewHistory(patient.id)}>
                            <Icon icon="lucide:file-text" width={16} height={16} />
                          </Button>
                        </Tooltip>
                        <Tooltip content="Atender paciente">
                          <Button isIconOnly size="sm" variant="light" color="success">
                            <Icon icon="lucide:check" width={16} height={16} />
                          </Button>
                        </Tooltip>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardBody>
      </Card>

      <PatientMedicalHistoryModal 
        isOpen={!!selectedPatient} 
        onClose={() => setSelectedPatient(null)} 
        patientId={selectedPatient || ""}
      />
    </div>
  );
};