"use client";

import { useState, useEffect } from "react";
import { CountdownProps } from "@/types";

const Countdown = ({ endDate }: CountdownProps) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const distance = new Date(endDate).getTime() - now.getTime();

    if (distance < 0) {
      return null;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      return clearInterval(timer);
    };

    // Adding calculateTimeLeft to dependencies causes infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endDate]);

  if (!timeLeft) {
    return <span className="text-red-500">Ended</span>;
  }

  return (
    <span className="text-green-600 dark:text-green-300">
      {String(timeLeft.days).padStart(2, "0")}d{" "}
      {String(timeLeft.hours).padStart(2, "0")}h{" "}
      {String(timeLeft.minutes).padStart(2, "0")}m{" "}
      {String(timeLeft.seconds).padStart(2, "0")}s
    </span>
  );
};

export default Countdown;
