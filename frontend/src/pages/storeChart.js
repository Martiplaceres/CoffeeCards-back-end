import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { selectToken, selectUser } from "../store/user/selectors";

export default function StoreStats() {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const [myStats, setMyStats] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `/api/transaction/stats/${user.store.id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log("My stats:", response.data);
        setMyStats(response.data);
      } catch (e) {
        console.log("error:", e);
      }
    })();
  }, [user]);

  return (
    <div>
      <div className="backgroundPages"></div>
      <div
        style={{
          padding: 60,
        }}
      >
        <h1 className="vouchersCardTitle">Your sales per day:</h1>

        <BarChart
          width={500}
          height={300}
          data={myStats}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          style={{
            backgroundColor: "#eee7e1",
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sold" stackId="a" fill="#8884d8" />
          <Bar dataKey="free" stackId="a" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
}
