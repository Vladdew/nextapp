import { goods } from "../data/goods";
export default function Goods(req: any, res: any) {
  res.status(200).json(goods);
}
