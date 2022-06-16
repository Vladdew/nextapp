import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MainLayout } from "../../components/MainLayout";
import LoadingScreen from "../../components/LoadingScreen";
import Router from "next/router";
import { GoodTypes } from "../../interfaces/good";
import { NextPageContext } from "next";

interface CategoryPageProps {
  cat: GoodTypes[];
}

export default function Category({ cat: serverCat }: CategoryPageProps) {
  const [cat, setCat] = useState(serverCat);

  useEffect(() => {
    async function load() {
      try {
        const response = await fetch(`${process.env.API_URL}/goods`);
        const data = await response.json();
        let cat = data.filter(
          (good: GoodTypes) => good.category.split(" ")[1] === Router.query.id
        );
        setCat(cat);
      } catch (error) {
        console.error(error);
      }
    }
    if (!serverCat) load();
  }, []);

  if (!cat) {
    return (
      <MainLayout>
        <LoadingScreen />
      </MainLayout>
    );
  }

  const catTitle = cat[0].category.includes("rose51")
    ? "Букеты из 51 розы"
    : cat[0].category.includes("rose101")
    ? "Букеты из 101 розы"
    : cat[0].category.includes("rose19")
    ? "Букеты из 19 роз"
    : cat[0].category.includes("roseVIP")
    ? "VIP букеты из роз"
    : "";

  return (
    <>
      <MainLayout />
      <h1>{catTitle}</h1>
      <ul className="goodlist">
        {cat &&
          cat.map((good: GoodTypes) => {
            return (
              <li className="goodlist__good" key={good.id}>
                <Link
                  href={`/api/good/[id]`}
                  as={`/api/good/${good.id}`}
                  className="catButton"
                >
                  <a>
                    <Image
                      src={good.url}
                      alt="51 roses"
                      width={500}
                      height={500}
                    />
                    <div className="goodlist__title">{good.title}</div>
                  </a>
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}

interface CatNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

Category.getInitialProps = async ({ query, req }: CatNextPageContext) => {
  if (!req) return { cat: null };
  try {
    const response = await fetch(`${process.env.API_URL}/goods`);

    const result: GoodTypes[] = await response.json();
    let cat = result.filter(good => good.category.split(" ")[1] === query.id);

    return { cat };
  } catch (e) {
    console.error(e);
  }
};
