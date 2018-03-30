import {Comment} from './comment';
export interface Dish{
    id:number;
    name: string;
    image: string;
    category:  string;
    lable: string;
    price: string;
    desc: string;
    comments: Comment[]
}