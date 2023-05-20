import Product from "../Product";

export default interface RankingItemDto extends Product {
  rank: number;
}