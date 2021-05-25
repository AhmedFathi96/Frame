import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/service/projects.service';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit {

  selectedFile:any;

  //constructor() { }
  products:Product[]=[]
  selectedProduct:Product= {};

  constructor(private projectsService:ProjectsService) { }
  getProducts(){
    this.projectsService.getProducts().subscribe((res)=>{
      this.products = res
    })
  }
  ngOnInit(): void {
  this.getProducts()
  }
  title = 'ng-carousel-demo';
  delete(id:any){
    this.projectsService.deleteProduct(id).subscribe((res)=>{

      console.log(res);
    });
  }
  onFileSelected(event:any){
    if(!event.target.files[0])
    this.selectedFile=null
    else
    this.selectedFile=<File>event.target.files[0]
    //this.selectedFile=<File>event.target.files
  }

  slides = [
    {img: "https://dummyimage.com/350x150/423b42/fff"},
    {img: "https://dummyimage.com/350x150/2a2b7a/fff"},
    {img: "https://dummyimage.com/350x150/1a2b7a/fff"},
    {img: "https://dummyimage.com/350x150/7a2b7a/fff"},
    {img: "https://dummyimage.com/350x150/9a2b7a/fff"},
    {img: "https://dummyimage.com/350x150/5a2b7a/fff"},
    {img: "https://dummyimage.com/350x150/4a2b7a/fff"}
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};

  slickInit(e:any) {
    console.log('slick initialized');
  }

  breakpoint(e:any) {
    console.log('breakpoint');
  }

  afterChange(e:any) {
    console.log('afterChange');
  }

  beforeChange(e:any) {
    console.log('beforeChange')
  }

  selectProduct(pro:Product){
    this.selectedProduct = pro;
  }

  deleteProduct(id:string){
    this.projectsService.deleteProduct(id).subscribe((res)=>{
      this.products = this.products.filter(item => item._id !== res)
    });
  }

  formSubmit(){
    console.log(this.selectedProduct);
    if(this.selectedFile !== null || this.selectedFile !== undefined){
      this.projectsService.addProductImage(this.selectedFile,this.selectedProduct._id).subscribe((res)=>{
        this.selectedProduct = {};
        this.selectedFile = null;
      });
    }
  }

}
