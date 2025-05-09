"use client";

import { useEffect, useState } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2025-05-24T00:00:00"); // Change as needed

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60 )) / (1000));

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000); // update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='py-16 bg-white text-center'>
      <h3 className='text-4xl font-bold text-gray-800 mb-10 font-comic'>
        Counting Down to Our Little Hero&apos;s Arrival ⏰
      </h3>
      <div className='flex justify-center space-x-6'>
        <div className='bg-softpink rounded-full p-6 w-24 h-24 flex flex-col items-center justify-center shadow-lg transform hover:scale-110 transition duration-300'>
          <div className='text-3xl font-bold text-black'>{timeLeft.days}</div>
          <div className='text-black font-comic'>Days</div>
        </div>
        <div className='bg-babyblue rounded-full p-6 w-24 h-24 flex flex-col items-center justify-center shadow-lg transform hover:scale-110 transition duration-300'>
          <div className='text-3xl font-bold text-black'>{timeLeft.hours}</div>
          <div className='text-black font-comic'>Hours</div>
        </div>
        <div className='bg-mint rounded-full p-6 w-24 h-24 flex flex-col items-center justify-center shadow-lg transform hover:scale-110 transition duration-300'>
          <div className='text-3xl font-bold text-black'>
            {timeLeft.minutes}
          </div>
          <div className='text-black font-comic'>Minutes</div>
        </div>
        <div className='bg-mint rounded-full p-6 w-24 h-24 flex flex-col items-center justify-center shadow-lg transform hover:scale-110 transition duration-300'>
          <div className='text-3xl font-bold text-black'>
            {timeLeft.seconds}
          </div>
          <div className='text-black font-comic'>Seconds</div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
