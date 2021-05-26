import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[]=[]
  constructor(private projectsService:ProjectsService) { }
  getProducts(){
    this.projectsService.getProducts().subscribe((res)=>{
      this.products = res
      console.log("===============>",res)
    })
  }
  ngOnInit(): void {
  this.getProducts();

  }


}
