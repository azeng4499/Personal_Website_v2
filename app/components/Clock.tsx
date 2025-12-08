"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Chicago",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      const now = new Date();
      const parts = formatter.formatToParts(now);

      const hour = parts.find((p) => p.type === "hour")?.value || "12";
      const minute = parts.find((p) => p.type === "minute")?.value || "00";
      const dayPeriod =
        parts.find((p) => p.type === "dayPeriod")?.value || "AM";

      const formattedTime = `${hour}:${minute} ${dayPeriod}`;
      setTime(formattedTime);
    };

    // Update immediately
    updateTime();

    // Update every second
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span className="font-bold">{time}</span>;
}
