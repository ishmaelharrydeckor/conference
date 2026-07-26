"use client";

import { useEffect, useState } from "react";

interface TimeRemaining {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export default function CountdownTimer() {
  const targetDate = new Date("2026-10-14T09:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  });

  useEffect(() => {
    function updateTimer() {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: d < 10 ? `0${d}` : `${d}`,
        hours: h < 10 ? `0${h}` : `${h}`,
        minutes: m < 10 ? `0${m}` : `${m}`,
        seconds: s < 10 ? `0${s}` : `${s}`
      });
    }

    updateTimer(); // Initial call
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds }
  ];

  return (
    <div className="grid grid-cols-4 border border-zinc-200 bg-white rounded-lg overflow-hidden max-w-xl shadow-sm hover-border transition-all duration-300">
      {units.map((unit, index) => (
        <div
          key={unit.label}
          className={`flex flex-col items-center justify-center py-6 px-4 ${
            index < 3 ? "border-r border-zinc-250/80" : ""
          }`}
        >
          <span className="font-mono text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
            {unit.value}
          </span>
          <span className="font-mono text-[9px] sm:text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-2">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
