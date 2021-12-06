export class ProductModel {
  image: string;
  titel: string;
  price: number;
  oldPrice: number;
  credit: number;
  calculatedRating: number;
  description: string;
  advantages: string;
  disAdvantages: string;
  categories: string[];
  tages: string;
  characteristics: {
    [key: string]: string;
  };
}
