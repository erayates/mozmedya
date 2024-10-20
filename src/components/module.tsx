import { cn } from "@/lib/utils";
import { CheckCircleGradient } from "./icons/check";
import { Elements } from "./icons/elements";

interface ModuleProps {
  title: string;
  description: string;
  features: string[];
  //   imageSource: string;
  reverse?: boolean;
}

export const Module: React.FC<ModuleProps> = ({
  title,
  description,
  features,
  //   imageSource,
  reverse,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        className={cn(
          "bg-dark-cream w-full min-h-[300px] rounded-tr-[40px] rounded-bl-[40px]",
          reverse && "order-last"
        )}
      >
        {/* <Image src={imageSource} width={0} height={0} sizes="100vw" alt="alt" /> */}
      </div>
      <div className="md:py-16 space-y-8 w-full">
        <div className="w-16 h-16 bg-light-blue rounded-3xl grid place-items-center">
          <Elements />
        </div>

        <div className="space-y-2">
          <h3 className="text-xlg font-semibold leading-8 text-primary">
            {title}
          </h3>
          <p className="text-secondary font-medium text-sm leading-7">
            {description}
          </p>
        </div>

        <div className="space-y-4">
          {features.map((feature, _idx) => (
            <div className="space-x-2 flex items-center" key={_idx}>
              <div className="w-5 h-5 grid place-items-center">
                <CheckCircleGradient />
              </div>
              <p className="text-primary text-xs font-semibold">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Module;
