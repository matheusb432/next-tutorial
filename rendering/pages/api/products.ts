// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '../../model/product';

function randNum(min = 1, max = 100000) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
  res.status(200).json([
    { id: randNum(), name: 'Pen', price: 1.25 },
    { id: randNum(), name: 'Eraser', price: randNum() },
    { id: randNum(), name: 'Book', price: randNum() },
    { id: randNum(), name: 'Backpack', price: 15 },
  ]);
}
