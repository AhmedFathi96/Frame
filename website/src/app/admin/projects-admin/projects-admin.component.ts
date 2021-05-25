import { Product } from 'src/app/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { ProjectsService } from 'src/app/service/projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-admin',
  templateUrl: './projects-admin.component.html',
  styleUrls: ['./projects-admin.component.css']
})
export class ProjectsAdminComponent implements OnInit {

  projects:Project[]=[]
  constructor(private projectsService:ProjectsService , private router :Router) { }
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
  delete(id:any){
    this.projectsService.deleteProject(id).subscribe((res)=>{

      console.log(res);
    });
  }
  ngOnInit(): void {
    this.getProjects()
    this.getProducts()
  }

}
