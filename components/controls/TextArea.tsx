import { cn } from "@/lib/utils";
import { forwardRef, TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  className?: string;
  error?: FieldError;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { placeholder, rows = 4, disabled = false, className = "", error, ...rest },
    ref
  ) => {
    return (
      <div className="relative pb-4">
        <textarea
          {...rest}
          ref={ref}
          className={cn(
            `border-2 border-[#d9dfe7] resize-y min-h-[150px] px-3 py-2 w-full outline-none focus:border-primary transition-colors`,
            {
              className: className,
              "border-red-500 focus:border-red-500 placeholder:text-red-500 text-red-500":
                error,
            }
          )}
          placeholder={placeholder}
          rows={rows}
          disabled={disabled}
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

TextArea.displayName = "TextArea";
