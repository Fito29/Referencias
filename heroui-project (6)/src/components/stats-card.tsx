import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

interface StatsCardProps {
  title: string;
  value: number;
  icon: string;
  color: "primary" | "secondary" | "success" | "warning" | "danger";
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, color }) => {
  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    danger: "bg-danger/10 text-danger",
  };

  return (
    <Card className="border border-default-200">
      <CardBody>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-default-500">{title}</p>
            <p className="text-2xl font-semibold mt-1">{value}</p>
          </div>
          <div className={`p-3 rounded-full ${colorClasses[color]}`}>
            <Icon icon={icon} width={24} height={24} />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};