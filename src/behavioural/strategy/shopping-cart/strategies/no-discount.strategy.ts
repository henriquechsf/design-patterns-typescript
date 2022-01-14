import { EcommerceShoppingCart } from '../ecommerce-shopping-cart';
import { DiscountStrategy } from './discount-strategy';

export class DefaultDiscount extends DiscountStrategy {
  getDiscount(cart: EcommerceShoppingCart): number {
    return cart.getTotal();
  }
}
