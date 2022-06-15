import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { MainLayout } from "../components/MainLayout";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <MainLayout title={"Goods title"} />
      <h1 className="main-h1">Flowers delivery</h1>
      <p className="heading-p">Order roses for your lovely lady</p>
      <main className={styles.main}>
        <div className="tiles-cont">
          <Link href={"/category/rose101"} className="catLink">
            <a className="category-link">
              <Image src="/101.jpg" alt="101 roses" width={200} height={200} />
              <span className="navBut-title">101 Roses</span>
            </a>
          </Link>
          <Link href={"/category/rose51"} className="catLink">
            <a className="category-link">
              <Image src="/51.jpeg" alt="51 roses" width={200} height={200} />
              <span className="navBut-title">51 Roses</span>
            </a>
          </Link>
          <Link href={"/category/rose19"} className="catLink">
            <a className="category-link">
              {" "}
              <Image src="/19.jpeg" alt="19 roses" width={200} height={200} />
              <span className="navBut-title">19 Roses</span>
            </a>
          </Link>
          <Link href={"/category/roseVIP"} className="catLink">
            <a className="category-link">
              {" "}
              <Image src="/vip.jpeg" alt="VIP roses" width={200} height={200} />
              <span className="navBut-title">VIP</span>
            </a>
          </Link>
        </div>
      </main>

      <div className={"image-container"}>
        <Image
          layout="fill"
          alt="background"
          src="/fon.jpeg"
          objectFit="cover"
        />
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default Home;
