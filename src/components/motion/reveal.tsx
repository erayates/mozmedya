"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  duration?: number;
  axis?: "x" | "y";
  className?: string;
}

export const Reveal = ({
  children,
  width = "100%",
  duration = 1.5,
  axis = "y",
  className = "",
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, [axis]: 150 },
          visible: { opacity: 1, [axis]: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        className={className}
        transition={{ duration: duration, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
