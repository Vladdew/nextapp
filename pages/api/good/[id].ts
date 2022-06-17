import { goods } from "../data/goods";

export default function Good(req: any, res: any) {
  res.status(200).json(goods[req.query.id]);
}
