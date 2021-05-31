//product service
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  baseUrl="http://18.223.164.22/"

  constructor( private http: HttpClient) { }
  getProjects(){
    return this.http.get<Project[]>(this.baseUrl + 'api/project/projects')
  }

  getProducts(){
    return this.http.get<Product[]>(this.baseUrl + 'api/product/products')
  }

  getProduct(id:string){
    return this.http.get<Product>(this.baseUrl + 'api/product/products/' + id)
  }


  getProductImages(id:string){
    return this.http.get<any[]>(this.baseUrl + 'api/productImages/get-productImages/' +id)
  }
  //add new project
  addProject(title:any,productID:any,avatar:any,consultant:any,owner:any,location:any){
   // console.log(title,description,avatar,productID)
    const postData = new FormData();
    postData.append("title",title);
    postData.append("productID",productID);
    postData.append("consultant",consultant);
    postData.append("owner",owner);
    postData.append("location",location);
    postData.append("img",avatar);
    console.log(postData)
    return this.http.post(this.baseUrl+'api/project/add-project',postData)
  }

  addProduct(title:any,description:any){
    return this.http.post(this.baseUrl+'api/product/create-product',{title:title,description:description})
  }
  addProductImage(img:any,productId:string){
    const formDate = new FormData();
    formDate.append("img",img);
    formDate.append("productId",productId);
    return this.http.post(this.baseUrl+'api/productImages/add-productImage',formDate)
  }

  // addProject(project: Project){
  //   return this.http.post(this.baseUrl+'projects',project)
  // }
  //delete project
  deleteProject(id:string){
    return this.http.delete(this.baseUrl + 'projects/' +id)
  }
  deleteProduct(id:string){
    return this.http.delete(this.baseUrl + 'products/' +id)
  }
  deleteProductImages(id:string){
    return this.http.delete(this.baseUrl + 'api/productImages/delete-productImages/' +id)
  }
  //update project
}
