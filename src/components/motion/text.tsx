"use client";

import { motion } from "framer-motion";

interface MotionTextProps {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

const MotionText: React.FC<MotionTextProps> = ({
  text,
  as: Tag = "h1",
  className = "",
}) => {
  const _text = text.split(" ");

  return (
    <Tag className={className}>
      {_text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: i / 10,
          }}
          key={i}
        >
          {el === "<br/>" ? <br /> : el}{" "}
        </motion.span>
      ))}
    </Tag>
  );
};

export default MotionText;
