import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  ngOnInit(): void {
  }
  product:Product={};
  selectedFile:any;
  images:any = [];
  //add new product
  onFileSelected(event:any){
    if(!event.target.files[0])
    this.selectedFile=null
    else
    this.selectedFile=<File>event.target.files[0]
    //this.selectedFile=<File>event.target.files
  }


  constructor(private projectsService:ProjectsService , private router :Router) { }
  formSubmit(){ console.log(this.product)

    this.projectsService.addProduct(this.product.title,this.product.description).subscribe((res)=>{

      console.log(res);
      this.product = res;
    });
    this.router.navigate(['/productAdmin'])
  // reader.readAsDataURL(file);
  }



  img !: any


  isDisabled():boolean {
      return(
      !this.product.title
      || !this.product.description
      );
  }

}
