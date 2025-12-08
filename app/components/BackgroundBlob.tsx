"use client";

import { useState, useEffect } from "react";

const BackgroundBlob = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-0 hidden sm:block"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className="w-[800px] h-[800px] rounded-full opacity-10 blur-4xl"
          style={{
            background:
              "radial-gradient(circle, rgba(96, 165, 250, 0.45) 0%, rgba(96, 165, 250, 0.45) 20%, transparent 60%)",
          }}
        />
      </div>
      <div
        className="pointer-events-none fixed z-0 block sm:hidden"
        style={{
          left: `200px`,
          top: `200px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className="w-[800px] h-[800px] rounded-full opacity-10 blur-4xl"
          style={{
            background:
              "radial-gradient(circle, rgba(96, 165, 250, 0.45) 0%, rgba(96, 165, 250, 0.45) 20%, transparent 60%)",
          }}
        />
      </div>
    </>
  );
};

export default BackgroundBlob;
