import Router from "next/router";
import { useState, useEffect } from "react";
import { MainLayout } from "./components/MainLayout";

type goodType = {
  category: string;
  id: string;
  description: string;
};

export default function Goods() {
  const [goods, setGoods] = useState([]);
  useEffect(() => {
    async function load() {
      const response = await fetch("http://localhost:4200/goods");
      const json = await response.json();
      console.log(json);
      setGoods(json);
    }
    load();
  }, []);

  return (
    <MainLayout title={"Goods title"}>
      <div className="container">
        <h1>Goods</h1>
        <ul>
          {goods.map((good: goodType) => {
            return (
              <li
                key={good.id}
                className={good.category}
                onClick={() =>
                  Router.push(`/categories/${good.category.split(" ")[0]}`)
                }
              >
                <p>{good.description}</p>
              </li>
            );
          })}
        </ul>
        <button
          className="navButton"
          onClick={() => {
            Router.push("/");
          }}
        >
          Go home
        </button>
      </div>
    </MainLayout>
  );
}
