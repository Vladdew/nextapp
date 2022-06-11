import type { NextPage } from "next";
import Router from "next/router";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { MainLayout } from "./components/MainLayout";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <MainLayout title={"Goods title"} />
      <h1 className="main-h1">Flowers delivery</h1>
      <p className="heading-p">Order roses for your lovely lady</p>
      <main className={styles.main}>
        <div className="tiles-cont">
          <button
            className="navButton"
            onClick={() => Router.push("/categories/HundredRoses")}
          >
            <img src="101.jpg" alt="101" />
            <div className="navBut-title">101 Roses</div>
          </button>
          <button
            className="navButton"
            onClick={() => Router.push("/categories/FiftyRoses")}
          >
            <img src="51.jpeg" alt="51" />
            <div className="navBut-title">51 Roses</div>
          </button>
          <button
            className="navButton"
            onClick={() => Router.push("/categories/NineteenRoses")}
          >
            <img src="19.jpeg" alt="19" />
            <div className="navBut-title">19 Roses</div>
          </button>
          <button
            className="navButton"
            onClick={() => Router.push("/categories/VIP")}
          >
            <img src="vip.jpeg" alt="vip" />
            <div className="navBut-title">VIP</div>
          </button>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
      <div className={"image-container"}>
        <Image
          alt="Mountains"
          src="/fon.jpeg"
          layout="fill"
          objectFit="cover"
        />
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default Home;
