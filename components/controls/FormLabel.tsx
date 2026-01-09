import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  label: string;
  className?: string;
  required?: boolean;
}

export const FormLabel: FC<FormLabelProps> = ({
  label,
  htmlFor,
  className,
  required,
  ...props
}) => {
  return (
    <label
      htmlFor={htmlFor}
      {...props}
      className={cn(`text-primary text-lg mb-3 inline-flex`, className)}
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
  );
};
