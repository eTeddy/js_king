//https://github.com/sahandghavidel/HTML-CSS-JavaScript-projects-for-beginners/tree/main/projects/mini-calendar
import './Calendar.css';
import { useState, useEffect } from "react";

export const Calendar = () => {
  const [monthName, setMonthName] = useState("");
  const [dayName, setDayName] = useState("");
  const [dayNum, setDayNum] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    const date = new Date();
    setMonthName(date.toLocaleString("en", { month: "long" }));
    setDayName(date.toLocaleString("en", { weekday: "long" }));
    setDayNum(date.getDate());
    setYear(date.getFullYear());
  }, []);

  return (
    <div className="calendar-container">
      <p className="month-name">{monthName}</p>
      <p className="day-name">{dayName}</p>
      <p className="day-number">{dayNum}</p>
      <p className="year">{year}</p>
    </div>
  );
};




















/*
export const Calendar = () => {
  const monthNameEl = document.getElementById("month-name");
  const dayNameEl = document.getElementById("day-name");
  const dayNumEl = document.getElementById("day-number");
  const yearEl = document.getElementById("year");
  
  const date = new Date();
  const month = date.getMonth();
  monthNameEl.innerText = date.toLocaleString("en", {
    month: "long",
  });
  
  dayNameEl.innerText = date.toLocaleString("en", {
    weekday: "long",
  });
  
  dayNumEl.innerText = date.getDate();
  
  yearEl.innerText = date.getFullYear();

  return (
    <div className="calendar-container">
      <p className="month-name" id="month-name">April</p>
      <p className="day-name" id="day-name">Friday</p>
      <p className="day-number" id="day-number">20</p>
      <p className="year" id="year">2020</p>
    </div>
  );
};
*/