import { EcommerceShoppingCart } from '../ecommerce-shopping-cart';
import { DiscountStrategy } from './discount-strategy';

export class NewDiscount extends DiscountStrategy {
  getDiscount(cart: EcommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 150) {
      this.discount = 5;
    }

    return total - total * (this.discount / 100);
  }
}
