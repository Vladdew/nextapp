import { goods } from "../data/goods";

export default function Good(req: any, res: any) {
  console.log("PUPUUPPUPUUP", goods[req.query.id]);
  res.status(200).json(goods[req.query.id]);
}
