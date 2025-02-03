"use client";

import clsx from "clsx";
import { FC, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RotateWordsProps {
  adjectives: string[];
  className: string;
}

const RotateWords: FC<RotateWordsProps> = ({ adjectives, className }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      let next = index + 1;
      setIndex(next % adjectives.length);
    }, 1.5 * 1000);

    return () => clearTimeout(id);
  }, [adjectives, index]);

  return (
    <div style={{ position: "relative" }}>
      <AnimatePresence initial={false}>
        <motion.span
          key={index}
          layout
          variants={{
            enter: {
              translateY: 30,
              opacity: 0,
              height: 0,
            },
            center: {
              zIndex: 1,
              translateY: 0,
              opacity: 1,
              height: "auto",
            },
            exit: {
              zIndex: 0,
              translateY: -30,
              opacity: 0,
              height: 0,
            },
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            translateY: { type: "spring", stiffness: 1000, damping: 150 },
            opacity: { duration: 0.1 },
          }}
          style={{ position: "absolute" }}
          className={clsx(className)}
        >
          {adjectives[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default RotateWords;
