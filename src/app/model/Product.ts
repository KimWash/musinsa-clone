export default interface Product {
  id: number;
  name: string;
  imageUrl: string;
  brandName: string;
  originPrice: number ;
  discountedPrice?: number | null;
}
