import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartServiceProvider } from "../../providers/cart-service/cart-service";
import { UserServiceProvider } from "../../providers/user-service/user-service";

/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage implements OnInit {

  order: any[];
  orderTotal: number;
  customer: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private cartService: CartServiceProvider,
    private userService: UserServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  ngOnInit() {
    this.userService.user = this.customer;
    this.cartService.getCart()
      .then(theCart => this.order = theCart)
      .then(cart => this.sumTotal(cart))
      .then(sum => this.orderTotal = sum);
  }

  sumTotal(order) {
    return Promise.resolve(order.reduce((total: number, item: any) => total + item.price, 0));
  }

  removeOne(itemId, itemPrice) {
    this.cartService.removeItem(itemId, itemPrice);
    this.sumTotal(this.order)
      .then(sum => this.orderTotal = sum);
  }

}
