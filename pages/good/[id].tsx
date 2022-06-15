import { useState, useEffect } from "react";
import Image from "next/image";
import { MainLayout } from "../../components/MainLayout";
import Router from "next/router";
import LoadingScreen from "../../components/LoadingScreen";
import { GoodTypes } from "../../interfaces/good";
import { NextPageContext } from "next";

interface GoodPageProps {
  good: GoodTypes;
}

export default function Good({ good: serverGood }: GoodPageProps) {
  const [good, setGood] = useState(serverGood);

  useEffect(() => {
    async function load() {
      try {
        const response = await fetch(
          `${process.env.API_URL}/goods/${Router.query.id}`
        );
        const good = await response.json();
        setGood(good);
      } catch (error) {
        console.error(error);
      }
    }
    if (!serverGood) load();
  }, []);

  if (!good) {
    return (
      <MainLayout>
        <LoadingScreen />
      </MainLayout>
    );
  }

  return (
    <>
      <MainLayout />
      <div className="good-card">
        <h1 className="good-card v">{good.title}</h1>
        <span className="good-card__price">{good.price} грн</span>
        <Image src={good.url} alt={good.title} width={350} height={350} />
        <div className="good-card__wrap">
          <p className="good-card__desc">{good.description}</p>
          <div className="good-card__buttons-wrap">
            <button
              onClick={() => Router.back()}
              className="good-card__back good-card__button"
            >
              Назад
            </button>
            <button className="good-card__order good-card__button">
              Заказать
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

interface GoodNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

Good.getInitialProps = async ({ query, req }: GoodNextPageContext) => {
  if (!req) return { good: null };

  try {
    const response = await fetch(`${process.env.API_URL}/goods/${query.id}`);
    const good: GoodTypes = await response.json();
    return { good };
  } catch (error) {
    console.error(error);
  }
};
