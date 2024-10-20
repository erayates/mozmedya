import { cn } from "../lib/utils";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description: string;
  largeTitle?: boolean;
  smallDescription?: boolean;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  description,
  largeTitle,
  smallDescription,
  className,
}) => {
  return (
    <div className={cn("space-y-4 text-center", className && className)}>
      <p className="text-gradient text-xs font-bold">{subtitle}</p>
      <h2
        className={cn(
          "text-xl text-primary font-semibold leading-[48px]",
          largeTitle && "text-2xl"
        )}
        dangerouslySetInnerHTML={{
          __html: title.replace(/\n/g, "<br/>"),
        }}
      />
      <p
        className={cn(
          "text-secondary text-md font-medium leading-8",
          smallDescription && "text-sm"
        )}
        dangerouslySetInnerHTML={{
          __html: description.replace(/\n/g, "<br/>"),
        }}
      />
    </div>
  );
};

export default SectionHeader;
