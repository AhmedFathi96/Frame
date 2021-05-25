import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:{product:Product , image:string}[]=[];
  constructor(private router:Router, private projectsService:ProjectsService,private route:ActivatedRoute) { }
  getProducts(){
    this.projectsService.getProducts().subscribe((res)=>{
      res.forEach(item =>{
        this.projectsService.getProductImages(item._id).subscribe((img:any)=>{
          this.products.push({product:item,image:`http://localhost:6100/api/productImages/product/${item._id}/image/${img.data[0]}/view`})
        })

      })

    })
  }
  ngOnInit(): void {
  this.getProducts()

  }
  selectedProduct(pro:Product){
    this.router.navigateByUrl(`product/${pro._id}`);
  }

}
