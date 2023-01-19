import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts():Product[]{
    return[
      new Product(101,"Pran",200,30,5),
      new Product(102,"fresh",250,15,3),
      new Product(103,"pepsi",300,25,4),
      new Product(104,"amul",250,35,3),
      new Product(105,"coke",300,20,1.5)

    ];
  }
}
