"use client";

import React, { FC, ReactNode, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import clsx from "clsx";

interface FeatureTimelineItemProps {
  show: boolean;
  title: string | ReactNode;
  description: string | ReactNode;
}

const FeatureTimelineItem: FC<FeatureTimelineItemProps> = ({
  show,
  title,
  description,
}) => {
  return (
    <div className="flex space-x-6">
      <div className="w-4 h-4 border border-[#53566B] bg-[#18191F] rounded-full flex items-center justify-center mt-3">
        <div
          className={clsx(
            "w-2 h-2 bg-secondary rounded-full",
            show ? "block" : "hidden"
          )}
        ></div>
      </div>
      <div
        className={clsx(
          "flex flex-col space-y-2 w-[80%] text-white transition-colors duration-150 ease-in",
          show ? "text-opacity-100" : "text-opacity-25"
        )}
      >
        <p className="text-4xl">{title}</p>
        <p className="text-xl font-thin">{description}</p>
      </div>
    </div>
  );
};

const FeatureTimeline = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const springifiedScrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [scrollPercentage, setScrollPercentage] = useState(0);

  useMotionValueEvent(springifiedScrollY, "change", (latest) => {
    setScrollPercentage(latest);
  });

  return (
    <>
      <div
        ref={ref}
        className="relative z-10 flex flex-col space-y-12 w-full md:w-1/2 my-16"
      >
        <FeatureTimelineItem
          show={scrollPercentage > 0}
          title="Deposit"
          description={
            <span className="text-opacity-25">
              Collateralize your locked liquidity on decentralized exchanges to
              <span
                className={clsx(
                  "font-normal pl-1 text-secondary",
                  scrollPercentage > 0 ? "text-opacity-100" : "text-opacity-25"
                )}
              >
                borrow UND stablecoin
              </span>
            </span>
          }
        />

        <FeatureTimelineItem
          show={scrollPercentage > 0.3}
          title="Borrow"
          description={
            <span className="text-opacity-25">
              Borrow UND at{" "}
              <span
                className={clsx(
                  "font-normal pl-1 text-secondary",
                  scrollPercentage > 0.3
                    ? "text-opacity-100"
                    : "text-opacity-25"
                )}
              >
                0% interest
              </span>
            </span>
          }
        />
        <FeatureTimelineItem
          show={scrollPercentage > 0.7}
          title="Earn"
          description={
            <span className="text-opacity-25">
              Earn rewards by
              <span
                className={clsx(
                  "font-normal pl-1 text-secondary",
                  scrollPercentage > 0.7
                    ? "text-opacity-100"
                    : "text-opacity-25"
                )}
              >
                adding liquidity
              </span>
              &nbsp;to the
              <span
                className={clsx(
                  "font-normal pl-1 text-secondary",
                  scrollPercentage > 0.7
                    ? "text-opacity-100"
                    : "text-opacity-25"
                )}
              >
                UND pool
              </span>
            </span>
          }
        />

        <FeatureTimelineItem
          show={scrollPercentage > 0.95}
          title="Repay"
          description={
            <span className="text-opacity-25">
              Repay the UND loan
              <span
                className={clsx(
                  "font-normal pl-1 text-secondary",
                  scrollPercentage > 0.95
                    ? "text-opacity-100"
                    : "text-opacity-25"
                )}
              >
                anytime
              </span>{" "}
              to unlock your collateralized assets
            </span>
          }
        />

        <div
          className="absolute w-[1px] bg-[#53566B] left-2 -top-8 mt-0 -z-10"
          style={{ height: 400 * scrollPercentage }}
        ></div>
      </div>
    </>
  );
};

export default FeatureTimeline;
