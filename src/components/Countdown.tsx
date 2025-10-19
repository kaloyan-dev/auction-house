import { useState, useEffect } from "react";
import { CountdownProps } from "@/types";

const Countdown = ({ endDate }: CountdownProps) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const distance = new Date(endDate).getTime() - now.getTime();

    if (distance < 0) return null;

    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  if (!timeLeft) {
    return <span className="text-red-500">Ended</span>;
  }

  return (
    <span className="text-green-300">
      {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </span>
  );
};

export default Countdown;
