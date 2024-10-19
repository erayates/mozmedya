"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  duration?: number;
}

export const Grow = ({ children, width = "100%", duration = 1.5 }: Props) => {
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
          hidden: { opacity: 0, scale: "0%" },
          visible: { opacity: 1, scale: "100%" },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
