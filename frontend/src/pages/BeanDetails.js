import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
export default function BeanDetails(props) {
  const [bean, setBean] = useState("");
  const { beanId } = useParams();
  const userId = localStorage.getItem("id");
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/beans/${beanId}`);
        console.log("Bean:", response.data);
        setBean(response.data);
      } catch (e) {
        console.log("error:", e);
      }
    })();
  }, []);

  return (
    <div>
      <div className="backgroundPages"></div>
      <div
        className="animation"
        style={{ textAlign: "center", color: "white", paddingTop: 50 }}
      >
        <h1 style={{ fontSize: 25 }}>
          All you need to know about beans from:{" "}
        </h1>
        <div key={bean.id}>
          <h2 className="boldTitle" style={{ fontSize: "60px" }}>
            {bean.name}
          </h2>
          <h3
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
              marginTop: 40,
            }}
          >
            {" "}
            {bean.facts}{" "}
          </h3>
          <div
            style={{
              padding: 40,
            }}
          >
            {bean.history}
          </div>
        </div>
      </div>
    </div>
  );
}
