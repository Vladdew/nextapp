import Link from "next/link";
import { MainLayout } from "../components/MainLayout";
import classes from "../styles/error.module.scss";

export default function ErrorPage() {
  return (
    <MainLayout>
      <h1 className={classes.errorh1}>Error 404</h1>
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        Go to the{" "}
        <Link href={"/"}>
          <a className={classes.link}>main</a>
        </Link>{" "}
        page
      </div>
    </MainLayout>
  );
}
