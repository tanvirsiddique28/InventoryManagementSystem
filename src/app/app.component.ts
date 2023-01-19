import { Component } from '@angular/core';
import { Product } from './product';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private myproducts:ProductsService){
this.productinfo = this.myproducts.getProducts();
  }
  title = 'productinfo';

  id:number = 0;
  name:string = " ";
  price:number = 0;
  stock:number = 0;
  discount:number = 0;

  productinfo:Product[];

  addProducts(){
    let f = this.productinfo.find(data => data.id == this.id)
    if(f == null && this.id > 0){
      this.productinfo?.push(new Product(this.id,this.name,this.stock,this.price,this.discount))
      this.messages = "item added";
    }else{
      this.messages = "item is exist or empty";
    }
    
  }
  messages:string = " ";
 updateProducts(id1:number){
    for(let i = 0;i < this.productinfo.length;i++){
if(id1 == this.productinfo[i].id){
this.productinfo[i].name = this.name;
this.productinfo[i].stock = this.stock;
this.productinfo[i].price = this.price;
this.productinfo[i].discount = this.discount;
this.messages = "item updated ";

}
    }
  }
  
  deleteProducts(id1:number){
    for(let i = 0;i < this.productinfo.length;i++){
if(id1 == this.productinfo[i].id){
this.productinfo.splice(i,1);
this.messages = "item deleted ";
}
    }
  }
}
