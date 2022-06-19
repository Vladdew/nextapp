import { useState, useEffect } from "react";
import Image from "next/image";
import { MainLayout } from "../../components/MainLayout";
import Router from "next/router";
import LoadingScreen from "../../components/LoadingScreen";
import { GoodTypes } from "../../interfaces/good";
import { NextPageContext } from "next";

interface CartPageProps {
  good: GoodTypes;
}

export default function Cart({ goodList }: any) {
  const [goods, setGoods] = useState();

  console.log(goodList);

  if (!goods) {
    return (
      <MainLayout>
        <h3>Пусто</h3>
      </MainLayout>
    );
  }

  return (
    <>
      <MainLayout />
      <div className="card">
        <h1 className="good-card v">Cart</h1>
      </div>
    </>
  );
}
