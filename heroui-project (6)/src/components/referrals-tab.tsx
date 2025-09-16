import React from "react";
import { Card, CardBody, CardHeader, Button, Input, Select, SelectItem, Tabs, Tab, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip, Pagination } from "@heroui/react";
import { Icon } from "@iconify/react";
import { NewReferralForm } from "./new-referral-form";

export const ReferralsTab: React.FC = () => {
  const [isNewReferralOpen, setIsNewReferralOpen] = React.useState(false);
  const [filterStatus, setFilterStatus] = React.useState("all");
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 5;

  const referrals = [
    { id: "REF-001", patient: "Carlos Rodríguez", date: "15/05/2023", specialty: "Cardiología", status: "Aceptada", doctor: "Dr. Martín Gutiérrez" },
    { id: "REF-002", patient: "Ana Martínez", date: "18/05/2023", specialty: "Neurología", status: "Pendiente", doctor: "Dra. Sofía Ramírez" },
    { id: "REF-003", patient: "Luis Sánchez", date: "20/05/2023", specialty: "Traumatología", status: "Rechazada", doctor: "Dr. Fernando López" },
    { id: "REF-004", patient: "Elena Gómez", date: "22/05/2023", specialty: "Oftalmología", status: "Aceptada", doctor: "Dra. Carmen Vega" },
    { id: "REF-005", patient: "Pedro Núñez", date: "25/05/2023", specialty: "Dermatología", status: "Pendiente", doctor: "Dr. Javier Morales" },
    { id: "REF-006", patient: "Lucía Herrera", date: "27/05/2023", specialty: "Endocrinología", status: "Aceptada", doctor: "Dra. Isabel Torres" },
    { id: "REF-007", patient: "Mario Vargas", date: "30/05/2023", specialty: "Urología", status: "Rechazada", doctor: "Dr. Ricardo Fuentes" },
  ];

  const statusColorMap: Record<string, "success" | "warning" | "danger"> = {
    "Aceptada": "success",
    "Pendiente": "warning",
    "Rechazada": "danger",
  };

  const filteredReferrals = filterStatus === "all" 
    ? referrals 
    : referrals.filter(ref => ref.status.toLowerCase() === filterStatus);

  const pages = Math.ceil(filteredReferrals.length / rowsPerPage);
  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredReferrals.slice(start, end);
  }, [page, filteredReferrals]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-foreground">Gestión de Referencias</h1>
        <Button 
          color="primary" 
          startContent={<Icon icon="lucide:plus" />}
          onPress={() => setIsNewReferralOpen(true)}
        >
          Nueva Referencia
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between w-full gap-4">
            <div className="flex flex-col sm:flex-row gap-4 flex-grow">
              <Input
                placeholder="Buscar por paciente o ID..."
                startContent={<Icon icon="lucide:search" className="text-default-400" />}
                className="max-w-xs"
              />
              <Select 
                placeholder="Estado" 
                className="max-w-xs"
                selectedKeys={[filterStatus]}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <SelectItem key="all" value="all">Todos los estados</SelectItem>
                <SelectItem key="aceptada" value="aceptada">Aceptadas</SelectItem>
                <SelectItem key="pendiente" value="pendiente">Pendientes</SelectItem>
                <SelectItem key="rechazada" value="rechazada">Rechazadas</SelectItem>
              </Select>
            </div>
            <div className="flex gap-2">
              <Button variant="flat" startContent={<Icon icon="lucide:filter" />}>
                Filtros
              </Button>
              <Button variant="flat" startContent={<Icon icon="lucide:download" />}>
                Exportar
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <Table 
            removeWrapper 
            aria-label="Referencias médicas"
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
              <TableColumn>MÉDICO DESTINO</TableColumn>
              <TableColumn>FECHA</TableColumn>
              <TableColumn>ESTADO</TableColumn>
              <TableColumn>ACCIONES</TableColumn>
            </TableHeader>
            <TableBody>
              {items.map((referral) => (
                <TableRow key={referral.id}>
                  <TableCell>{referral.id}</TableCell>
                  <TableCell>{referral.patient}</TableCell>
                  <TableCell>{referral.specialty}</TableCell>
                  <TableCell>{referral.doctor}</TableCell>
                  <TableCell>{referral.date}</TableCell>
                  <TableCell>
                    <Chip color={statusColorMap[referral.status]} size="sm" variant="flat">
                      {referral.status}
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
                      <Tooltip content="Cancelar">
                        <Button isIconOnly size="sm" variant="light" color="danger">
                          <Icon icon="lucide:x" width={16} height={16} />
                        </Button>
                      </Tooltip>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>

      <NewReferralForm isOpen={isNewReferralOpen} onClose={() => setIsNewReferralOpen(false)} />
    </div>
  );
};