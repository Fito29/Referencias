import React from "react";
import { Tabs, Tab } from "@heroui/react";
import { DashboardTab } from "./components/dashboard-tab";
import { ReferralsTab } from "./components/referrals-tab";
import { CounterReferralsTab } from "./components/counter-referrals-tab";
import { PatientsTab } from "./components/patients-tab";
import { Header } from "./components/header";

export default function App() {
  const [selected, setSelected] = React.useState("dashboard");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <Tabs 
          aria-label="Opciones" 
          selectedKey={selected} 
          onSelectionChange={setSelected}
          className="mb-6"
        >
          <Tab key="dashboard" title="Dashboard">
            <DashboardTab />
          </Tab>
          <Tab key="referrals" title="Referencias">
            <ReferralsTab />
          </Tab>
          <Tab key="counter-referrals" title="Contrarreferencias">
            <CounterReferralsTab />
          </Tab>
          <Tab key="patients" title="Pacientes">
            <PatientsTab />
          </Tab>
        </Tabs>
      </main>
    </div>
  );
}