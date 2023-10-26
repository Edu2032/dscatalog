import { Category } from './Category';

export type Products = {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  date: string;
  categories: Category[];
};
