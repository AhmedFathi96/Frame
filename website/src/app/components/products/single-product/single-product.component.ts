import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  @Input() product:Product = {};
  @Input() dir:string = 'left';
  images:any = [];
  mainImageSrc:string = ''
  constructor(private projectsService:ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.getProductImages(this.product._id).subscribe((res:any) =>{
      this.mainImageSrc = `http://18.223.164.22/api/productImages/product/${this.product._id}/image/${res.data[0]}/view`
      res.data.forEach( (img:string,index:number) =>{
        if(index !== 0){
          this.images.push({path:`http://18.223.164.22/api/productImages/product/${this.product._id}/image/${img}/view`})
        }
      })
    })

  }

}
