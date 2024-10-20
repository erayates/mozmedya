import { cn } from "@/lib/utils";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface InputProps {
  name: string;
  placeholder: string;
  className?: string;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  className,
  icon,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex flex-col relative group">
          {/* Icon */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 grid place-items-center text-secondary group-focus-within:text-blue transition-colors duration-300">
            {icon && icon}
          </div>
          {/* Input */}
          <input
            {...field}
            className={cn(
              "border border-ghost rounded-2xl text-secondary h-[48px] placeholder:text-secondary leading-6 px-3 outline-none focus:shadow-reference-card focus:border-blue text-[12px] font-medium transition-all duration-300 focus:transition-all focus:duration-300",
              className && className,
              icon && "pl-12 pr-3"
            )}
            placeholder={placeholder}
          />
          {/* Error message */}
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

export default Input;
