export interface Produto { 
    id:number,
    price:number,
    name:string;
    favorite:boolean
    star:number 
    tags:string[];
    imageUrl:string;
    cookTime: string;
    origins:string[];
    category:string[];
    maisVendido:boolean;
    promocao:boolean;
}