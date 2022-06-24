import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AddToCartService {
  productCart: any = [];
  localData: any;
  constructor() { }


  setProduct(product: any) {
    console.log( product)
    let previousdata = localStorage.getItem('product');
    if (previousdata !== undefined && previousdata !== null && previousdata.length !== 0) {
      this.productCart = JSON.parse(previousdata);
    }
    this.productCart.push(product);
    console.log(this.productCart);
    localStorage.setItem('product', JSON.stringify(this.productCart));
  }

  getProduct() {
    this.localData = localStorage.getItem('product');
    console.log("get",JSON.parse(this.localData));
    return JSON.parse(this.localData)
  }





}
