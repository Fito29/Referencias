import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Button, Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react";
import type { Referral, ReferralPriority } from "../../types/medical";

interface PendingCounterReferralsTableProps {
  onResponseClick?: (id: string) => void;
}

export const PendingCounterReferralsTable: React.FC<PendingCounterReferralsTableProps> = ({ 
  onResponseClick 
}) => {
  // Datos de ejemplo
  const counterReferrals: Referral[] = [
    { id: "CR-001", patient: "Roberto Díaz", date: "10/05/2023", specialty: "Cardiología", status: "Pendiente", doctor: "Dr. Martín Gutiérrez", priority: "Alta" },
    { id: "CR-002", patient: "Laura Torres", date: "12/05/2023", specialty: "Neurología", status: "Pendiente", doctor: "Dra. Sofía Ramírez", priority: "Media" },
    { id: "CR-003", patient: "Miguel Flores", date: "14/05/2023", specialty: "Traumatología", status: "Pendiente", doctor: "Dr. Fernando López", priority: "Baja" },
  ];

  // Mapeo de prioridades a colores
  const priorityColorMap: Record<ReferralPriority, "danger" | "warning" | "primary"> = {
    "Alta": "danger",
    "Media": "warning",
    "Baja": "primary",
  };

  // Manejador para el botón de responder
  const handleResponseClick = (id: string) => {
    if (onResponseClick) {
      onResponseClick(id);
    }
  };

  return (
    <Table removeWrapper aria-label="Contrarreferencias pendientes">
      <TableHeader>
        <TableColumn>ID</TableColumn>
        <TableColumn>PACIENTE</TableColumn>
        <TableColumn>ESPECIALIDAD</TableColumn>
        <TableColumn>FECHA</TableColumn>
        <TableColumn>PRIORIDAD</TableColumn>
        <TableColumn>ACCIONES</TableColumn>
      </TableHeader>
      <TableBody>
        {counterReferrals.map((cr) => (
          <TableRow key={cr.id}>
            <TableCell>{cr.id}</TableCell>
            <TableCell>{cr.patient}</TableCell>
            <TableCell>{cr.specialty}</TableCell>
            <TableCell>{cr.date}</TableCell>
            <TableCell>
              <Chip color={priorityColorMap[cr.priority as ReferralPriority]} size="sm" variant="flat">
                {cr.priority}
              </Chip>
            </TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Tooltip content="Responder">
                  <Button 
                    isIconOnly 
                    size="sm" 
                    color="primary" 
                    variant="flat"
                    onPress={() => handleResponseClick(cr.id)}
                  >
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
  );
};