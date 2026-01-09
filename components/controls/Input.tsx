import { cn } from "@/lib/utils";
import { forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: FieldError;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="relative pb-4">
        <input
          ref={ref}
          className={cn(
            `border-2 border-[#d9dfe7] h-[55px] px-3 py-2 w-full outline-none focus:border-primary transition-colors `,
            {
              className: className,
              "border-red-500 focus:border-red-500 placeholder:text-red-500 text-red-500":
                error,
            }
          )}
          {...props}
        />

        {error && (
          <p
            className="text-red-500 text-xs mt-1 line-clamp-1 absolute bottom-0 left-0 whitespace-nowrap text-ellipsis"
            title={error.message}
          >
            {error.message}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
