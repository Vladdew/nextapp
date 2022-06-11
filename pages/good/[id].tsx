import { useRouter } from "next/router";
// import HundredRoses from "../categories/HundredRoses";
// import FiftyRoses from "../categories/FiftyRoses";
// import NineteenRoses from "../categories/NineteenRoses";
// import VIP from "../categories/VIP";

export default function Good() {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <h1>Good {router.query.id}</h1>
    </>
  );
}
