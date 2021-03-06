import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { MainLayout } from "../components/MainLayout";
import { GoodTypes } from "../interfaces/good";
import { NextPageContext } from "next";

interface HomePageProps {
  cities: [
    {
      main: { temp: number };
      weather: any[];
    }
  ];
}

interface UserData {
  prevState: null;
  main: { temp: number };
  weather: any[];
}

let coords = [
  [50, 30],
  [50, 33],
  [50, 34],
  [50, 35],
  [50, 36],
];

const Home = ({ cities: serverCities }: any) => {
  const [cities, setCities] = useState(serverCities);

  useEffect(() => {
    async function load() {
      try {
        const data = await fethchCities(coords);
        setCities(data.cities);
      } catch (error) {
        console.error(error);
      }
    }
    load();
  }, []);

  function kelvinToC(kel: number) {
    var kelvinTemp = kel;
    var kelvinToCel = kelvinTemp - 273.15;
    return Math.floor(kelvinToCel) + "\xB0C";
  }

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
      <footer>
        <div className="weather">
          <ul className="city-wrap">
            {cities &&
              cities.map((city: any) => {
                let temp = kelvinToC(city.main.temp);
                return (
                  <li key={city.id} className="city">
                    <span className="city__name">{city.name + " "}</span>
                    <span className="wrapper">
                      <span className="wrapper__temp">{temp + " "}</span>
                      <span className="wrapper__desc">
                        {city.weather[0].main}
                      </span>
                      <img
                        className="weather__icon"
                        src={`https://openweathermap.org/img/w/${city.weather[0].icon}.png`}
                      />
                    </span>
                  </li>
                );
              })}
          </ul>
        </div>
      </footer>
      <div className="image-container">
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

interface HomeNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

async function fethchCities(coords: any[]) {
  return {
    cities: await Promise.all(
      coords.map(async coord => {
        const data = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coord[0]}&lon=${coord[1]}&appid=2f67e1eb027e5744d6e6362effb27e78`
        );

        const res = await data.json();
        return res;
      })
    ),
  };
}

Home.getInitialProps = async (ctx: HomeNextPageContext) => {
  if (!ctx.req) return { good: null };
  try {
    const data = await fethchCities(coords);
    return data.cities;
  } catch (error) {
    console.error(error);
    return {};
  }
};
