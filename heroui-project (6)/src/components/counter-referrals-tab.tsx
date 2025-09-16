import React from "react";
import { Card, CardBody, CardHeader, Button, Input, Tabs, Tab, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip, Pagination } from "@heroui/react";
import { Icon } from "@iconify/react";
import { CounterReferralResponseModal } from "./counter-referral-response-modal";

export const CounterReferralsTab: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState("pending");
  const [selectedCounterReferral, setSelectedCounterReferral] = React.useState<string | null>(null);
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 5;

  const counterReferrals = {
    pending: [
      { id: "CR-001", patient: "Roberto Díaz", date: "10/05/2023", specialty: "Cardiología", priority: "Alta", doctor: "Dr. Martín Gutiérrez" },
      { id: "CR-002", patient: "Laura Torres", date: "12/05/2023", specialty: "Neurología", priority: "Media", doctor: "Dra. Sofía Ramírez" },
      { id: "CR-003", patient: "Miguel Flores", date: "14/05/2023", specialty: "Traumatología", priority: "Baja", doctor: "Dr. Fernando López" },
      { id: "CR-004", patient: "Claudia Vargas", date: "16/05/2023", specialty: "Oftalmología", priority: "Media", doctor: "Dra. Carmen Vega" },
      { id: "CR-005", patient: "Jorge Mendoza", date: "18/05/2023", specialty: "Dermatología", priority: "Baja", doctor: "Dr. Javier Morales" },
      { id: "CR-006", patient: "Patricia Luna", date: "20/05/2023", specialty: "Endocrinología", priority: "Alta", doctor: "Dra. Isabel Torres" },
    ],
    responded: [
      { id: "CR-007", patient: "Alejandro Ruiz", date: "05/05/2023", specialty: "Cardiología", status: "Completada", doctor: "Dr. Martín Gutiérrez" },
      { id: "CR-008", patient: "Carmen Ortiz", date: "07/05/2023", specialty: "Neurología", status: "Completada", doctor: "Dra. Sofía Ramírez" },
      { id: "CR-009", patient: "Daniel Vega", date: "09/05/2023", specialty: "Traumatología", status: "Completada", doctor: "Dr. Fernando López" },
    ]
  };

  const priorityColorMap: Record<string, "danger" | "warning" | "primary"> = {
    "Alta": "danger",
    "Media": "warning",
    "Baja": "primary",
  };

  const currentItems = React.useMemo(() => {
    const items = selectedTab === "pending" ? counterReferrals.pending : counterReferrals.responded;
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return items.slice(start, end);
  }, [selectedTab, page]);

  const pages = Math.ceil(
    (selectedTab === "pending" ? counterReferrals.pending.length : counterReferrals.responded.length) / rowsPerPage
  );

  const handleResponseClick = (id: string) => {
    setSelectedCounterReferral(id);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Contrarreferencias</h1>

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
            <Tab 
              key="pending" 
              title={
                <div className="flex items-center gap-2">
                  <span>Pendientes</span>
                  <Chip size="sm" color="warning">{counterReferrals.pending.length}</Chip>
                </div>
              }
            />
            <Tab 
              key="responded" 
              title={
                <div className="flex items-center gap-2">
                  <span>Respondidas</span>
                  <Chip size="sm" color="success">{counterReferrals.responded.length}</Chip>
                </div>
              }
            />
          </Tabs>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
            <Input
              placeholder="Buscar por paciente o ID..."
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

          {selectedTab === "pending" ? (
            <Table 
              removeWrapper 
              aria-label="Contrarreferencias pendientes"
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
                <TableColumn>PACIENTE</TableColumn>
                <TableColumn>ESPECIALIDAD</TableColumn>
                <TableColumn>MÉDICO ORIGEN</TableColumn>
                <TableColumn>FECHA</TableColumn>
                <TableColumn>PRIORIDAD</TableColumn>
                <TableColumn>ACCIONES</TableColumn>
              </TableHeader>
              <TableBody>
                {currentItems.map((cr) => (
                  <TableRow key={cr.id}>
                    <TableCell>{cr.id}</TableCell>
                    <TableCell>{cr.patient}</TableCell>
                    <TableCell>{cr.specialty}</TableCell>
                    <TableCell>{cr.doctor}</TableCell>
                    <TableCell>{cr.date}</TableCell>
                    <TableCell>
                      <Chip color={priorityColorMap[cr.priority as string]} size="sm" variant="flat">
                        {cr.priority}
                      </Chip>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Tooltip content="Responder">
                          <Button isIconOnly size="sm" color="primary" variant="flat" onPress={() => handleResponseClick(cr.id)}>
                            <Icon icon="lucide:message-circle" width={16} height={16} />
                          </Button>
                        </Tooltip>
                        <Tooltip content="Ver detalles">
                          <Button isIconOnly size="sm" variant="light">
                            <Icon icon="lucide:eye" width={16} height={16} />
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
              aria-label="Contrarreferencias respondidas"
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
                <TableColumn>PACIENTE</TableColumn>
                <TableColumn>ESPECIALIDAD</TableColumn>
                <TableColumn>MÉDICO ORIGEN</TableColumn>
                <TableColumn>FECHA</TableColumn>
                <TableColumn>ESTADO</TableColumn>
                <TableColumn>ACCIONES</TableColumn>
              </TableHeader>
              <TableBody>
                {currentItems.map((cr) => (
                  <TableRow key={cr.id}>
                    <TableCell>{cr.id}</TableCell>
                    <TableCell>{cr.patient}</TableCell>
                    <TableCell>{cr.specialty}</TableCell>
                    <TableCell>{cr.doctor}</TableCell>
                    <TableCell>{cr.date}</TableCell>
                    <TableCell>
                      <Chip color="success" size="sm" variant="flat">
                        {cr.status}
                      </Chip>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Tooltip content="Ver detalles">
                          <Button isIconOnly size="sm" variant="light">
                            <Icon icon="lucide:eye" width={16} height={16} />
                          </Button>
                        </Tooltip>
                        <Tooltip content="Imprimir">
                          <Button isIconOnly size="sm" variant="light">
                            <Icon icon="lucide:printer" width={16} height={16} />
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

      <CounterReferralResponseModal 
        isOpen={!!selectedCounterReferral} 
        onClose={() => setSelectedCounterReferral(null)} 
        counterReferralId={selectedCounterReferral || ""}
      />
    </div>
  );
};