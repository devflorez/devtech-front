import * as React from "react";

import { cn } from "@/lib/utils";



const Stepper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex space-x-8 items-center", className)} {...props} />
));


const Step = ({
  icon,
  label,
  active,
}: {
  icon: JSX.Element;
  label: string;
  active: boolean;
}) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div
        className={cn(
          "flex items-center justify-center h-14 w-14 rounded-full border border-input bg-primary-foreground text-sm font-medium text-muted-foreground",
          active
            ? "border-primary text-white bg-primary"
            : "border-input text-muted-foreground"
        )}
      >
        {icon}
      </div>
      <span
        className={cn(
          "text-sm font-medium",
          active ? "text-primary" : "text-muted-foreground"
        )}
      >
        {label}
      </span>
    </div>
  );
};

const StepSeparator = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-0.5 w-20 bg-gray-300" />
    </div>
  );
};

export { Stepper, Step, StepSeparator };
