export class UserData {
    constructor(
public _id ? : string,
public name?:string,
public email?:string,
public street?:string,
public city?:string,
public zipcode?: number,
public tasks ?:[
    title?:string,
    completed?:boolean],

public posts?:[
    title?:string,
    body?:string
]){}
}
