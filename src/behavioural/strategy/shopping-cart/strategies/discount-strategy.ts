import { EcommerceShoppingCart } from '../ecommerce-shopping-cart';

export abstract class DiscountStrategy {
  protected discount = 0;
  abstract getDiscount(cart: EcommerceShoppingCart): number;
}
