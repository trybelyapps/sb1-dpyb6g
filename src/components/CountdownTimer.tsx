import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-4 mb-8">
      <Clock className="w-6 h-6 text-red-600" />
      <div className="flex space-x-4">
        <div className="text-center">
          <div className="text-3xl font-bold">{timeLeft.days}</div>
          <div className="text-sm text-neutral-400">Days</div>
        </div>
        <div className="text-3xl font-bold">:</div>
        <div className="text-center">
          <div className="text-3xl font-bold">{timeLeft.hours}</div>
          <div className="text-sm text-neutral-400">Hours</div>
        </div>
        <div className="text-3xl font-bold">:</div>
        <div className="text-center">
          <div className="text-3xl font-bold">{timeLeft.minutes}</div>
          <div className="text-sm text-neutral-400">Minutes</div>
        </div>
        <div className="text-3xl font-bold">:</div>
        <div className="text-center">
          <div className="text-3xl font-bold">{timeLeft.seconds}</div>
          <div className="text-sm text-neutral-400">Seconds</div>
        </div>
      </div>
    </div>
  );
}