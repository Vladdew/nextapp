import Router from "next/router";
import { MainLayout } from "../components/MainLayout";
import Image from "next/image";

export default function FiftyRoses() {
  return (
    <MainLayout title={"Goods title"}>
      <div className="container">
        <h1 className="vipTitle title">Fifty roses</h1>
        <Image
          className="catImg"
          src="/51.jpeg"
          alt="Fiftyone roses"
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
