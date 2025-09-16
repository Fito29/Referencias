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
  // Datos del usuario según el rol
  const userData = {
    doctor: {
      name: "Dr. Juan Pérez",
      role: "Medicina General",
      unit: "Centro Médico Nacional",
      icon: "lucide:stethoscope",
      color: "primary"
    },
    admin: {
      name: "Ana Rodríguez",
      role: "Administrativo",
      unit: "Centro Médico Nacional",
      icon: "lucide:briefcase",
      color: "success"
    },
    director: {
      name: "Dr. Carlos Gómez",
      role: "Director Médico",
      unit: "Centro Médico Nacional",
      icon: "lucide:award",
      color: "warning"
    },
    patient: {
      name: "María González",
      role: "Paciente",
      unit: "",
      icon: "lucide:user",
      color: "secondary"
    }
  };

  // Datos del usuario actual
  const currentUser = userData[currentRole];

  // Manejador para cerrar sesión
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <Navbar maxWidth="xl" className="bg-primary text-white">
      {/* Logo y título */}
      <NavbarBrand>
        <Icon icon="lucide:heart-pulse" width={32} height={32} className="mr-2" />
        <p className="font-bold text-inherit">Sistema de Referencias Médicas</p>
      </NavbarBrand>

      {/* Perfil de usuario */}
      <NavbarContent justify="end">
        <div className="hidden sm:flex flex-col items-end mr-4">
          <span className="text-sm font-semibold">{currentUser.name}</span>
          <span className="text-xs opacity-80">
            {currentUser.role} {currentUser.unit && `| ${currentUser.unit}`}
          </span>
        </div>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              name={currentUser.name}
              size="sm"
              src={`https://img.heroui.chat/image/avatar?w=150&h=150&u=${
                currentRole === "doctor" ? "1" : 
                currentRole === "admin" ? "2" : 
                currentRole === "director" ? "3" : "4"
              }`}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Acciones de perfil">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Conectado como</p>
              <p className="font-semibold">{currentUser.name}</p>
            </DropdownItem>
            <DropdownItem key="settings">Mi perfil</DropdownItem>
            <DropdownItem key="configurations">Configuración</DropdownItem>
            <DropdownItem key="help_and_feedback">Ayuda & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger" onPress={handleLogout}>
              Cerrar sesión
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};