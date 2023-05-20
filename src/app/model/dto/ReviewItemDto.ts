export interface Review {
  id: number;
  productId: number;
  productName: string;
  productSize: string;
  productImageUrl: string;
  content: string;
  imageUrl: string;
  rate: number;
  regDt: Date;
  authorName: string;
}