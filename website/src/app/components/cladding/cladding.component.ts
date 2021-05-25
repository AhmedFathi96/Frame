import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { Project } from 'src/app/interfaces/project';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-cladding',
  templateUrl: './cladding.component.html',
  styleUrls: ['./cladding.component.css']
})
export class CladdingComponent implements OnInit {

  projects:Project[]=[]
  constructor(private projectsService:ProjectsService,private route:ActivatedRoute) { }
  getProjects(){
    this.projectsService.getProjects().subscribe((res)=>{
      this.projects = res
    })
  }
  products:Product[]=[]
  getProducts(){
    this.projectsService.getProducts().subscribe((res)=>{
      this.products = res
    })
  }
  
  id = this.route.snapshot.paramMap.get('id')


  ngOnInit(): void {
    this.getProjects()
    this.getProducts()
    //this.router.navigate(['/projects#'+this.id])
    console.log(this.id)

   // window.location.href = '/projects#'+this.id ;
  }

}
