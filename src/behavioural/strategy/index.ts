import { EcommerceShoppingCart } from './shopping-cart/ecommerce-shopping-cart';
import { NewDiscount } from './shopping-cart/strategies/new-discount.strategy';

const shoppingCart = new EcommerceShoppingCart(new NewDiscount());
shoppingCart.addProduct({ name: 'Produto 1', price: 50 });
shoppingCart.addProduct({ name: 'Produto 2', price: 50 });
shoppingCart.getTotal();
shoppingCart.getTotalWithDiscount();
