import Router from "next/router";
import { MainLayout } from "../components/MainLayout";
import Image from "next/image";

export default function HundredRoses() {
  return (
    <MainLayout title={"Goods title"}>
      <div className="container">
        <h1 className="vipTitle title">Hundred roses</h1>
        <Image
          className="catImg"
          src="/101.jpg"
          alt="101 roses"
          width={500}
          height={500}
        />

        <button className="navButton" onClick={() => Router.push("/")}>
          Go home
        </button>
      </div>
    </MainLayout>
  );
}
