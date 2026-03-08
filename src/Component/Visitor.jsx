import { useEffect, useState, useRef } from "react";

export default function Visitor() {
  const [visits, setVisits] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    let count = localStorage.getItem("site_visits");

    if (count) {
      count = parseInt(count) + 1;
    } else {
      count = 1;
    }

    localStorage.setItem("site_visits", count);
    setVisits(count);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>👥 Visitors</h3>
      <p>{visits}</p>
    </div>
  );
}