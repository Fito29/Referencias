// ... existing imports ...

interface StatsCardProps {
  title: string;
  value: number;
  icon: string;
  color: "primary" | "secondary" | "success" | "warning" | "danger";
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, color }) => {
  // Agrupar clases Tailwind por categorías
  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    danger: "bg-danger/10 text-danger",
  };

  // Clases para layout
  const layoutClasses = "flex justify-between items-center";
  
  // Clases para el contenedor del icono
  const iconContainerClasses = "p-3 rounded-full";

  return (
    <Card className="border border-default-200">
      <CardBody>
        <div className={layoutClasses}>
          <div>
            <p className="text-sm text-default-500">{title}</p>
            <p className="text-2xl font-semibold mt-1">{value}</p>
          </div>
          <div className={`${iconContainerClasses} ${colorClasses[color]}`}>
            <Icon icon={icon} width={24} height={24} />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};