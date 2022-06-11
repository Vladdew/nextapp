import Router from "next/router";
import { MainLayout } from "../components/MainLayout";
import Image from "next/image";

export default function NineteenRoses() {
  return (
    <MainLayout title={"Goods title"}>
      <div className="container">
        <h1 className="vipTitle title">Nineteen roses</h1>
        <Image
          className="catImg"
          src="/19.jpeg"
          alt="19 roses"
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
