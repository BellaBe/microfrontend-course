import { mount as mountProduct } from 'products/ProductsIndex';

import { mount as mountCart } from 'cart/CartShow';



console.log('Container!');

mountProduct(document.querySelector('#my-products'));
mountCart(document.querySelector('#my-cart'));