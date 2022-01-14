import { EcommerceProductProtocol } from './ecommerce-product.protocol';
import { DiscountStrategy } from './strategies/discount-strategy';

export class EcommerceShoppingCart {
  private products: EcommerceProductProtocol[] = [];

  constructor(private discountStrategy: DiscountStrategy) {}

  addProduct(...products: EcommerceProductProtocol[]): void {
    products.forEach((product) => this.products.push(product));
  }

  getProducts(): EcommerceProductProtocol[] {
    return this.products;
  }

  getTotal(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  getTotalWithDiscount(): number {
    return this.discountStrategy.getDiscount(this);
  }
}
