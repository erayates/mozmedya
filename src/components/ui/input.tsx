import { cn } from "@/lib/utils";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface InputProps {
  name: string;
  placeholder: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ name, placeholder, className }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex flex-col">
          <input
            {...field}
            className={cn(
              "border border-ghost rounded-2xl text-secondary h-[48px] placeholder:text-secondary leading-6 px-3 outline-none focus:shadow-reference-card focus:border-blue text-[12px] font-medium transition-all duration-300 focus:transition-all focus:duration-300",
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

export default Input;
