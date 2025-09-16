import React from "react";
import { Navbar, NavbarBrand, NavbarContent, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { Icon } from "@iconify/react";

interface HeaderProps {
  currentRole?: "doctor" | "admin" | "director" | "patient";
  onRoleChange?: (role: "doctor" | "admin" | "director" | "patient") => void;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentRole = "doctor",
  onRoleChange,
  onLogout
}) => {
  const doctorName = "Dr. Juan Pérez";
  const doctorSpecialty = "Medicina General";
  const doctorUnit = "Centro Médico Nacional";

  return (
    <Navbar maxWidth="xl" className="bg-primary text-white">
      <NavbarBrand>
        <Icon icon="lucide:heart-pulse" width={32} height={32} className="mr-2" />
        <p className="font-bold text-inherit">Sistema de Referencias Médicas</p>
      </NavbarBrand>

      <NavbarContent justify="end">
        <div className="hidden sm:flex flex-col items-end mr-4">
          <span className="text-sm font-semibold">{doctorName}</span>
          <span className="text-xs opacity-80">{doctorSpecialty} | {doctorUnit}</span>
        </div>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              name={doctorName}
              size="sm"
              src="https://img.heroui.chat/image/avatar?w=150&h=150&u=1"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Acciones de perfil">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Conectado como</p>
              <p className="font-semibold">{doctorName}</p>
            </DropdownItem>
            <DropdownItem key="settings">Mi perfil</DropdownItem>
            <DropdownItem key="configurations">Configuración</DropdownItem>
            <DropdownItem key="help_and_feedback">Ayuda & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Cerrar sesión
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};