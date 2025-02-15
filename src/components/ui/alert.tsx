import { useState } from "react";
import { cn } from "@/lib/utils";
import { X, XCircle, CheckCircle, AlertTriangle, InfoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

type AlertType = "success" | "error" | "warning" | "info";
type Variant = "solid" | "subtle" | "outline";

type AlertProps = {
  type: AlertType;
  title?: string;
  description: string;
  variant?: Variant;
  icon?: React.ReactNode;
  onClose?: () => void;
  dismissible?: boolean;
};

const iconMap: Record<AlertType, React.ReactNode> = {
  success: <CheckCircle />,
  error: <XCircle />,
  warning: <AlertTriangle />,
  info: <InfoIcon />,
};

const variantStyles: Record<Variant, string> = {
  solid: "text-white",
  subtle: "text-gray-900",
  outline: "bg-transparent border-2",
};

const typeStyles: Record<AlertType, Record<Variant, string>> = {
  success: {
    solid: "bg-green-600 hover:bg-green-700",
    subtle: "bg-green-100 border-green-200 text-green-800",
    outline: "border-green-400 text-green-700 hover:bg-green-50",
  },
  error: {
    solid: "bg-red-600 hover:bg-red-700",
    subtle: "bg-red-100 border-red-200 text-red-800",
    outline: "border-red-400 text-red-700 hover:bg-red-50",
  },
  warning: {
    solid: "bg-yellow-600 hover:bg-yellow-700",
    subtle: "bg-yellow-100 border-yellow-200 text-yellow-800",
    outline: "border-yellow-400 text-yellow-700 hover:bg-yellow-50",
  },
  info: {
    solid: "bg-blue-600 hover:bg-blue-700",
    subtle: "bg-blue-100 border-blue-200 text-blue-800",
    outline: "border-blue-400 text-blue-700 hover:bg-blue-50",
  },
};

export function Alert({
  type,
  title,
  description,
  variant = "solid",
  icon,
  onClose,
  dismissible = true,
}: AlertProps) {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    onClose?.();
    setVisible(false);
  };

  if (!visible) return null;

  const currentIcon =
    icon ||
    React.cloneElement(iconMap[type] as React.ReactElement, {
      className: cn(
        "w-5 h-5 flex-shrink-0",
        variant === "solid"
          ? "text-white"
          : type === "success"
            ? "text-green-600"
            : type === "error"
              ? "text-red-600"
              : type === "warning"
                ? "text-yellow-600"
                : "text-blue-600",
      ),
    });

  return (
    <div
      className={cn(
        "group flex items-start gap-4 p-4 rounded-lg shadow-md",
        "transition-all duration-300 animate-in fade-in-zoom slide-in-from-right-8",
        "hover:shadow-lg cursor-pointer",
        variantStyles[variant],
        typeStyles[type][variant],
      )}
      role="alert"
      aria-live="assertive"
    >
      <div
        className={cn(
          "flex items-center justify-center p-2 rounded-full",
          variant === "solid" && "bg-white bg-opacity-20",
          variant === "subtle" && [
            type === "success" && "bg-green-200",
            type === "error" && "bg-red-200",
            type === "warning" && "bg-yellow-200",
            type === "info" && "bg-blue-200",
          ],
          variant === "outline" && [
            type === "success" && "bg-green-50 border border-green-300",
            type === "error" && "bg-red-50 border border-red-300",
            type === "warning" && "bg-yellow-50 border border-yellow-300",
            type === "info" && "bg-blue-50 border border-blue-300",
          ],
        )}
      >
        {currentIcon}
      </div>

      <div className="flex-1">
        {title && <h4 className="font-bold mb-1">{title}</h4>}
        <p className="text-sm">{description}</p>
      </div>

      {dismissible && (
        <Button
          variant="secondary"
          size="sm"
          onClick={handleClose}
          className={cn(
            "ml-auto -mt-1 -mr-2 hover:bg-opacity-20 rounded-full p-2",
            "transition-transform duration-300 hover:rotate-90",
            variant === "solid"
              ? "text-white hover:bg-white/20"
              : "text-gray-500 hover:bg-gray-100",
          )}
          aria-label="Close alert"
        >
          <X className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
}
