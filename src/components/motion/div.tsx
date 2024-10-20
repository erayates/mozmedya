"use client";

import { motion } from "framer-motion";

interface MotionDivProps {
  children: React.ReactNode;
  duration: number;
  className?: string;
}

export const MotionDiv: React.FC<MotionDivProps> = ({
  children,
  duration,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: duration }}
      className={className ?? ""}
    >
      {children}
    </motion.div>
  );
};
