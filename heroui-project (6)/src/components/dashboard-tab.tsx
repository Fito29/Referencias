import React from "react";
import { Card, CardBody, CardHeader, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
// Actualizar importaciones para usar la estructura plana
import { StatsCard } from "./stats-card";
import { RecentReferralsTable } from "./recent-referrals-table";
import { PendingCounterReferralsTable } from "./pending-counter-referrals-table";

export const DashboardTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Dashboard Médico</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard 
          title="Referencias Emitidas" 
          value={24} 
          icon="lucide:file-text" 
          color="primary" 
        />
        <StatsCard 
          title="Contrarreferencias Pendientes" 
          value={8} 
          icon="lucide:clock" 
          color="warning" 
        />
        <StatsCard 
          title="Pacientes Atendidos" 
          value={156} 
          icon="lucide:users" 
          color="success" 
        />
        <StatsCard 
          title="Referencias Rechazadas" 
          value={3} 
          icon="lucide:x-circle" 
          color="danger" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Referencias Recientes</h2>
            <Button size="sm" color="primary" variant="flat" as="a" href="#referrals">
              Ver todas
            </Button>
          </CardHeader>
          <CardBody>
            <RecentReferralsTable />
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Contrarreferencias Pendientes</h2>
            <Button size="sm" color="primary" variant="flat" as="a" href="#counter-referrals">
              Ver todas
            </Button>
          </CardHeader>
          <CardBody>
            <PendingCounterReferralsTable />
          </CardBody>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Pacientes Programados Hoy</h2>
          <Button size="sm" color="primary" variant="flat" as="a" href="#patients">
            Ver todos
          </Button>
        </CardHeader>
        <CardBody>
          <div className="space-y-4">
            {[1, 2, 3].map((index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Icon icon="lucide:user" className="text-primary" width={24} height={24} />
                  </div>
                  <div>
                    <p className="font-medium">María González</p>
                    <p className="text-sm text-default-500">10:30 AM - Consulta General</p>
                  </div>
                </div>
                <Button size="sm" color="primary">Ver Historial</Button>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};