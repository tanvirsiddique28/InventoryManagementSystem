export class Product {

    id?:number;
    name?:string;
    stock?:number;
    price?:number;
    discount?:number;

    constructor(id?:number,name?:string,stock?:number,price?:number,discount?:number){
this.id = id;
this.name = name;
this.stock = stock;
this.price = price;
this.discount = discount;
    }
}
