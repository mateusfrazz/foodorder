export interface Produto {
    id:number,
    price:number,
    valorPromocional:number,
    name:string;
    favorite:boolean
    star:number
    tags:string[];
    imageUrl:string;
    description:string;
    cookTime: string;
    origins:string[];
    category:string[];
    maisVendido:boolean;
    promocao:boolean;
}
