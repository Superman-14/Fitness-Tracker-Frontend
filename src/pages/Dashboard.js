import { useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [food, setFood] = useState("");
  const [grams, setGrams] = useState("");
  
  const logFood = async () => {
    const token = localStorage.getItem("token");
    await axios.post("https://your-backend-url/log/food", {
      foodName: food, grams,
      calories: grams * 4, // Example calculation
      protein: grams * 0.2,
      carbs: grams * 0.5,
      fats: grams * 0.1,
      date: new Date().toISOString().split("T")[0],
    }, { headers: { Authorization: `Bearer ${token}` } });
  };

  return (
    <div>
      <h2>Log Your Diet</h2>
      <input type="text" placeholder="Food Name" onChange={(e) => setFood(e.target.value)} />
      <input type="number" placeholder="Grams" onChange={(e) => setGrams(e.target.value)} />
      <button onClick={logFood}>Log Food</button>
    </div>
  );
}