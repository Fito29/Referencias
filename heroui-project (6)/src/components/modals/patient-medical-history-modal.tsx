import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Tabs, Tab, Card, CardBody, Divider, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";
import { Icon } from "@iconify/react";

interface PatientMedicalHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  patientId: string;
}

export const PatientMedicalHistoryModal: React.FC<PatientMedicalHistoryModalProps> = ({ 
  // ... existing code ...
});