import { useEffect, useState } from "react";

const month = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

export const useSetDate = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(
        `${new Date().getUTCDate()} 
          ${month[new Date().getMonth()]} 
          ${new Date().getFullYear()}`
      );
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [date]);

  return { date };
};
