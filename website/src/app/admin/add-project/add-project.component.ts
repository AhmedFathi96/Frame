import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/service/projects.service';
import {Project} from 'src/app/interfaces/project'
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
project:Project={};
selectedFile:any;
//selectedFile: ImageSnippet;
onFileSelected(event:any){
  this.selectedFile=<File>event.target.files[0]
}
  constructor(private projectsService:ProjectsService , private router :Router) { }
  products:Product[]=[]
  getProducts(){
    this.projectsService.getProducts().subscribe((res)=>{
      this.products = res
    })
  }
  formSubmit()
{
  console.log(this.project)
  //const file: File = imageInput.files[0];
  //const reader = new FileReader();
  //reader.addEventListener('load', (event: any) => {
//    this.selectedFile = new ImageSnippet(event.target.result, file);
  this.projectsService.addProject(this.project.title,this.project.product,this.selectedFile,this.project.consultant,this.project.owner,this.project.location).subscribe((res)=>{
    console.log(res);
    this.project = res;
  });
  this.router.navigate(['/projectsAdmin'])
 // reader.readAsDataURL(file);
}
  ngOnInit(): void {
    this.getProducts()
  }


  img !: any


  isDisabled():boolean {
      return(
      !this.project.product
      || !this.project.title
      || ! this.project.owner
      || ! this.project.location
      || ! this.project.consultant
      );
  }
}
