"use client"
import { useEffect, useState } from "react";
import 'dotenv/config';
export default function Home() {
  const [items, setItems] = useState([]);
  const BACK_URI = process.env.BACK_URI;
  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await fetch(BACK_URI);
        const result = await response.json();
        console.log(result);
        setItems(result);
      } catch (e) {
        console.error(e.message);
      }
    }
    fetchdata();
  }, []);

  return (
    <div className="h-screen w-screen p-12 grid grid-cols-5 gap-y-8">
      {items.map((item) => (
        <div className="w-80 h-24 bg-slate-800 text-white p-4 mb-4 flex flex-col rounded-2xl" key={item._id}>
          <h2>{item.name}</h2>
          <p>Price: ${item.price}</p>
          <p>Linked: {item.linked.join(', ')}</p>
        </div>
      ))}
    </div>
  );
}
