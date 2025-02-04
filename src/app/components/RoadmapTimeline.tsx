"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { roadmapEvents } from "../data/timeline";
import { ROADMAP_YEARS } from "../constants/timeline";
import clsx from "clsx";
import Image from "next/image";
import ArrowIcon from "@/app/assets/images/svg/arrow.svg";

const RoadmapTimeline = () => {
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);

  const setEqualHeights = (el: any) => {
    let counter = 0;
    for (let i = 0; i < el.length; i++) {
      const singleHeight = el[i].offsetHeight;

      if (counter < singleHeight) {
        counter = singleHeight;
      }
    }

    for (let i = 0; i < el.length; i++) {
      el[i].style.height = `${counter}px`;
    }
  };

  useEffect(() => {
    const elH = document.querySelectorAll(".timeline li > div");
    setEqualHeights(elH);
  }, []);

  const [year, setYear] = useState<string>("All");

  const events = useMemo(() => {
    if (year === "All") {
      return Object.entries(roadmapEvents)
        .map((e, i) => e[1])
        .flat();
    } else {
      return roadmapEvents[year];
    }
  }, [year]);

  const handleHorizantalScroll = (
    element: any,
    speed: number | undefined = 25,
    distance: number,
    step: number = 2000
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);

    return () => {
      clearInterval(slideTimer);
    };
  };

  return (
    <>
      <div className="w-full flex flex-col space-y-16">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <div className="flex items-center justify-between space-x-4">
            {ROADMAP_YEARS.map((y, i) => (
              <button
                key={i}
                className={clsx(
                  "appearance-none outline-none text-sm px-4 py-2 rounded-full",
                  y === year
                    ? "bg-primary text-white"
                    : "bg-[#53566B30] text-[#919191]"
                )}
                onClick={() => setYear(y)}
              >
                {y}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between space-x-3">
            <button
              className="appearance-none outline-none bg-[#53566B] w-8 h-8 rounded-full flex items-center justify-center disabled:cursor-not-allowed"
              onClick={() =>
                handleHorizantalScroll(elementRef.current, 20, 200, -20)
              }
              disabled={arrowDisable}
            >
              <Image
                src={ArrowIcon.src}
                alt="left_arrow"
                className={clsx("opacity-50", arrowDisable && "opacity-20")}
                width={16}
                height={16}
              />
            </button>
            <button
              className="appearance-none outline-none bg-[#53566B] w-8 h-8 rounded-full flex items-center justify-center"
              onClick={() =>
                handleHorizantalScroll(elementRef.current, 20, 200, 20)
              }
            >
              <Image
                src={ArrowIcon.src}
                alt="right_arrow"
                className="opacity-50 rotate-180"
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>
        <section className="timeline w-full px-0 py-8">
          <ol ref={elementRef}>
            {events &&
              events.map((e, i) => (
                <li
                  key={i}
                  className="relative group hover:before:!bg-secondary before:transition-all"
                >
                  <div className="hover:text-secondary group-hover:cursor-pointer transition-colors duration-75 ease-in-out">
                    <time className="!text-[#919191] group-hover:!text-white">
                      {e.date}
                    </time>
                    {e.link ? (
                      <a
                        href={e.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline ml-2"
                      >
                        {e.description}
                      </a>
                    ) : (
                      <span>{e.description}</span>
                    )}
                  </div>
                </li>
              ))}
            <li></li>
          </ol>
        </section>
      </div>
    </>
  );
};

export default RoadmapTimeline;
