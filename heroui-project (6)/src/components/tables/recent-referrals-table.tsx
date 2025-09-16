import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import type { Referral, ReferralStatus } from "../../types/medical";

export const RecentReferralsTable: React.FC = () => {
  // Datos de ejemplo
  const referrals: Referral[] = [
    { id: "REF-001", patient: "Carlos Rodríguez", date: "15/05/2023", specialty: "Cardiología", status: "Aceptada", doctor: "Dr. Martín Gutiérrez" },
    { id: "REF-002", patient: "Ana Martínez", date: "18/05/2023", specialty: "Neurología", status: "Pendiente", doctor: "Dra. Sofía Ramírez" },
    { id: "REF-003", patient: "Luis Sánchez", date: "20/05/2023", specialty: "Traumatología", status: "Rechazada", doctor: "Dr. Fernando López" },
    { id: "REF-004", patient: "Elena Gómez", date: "22/05/2023", specialty: "Oftalmología", status: "Aceptada", doctor: "Dra. Carmen Vega" },
  ];

  // Mapeo de estados a colores
  const statusColorMap: Record<ReferralStatus, "success" | "warning" | "danger"> = {
    "Aceptada": "success",
    "Pendiente": "warning",
    "Rechazada": "danger",
    "Completada": "success"
  };

  return (
    <Table removeWrapper aria-label="Referencias recientes">
      <TableHeader>
        <TableColumn>ID</TableColumn>
        <TableColumn>PACIENTE</TableColumn>
        <TableColumn>ESPECIALIDAD</TableColumn>
        <TableColumn>FECHA</TableColumn>
        <TableColumn>ESTADO</TableColumn>
        <TableColumn>ACCIONES</TableColumn>
      </TableHeader>
      <TableBody>
        {referrals.map((referral) => (
          <TableRow key={referral.id}>
            <TableCell>{referral.id}</TableCell>
            <TableCell>{referral.patient}</TableCell>
            <TableCell>{referral.specialty}</TableCell>
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
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};