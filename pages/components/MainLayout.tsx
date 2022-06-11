import { useState, FC } from "react";
import Router from "next/router";

import Link from "next/link";

type MainLayout = {
  title?: string;
  children?: any;
};

export const MainLayout = ({ children, title = "Nexp app" }: MainLayout) => {
  return (
    <>
      <title>{title}</title>
      <header className="header">
        <div className="content">
          <div className="header__inner">
            <div
              onClick={() => {
                Router.push("/");
              }}
              className="logo"
            >
              <img src="../listok.png" alt="menu" />
              <p className="logo-title">Listok</p>
            </div>
            <div className="menu">
              <img src="../menu.png" alt="menu" />
            </div>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          height: 44px;
          width: 100%;
          border-bottom: 1px solid black;
          background: #00000029;
          z-index: 1;
        }

        .logo {
          display: flex;
          justify-content: space-around;
          padding-top: 10px;
          transform: scale(1);
          transition: transform 0.3s;
          cursor: pointer;
        }

        .logo img {
          height: 26px;
          width: 27px;
        }

        .logo:hover {
          transform: scale(1.05);
        }

        .logo-title {
          font-weight: bold;
          font-family: fantasy;
          font-size: 20px;
          color: #fa0202;
        }

        .menu {
          padding: 7px 16px;
        }

        .menu img:hover {
          transform: scale(1.05);
        }

        .menu img {
          transform: scale(1);
          transition: transform 0.3s;
          cursor: pointer;
          width: 40px;
          height: 29px;
          margin-top: 0px;
        }

        .logo {
          width: 80px;
          font-weight: bold;
          font-family: fantasy;
          font-size: 20px;
          margin-left: 15px;
        }

        .header__inner {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </>
  );
};
