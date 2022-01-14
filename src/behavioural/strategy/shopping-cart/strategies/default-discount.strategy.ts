import { EcommerceShoppingCart } from '../ecommerce-shopping-cart';
import { DiscountStrategy } from './discount-strategy';

export class DefaultDiscount extends DiscountStrategy {
  getDiscount(cart: EcommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 100 && total < 200) {
      this.discount = 10;
    } else if (total >= 200 && total < 300) {
      this.discount = 20;
    } else if (total >= 300) {
      this.discount = 30;
    }

    return total - total * (this.discount / 100);
  }
}
