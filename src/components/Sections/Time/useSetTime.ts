import { useEffect, useState } from "react";

export const useSetTime = () => {
  const [dateTime, setDateTime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [dateTime]);
  return dateTime;
};
