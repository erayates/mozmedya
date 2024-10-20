import { cn } from "@/lib/utils";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface TextareaProps {
  name: string;
  placeholder: string;
  className?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  name,
  placeholder,
  className,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex flex-col">
          <textarea
            {...field}
            className={cn(
              "border border-ghost resize-none rounded-2xl h-[120px] text-secondary placeholder:text-secondary leading-6 p-3 outline-none focus:shadow-reference-card focus:border-blue text-[12px] font-medium transition-all duration-300 focus:transition-all focus:duration-300",
              className && className
            )}
            placeholder={placeholder}
          />
          {fieldState.error && (
            <span className="text-red-500 text-[10px] pl-2 pt-1 font-semibold">
              {fieldState.error.message}
            </span>
          )}
        </div>
      )}
    />
  );
};

export default Textarea;
