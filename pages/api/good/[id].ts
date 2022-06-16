import { goods } from "../data/goods";

export default function getGoodById(req: any, res: any) {
  console.log(goods[req.query.id]);
  res.status(200).json(goods[req.query.id]);
}
